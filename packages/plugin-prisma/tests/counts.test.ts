import { execute } from 'graphql';
import { gql } from 'graphql-tag';
import { prisma, queries } from './example/builder';
import schema from './example/schema';

describe('prisma counts', () => {
  afterEach(() => {
    queries.length = 0;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('relationCount and count on connections', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          __typename
          totalCount
        }
        me {
          postCount
          publishedCount
          filteredCount(published: true)
          anotherPostCount: postCount
          postsConnection(first: 1) {
            totalCount
            edges {
              node {
                id
              }
            }
          }
          oldPosts: postsConnection(first: 1, oldestFirst: true) {
            totalCount
            edges {
              node {
                id
              }
            }
          }
          publishedPosts: postsConnection(first: 1, published: true) {
            totalCount
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "me": {
            "anotherPostCount": 250,
            "filteredCount": 149,
            "oldPosts": {
              "edges": [
                {
                  "node": {
                    "id": "1",
                  },
                },
              ],
              "totalCount": 250,
            },
            "postCount": 250,
            "postsConnection": {
              "edges": [
                {
                  "node": {
                    "id": "250",
                  },
                },
              ],
              "totalCount": 250,
            },
            "publishedCount": 149,
            "publishedPosts": {
              "edges": [
                {
                  "node": {
                    "id": "250",
                  },
                },
              ],
              "totalCount": 149,
            },
          },
          "userConnection": {
            "__typename": "QueryUserConnection",
            "totalCount": 100,
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findUnique",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": true,
                },
              },
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "orderBy": {
                  "createdAt": "desc",
                },
                "skip": 0,
                "take": 2,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "User",
        },
        {
          "action": "count",
          "args": {},
          "model": "User",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": {
                    "where": {
                      "published": true,
                    },
                  },
                },
              },
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "orderBy": {
                  "createdAt": "desc",
                },
                "skip": 0,
                "take": 2,
                "where": {
                  "published": true,
                },
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "User",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": true,
                },
              },
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "orderBy": {
                  "createdAt": "asc",
                },
                "skip": 0,
                "take": 2,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "User",
        },
      ]
    `);
  });

  it('queries only totalCount on connection', async () => {
    const query = gql`
      query {
        userConnection {
          totalCount
          __typename
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "userConnection": {
            "__typename": "QueryUserConnection",
            "totalCount": 100,
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "count",
          "args": {},
          "model": "User",
        },
      ]
    `);
  });

  it('queries only totalCount on related connection', async () => {
    const query = gql`
      query {
        me {
          postsConnection(first: 1) {
            __typename
            totalCount
          }
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "me": {
            "postsConnection": {
              "__typename": "UserPostsConnection",
              "totalCount": 250,
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findUnique",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": true,
                },
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "User",
        },
      ]
    `);
  });

  it('connection totalCount in fragment', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          ...totalCountFragment
        }
        me {
          postsConnectionFragment: postsConnection(first: 1) {
            ...postsTotalCountFragment
            edges {
              node {
                id
              }
            }
          }
        }
      }

      fragment totalCountFragment on QueryUserConnection {
        totalCount
      }

      fragment postsTotalCountFragment on UserPostsConnection {
        fragmentTotalCount: totalCount
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "me": {
            "postsConnectionFragment": {
              "edges": [
                {
                  "node": {
                    "id": "250",
                  },
                },
              ],
              "fragmentTotalCount": 250,
            },
          },
          "userConnection": {
            "totalCount": 100,
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findUnique",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": true,
                },
              },
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "orderBy": {
                  "createdAt": "desc",
                },
                "skip": 0,
                "take": 2,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "User",
        },
        {
          "action": "findMany",
          "args": {
            "skip": 0,
            "take": 2,
          },
          "model": "User",
        },
        {
          "action": "count",
          "args": {},
          "model": "User",
        },
      ]
    `);
  });

  it('connection totalCount in inline fragment', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          ... on QueryUserConnection {
            totalCount
          }
        }
        me {
          postsConnectionFragment: postsConnection(first: 1) {
            ... on UserPostsConnection {
              totalCount
            }
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "me": {
            "postsConnectionFragment": {
              "edges": [
                {
                  "node": {
                    "id": "250",
                  },
                },
              ],
              "totalCount": 250,
            },
          },
          "userConnection": {
            "totalCount": 100,
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findUnique",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": true,
                },
              },
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "orderBy": {
                  "createdAt": "desc",
                },
                "skip": 0,
                "take": 2,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "User",
        },
        {
          "action": "findMany",
          "args": {
            "skip": 0,
            "take": 2,
          },
          "model": "User",
        },
        {
          "action": "count",
          "args": {},
          "model": "User",
        },
      ]
    `);
  });

  it('nested in single item', async () => {
    const query = gql`
      query {
        post(id: 1) {
          id
          author {
            postCount
            profile {
              user {
                postCount
              }
            }
            postsConnection {
              totalCount
            }
          }
        }
        users {
          profile {
            user {
              profile {
                user {
                  profile {
                    user {
                      postCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "post": {
            "author": {
              "postCount": 250,
              "postsConnection": {
                "totalCount": 250,
              },
              "profile": {
                "user": {
                  "postCount": 250,
                },
              },
            },
            "id": "1",
          },
          "users": [
            {
              "profile": {
                "user": {
                  "profile": {
                    "user": {
                      "profile": {
                        "user": {
                          "postCount": 250,
                        },
                      },
                    },
                  },
                },
              },
            },
            {
              "profile": null,
            },
          ],
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findUnique",
          "args": {
            "include": {
              "author": {
                "include": {
                  "_count": {
                    "select": {
                      "posts": true,
                    },
                  },
                  "profile": {
                    "include": {
                      "user": {
                        "include": {
                          "_count": {
                            "select": {
                              "posts": true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              "comments": {
                "include": {
                  "author": true,
                },
                "take": 3,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "Post",
        },
        {
          "action": "findMany",
          "args": {
            "include": {
              "profile": {
                "include": {
                  "user": {
                    "include": {
                      "profile": {
                        "include": {
                          "user": {
                            "include": {
                              "profile": {
                                "include": {
                                  "user": {
                                    "include": {
                                      "_count": {
                                        "select": {
                                          "posts": true,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            "take": 2,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('nested in list of item', async () => {
    const query = gql`
      query {
        posts {
          author {
            postCount
            postsConnection(first: 1) {
              totalCount
              edges {
                node {
                  author {
                    postCount
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "posts": [
            {
              "author": {
                "postCount": 250,
                "postsConnection": {
                  "edges": [
                    {
                      "node": {
                        "author": {
                          "postCount": 250,
                        },
                      },
                    },
                  ],
                  "totalCount": 250,
                },
              },
            },
            {
              "author": {
                "postCount": 250,
                "postsConnection": {
                  "edges": [
                    {
                      "node": {
                        "author": {
                          "postCount": 250,
                        },
                      },
                    },
                  ],
                  "totalCount": 250,
                },
              },
            },
            {
              "author": {
                "postCount": 250,
                "postsConnection": {
                  "edges": [
                    {
                      "node": {
                        "author": {
                          "postCount": 250,
                        },
                      },
                    },
                  ],
                  "totalCount": 250,
                },
              },
            },
          ],
        },
      }
    `);
    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "include": {
              "author": {
                "include": {
                  "_count": {
                    "select": {
                      "posts": true,
                    },
                  },
                  "posts": {
                    "include": {
                      "author": {
                        "include": {
                          "_count": {
                            "select": {
                              "posts": true,
                            },
                          },
                        },
                      },
                      "comments": {
                        "include": {
                          "author": true,
                        },
                        "take": 3,
                      },
                    },
                    "orderBy": {
                      "createdAt": "desc",
                    },
                    "skip": 0,
                    "take": 2,
                  },
                },
              },
              "comments": {
                "include": {
                  "author": true,
                },
                "take": 3,
              },
            },
            "take": 3,
          },
          "model": "Post",
        },
      ]
    `);
  });

  it('queries correctly when totalCount and other selections are split across fragments', async () => {
    const query = gql`
      query {
        userNodeConnection(first: 1) {
          edges {
            node {
              postsConnection(first: 1) {
                totalCount
              }
              ...Example
            }
          }
        }
      }

      fragment Example on Node {
        id
        ... on User {
          postsConnection(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `;

    const result = await execute({
      schema,
      document: query,
      contextValue: { user: { id: 1 } },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "userNodeConnection": {
            "edges": [
              {
                "node": {
                  "id": "VXNlcjox",
                  "postsConnection": {
                    "edges": [
                      {
                        "node": {
                          "id": "250",
                        },
                      },
                    ],
                    "totalCount": 250,
                  },
                },
              },
            ],
          },
        },
      }
    `);
    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "posts": true,
                },
              },
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "orderBy": {
                  "createdAt": "desc",
                },
                "skip": 0,
                "take": 2,
              },
            },
            "skip": 0,
            "take": 2,
          },
          "model": "User",
        },
      ]
    `);
  });
});
