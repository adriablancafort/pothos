import { execute } from 'graphql';
import { gql } from 'graphql-tag';
import { prisma, queries } from './example/builder';
import schema from './example/schema';

describe('prisma', () => {
  afterEach(() => {
    queries.length = 0;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('connection with nested relations', async () => {
    const query = gql`
      query {
        userConnection {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              profile {
                bio
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
          "userConnection": {
            "edges": [
              {
                "node": {
                  "id": "VXNlcjox",
                  "profile": {
                    "bio": "Debitis perspiciatis unde sunt.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjoy",
                  "profile": null,
                },
              },
              {
                "node": {
                  "id": "VXNlcjoz",
                  "profile": {
                    "bio": "Vitae facere minima distinctio libero quas hic.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjo0",
                  "profile": {
                    "bio": "Asperiores odit temporibus.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjo1",
                  "profile": {
                    "bio": "Quas ea magni ratione voluptatibus dolore.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjo2",
                  "profile": {
                    "bio": "Voluptatum natus minus repellendus repellendus blanditiis sit aliquam rerum quasi.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjo3",
                  "profile": {
                    "bio": "Rem nihil debitis repellat ipsum harum occaecati beatae corporis.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjo4",
                  "profile": {
                    "bio": "Rerum quo velit deserunt quisquam reprehenderit animi.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjo5",
                  "profile": {
                    "bio": "Quo suscipit explicabo atque necessitatibus soluta.",
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjoxMA==",
                  "profile": {
                    "bio": "Perspiciatis rerum impedit magnam voluptatum in quod illo itaque.",
                  },
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46MTA=",
              "hasNextPage": true,
              "hasPreviousPage": false,
              "startCursor": "R1BDOk46MQ==",
            },
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
              "profile": true,
            },
            "skip": 0,
            "take": 11,
          },
          "model": "User",
        },
      ]
    `);
  });
  it('after', async () => {
    const query = gql`
      query {
        userConnection(first: 1, after: "R1BDOk46MQ==") {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46Mg==",
                "node": {
                  "id": "VXNlcjoy",
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46Mg==",
              "hasNextPage": true,
              "hasPreviousPage": true,
              "startCursor": "R1BDOk46Mg==",
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "cursor": {
              "id": 1,
            },
            "skip": 1,
            "take": 2,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('limit', async () => {
    const query = gql`
      query {
        userConnection(first: 100, after: "R1BDOk46MQ==") {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46Mg==",
                "node": {
                  "id": "VXNlcjoy",
                },
              },
              {
                "cursor": "R1BDOk46Mw==",
                "node": {
                  "id": "VXNlcjoz",
                },
              },
              {
                "cursor": "R1BDOk46NA==",
                "node": {
                  "id": "VXNlcjo0",
                },
              },
              {
                "cursor": "R1BDOk46NQ==",
                "node": {
                  "id": "VXNlcjo1",
                },
              },
              {
                "cursor": "R1BDOk46Ng==",
                "node": {
                  "id": "VXNlcjo2",
                },
              },
              {
                "cursor": "R1BDOk46Nw==",
                "node": {
                  "id": "VXNlcjo3",
                },
              },
              {
                "cursor": "R1BDOk46OA==",
                "node": {
                  "id": "VXNlcjo4",
                },
              },
              {
                "cursor": "R1BDOk46OQ==",
                "node": {
                  "id": "VXNlcjo5",
                },
              },
              {
                "cursor": "R1BDOk46MTA=",
                "node": {
                  "id": "VXNlcjoxMA==",
                },
              },
              {
                "cursor": "R1BDOk46MTE=",
                "node": {
                  "id": "VXNlcjoxMQ==",
                },
              },
              {
                "cursor": "R1BDOk46MTI=",
                "node": {
                  "id": "VXNlcjoxMg==",
                },
              },
              {
                "cursor": "R1BDOk46MTM=",
                "node": {
                  "id": "VXNlcjoxMw==",
                },
              },
              {
                "cursor": "R1BDOk46MTQ=",
                "node": {
                  "id": "VXNlcjoxNA==",
                },
              },
              {
                "cursor": "R1BDOk46MTU=",
                "node": {
                  "id": "VXNlcjoxNQ==",
                },
              },
              {
                "cursor": "R1BDOk46MTY=",
                "node": {
                  "id": "VXNlcjoxNg==",
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46MTY=",
              "hasNextPage": true,
              "hasPreviousPage": true,
              "startCursor": "R1BDOk46Mg==",
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "cursor": {
              "id": 1,
            },
            "skip": 1,
            "take": 16,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('before', async () => {
    const query = gql`
      query {
        userConnection(last: 100, before: "R1BDOk46NA==") {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "id": "VXNlcjox",
                },
              },
              {
                "cursor": "R1BDOk46Mg==",
                "node": {
                  "id": "VXNlcjoy",
                },
              },
              {
                "cursor": "R1BDOk46Mw==",
                "node": {
                  "id": "VXNlcjoz",
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46Mw==",
              "hasNextPage": true,
              "hasPreviousPage": false,
              "startCursor": "R1BDOk46MQ==",
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "cursor": {
              "id": 4,
            },
            "skip": 1,
            "take": -16,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('before without last', async () => {
    const query = gql`
      query {
        userConnection(before: "R1BDOk46NA==") {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "id": "VXNlcjox",
                },
              },
              {
                "cursor": "R1BDOk46Mg==",
                "node": {
                  "id": "VXNlcjoy",
                },
              },
              {
                "cursor": "R1BDOk46Mw==",
                "node": {
                  "id": "VXNlcjoz",
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46Mw==",
              "hasNextPage": true,
              "hasPreviousPage": false,
              "startCursor": "R1BDOk46MQ==",
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "cursor": {
              "id": 4,
            },
            "skip": 1,
            "take": -11,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('last without before', async () => {
    const query = gql`
      query {
        userConnection(last: 5) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46OTY=",
                "node": {
                  "id": "VXNlcjo5Ng==",
                },
              },
              {
                "cursor": "R1BDOk46OTc=",
                "node": {
                  "id": "VXNlcjo5Nw==",
                },
              },
              {
                "cursor": "R1BDOk46OTg=",
                "node": {
                  "id": "VXNlcjo5OA==",
                },
              },
              {
                "cursor": "R1BDOk46OTk=",
                "node": {
                  "id": "VXNlcjo5OQ==",
                },
              },
              {
                "cursor": "R1BDOk46MTAw",
                "node": {
                  "id": "VXNlcjoxMDA=",
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46MTAw",
              "hasNextPage": false,
              "hasPreviousPage": true,
              "startCursor": "R1BDOk46OTY=",
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "skip": 0,
            "take": -6,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('end', async () => {
    const query = gql`
      query {
        userConnection(after: "R1BDOk46OTc=") {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46OTg=",
                "node": {
                  "id": "VXNlcjo5OA==",
                },
              },
              {
                "cursor": "R1BDOk46OTk=",
                "node": {
                  "id": "VXNlcjo5OQ==",
                },
              },
              {
                "cursor": "R1BDOk46MTAw",
                "node": {
                  "id": "VXNlcjoxMDA=",
                },
              },
            ],
            "pageInfo": {
              "endCursor": "R1BDOk46MTAw",
              "hasNextPage": false,
              "hasPreviousPage": true,
              "startCursor": "R1BDOk46OTg=",
            },
          },
        },
      }
    `);

    expect(queries).toMatchInlineSnapshot(`
      [
        {
          "action": "findMany",
          "args": {
            "cursor": {
              "id": 97,
            },
            "skip": 1,
            "take": 11,
          },
          "model": "User",
        },
      ]
    `);
  });

  it('nested connection', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          edges {
            cursor
            node {
              postsConnection(first: 3) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  node {
                    id
                    published
                  }
                }
              }
              postsConnection2: postsConnection(published: false, first: 3) {
                edges {
                  node {
                    id
                    published
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "postsConnection": {
                    "edges": [
                      {
                        "node": {
                          "id": "250",
                          "published": true,
                        },
                      },
                      {
                        "node": {
                          "id": "249",
                          "published": true,
                        },
                      },
                      {
                        "node": {
                          "id": "248",
                          "published": true,
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0Nw==",
                      "hasNextPage": true,
                      "hasPreviousPage": false,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                    },
                  },
                  "postsConnection2": {
                    "edges": [
                      {
                        "node": {
                          "id": "101",
                          "published": false,
                        },
                      },
                      {
                        "node": {
                          "id": "100",
                          "published": false,
                        },
                      },
                      {
                        "node": {
                          "id": "99",
                          "published": false,
                        },
                      },
                    ],
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
                "take": 4,
              },
            },
            "skip": 0,
            "take": 2,
          },
          "model": "User",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "include": {
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
                "take": 4,
                "where": {
                  "published": false,
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

  it('nested connection after', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          edges {
            cursor
            node {
              postsConnection(first: 2, after: "R1BDOkQ6MTM1NTI3MDQwMDI0NQ==") {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "postsConnection": {
                    "edges": [
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0NA==",
                        "node": {
                          "id": "245",
                        },
                      },
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0Mw==",
                        "node": {
                          "id": "244",
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0Mw==",
                      "hasNextPage": true,
                      "hasPreviousPage": true,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0NA==",
                    },
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
              "posts": {
                "cursor": {
                  "createdAt": 2012-12-12T00:00:00.245Z,
                },
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
                "skip": 1,
                "take": 3,
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

  it('query from args', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          edges {
            cursor
            node {
              postsConnection(first: 2, after: "R1BDOkQ6MTM1NTI3MDQwMDI0OA==", oldestFirst: true) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "postsConnection": {
                    "edges": [
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                        "node": {
                          "id": "250",
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                      "hasNextPage": false,
                      "hasPreviousPage": true,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                    },
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
              "posts": {
                "cursor": {
                  "createdAt": 2012-12-12T00:00:00.248Z,
                },
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
                "skip": 1,
                "take": 3,
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

  it('double related connection', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          edges {
            cursor
            node {
              postsConnection(first: 2, after: "R1BDOkQ6MTM1NTI3MDQwMDI0OA==", oldestFirst: true) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
                  }
                }
              }
              newPosts: postsConnection(first: 2) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "newPosts": {
                    "edges": [
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                        "node": {
                          "id": "250",
                        },
                      },
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OA==",
                        "node": {
                          "id": "249",
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OA==",
                      "hasNextPage": true,
                      "hasPreviousPage": false,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                    },
                  },
                  "postsConnection": {
                    "edges": [
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                        "node": {
                          "id": "250",
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                      "hasNextPage": false,
                      "hasPreviousPage": true,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                    },
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
              "posts": {
                "cursor": {
                  "createdAt": 2012-12-12T00:00:00.248Z,
                },
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
                "skip": 1,
                "take": 3,
              },
            },
            "skip": 0,
            "take": 2,
          },
          "model": "User",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "include": {
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
                "take": 3,
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

  it('multiple nested queries', async () => {
    const query = gql`
      query {
        userConnection(first: 1) {
          edges {
            cursor
            node {
              postsConnection(first: 2, after: "R1BDOkQ6MTM1NTI3MDQwMDI0OA==", oldestFirst: true) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
                    author {
                      profile {
                        bio
                      }
                    }
                  }
                }
              }
              newPosts: postsConnection(first: 2) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
                    author {
                      profile {
                        bio
                      }
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
          "userConnection": {
            "edges": [
              {
                "cursor": "R1BDOk46MQ==",
                "node": {
                  "newPosts": {
                    "edges": [
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                        "node": {
                          "author": {
                            "profile": {
                              "bio": "Debitis perspiciatis unde sunt.",
                            },
                          },
                          "id": "250",
                        },
                      },
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OA==",
                        "node": {
                          "author": {
                            "profile": {
                              "bio": "Debitis perspiciatis unde sunt.",
                            },
                          },
                          "id": "249",
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OA==",
                      "hasNextPage": true,
                      "hasPreviousPage": false,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                    },
                  },
                  "postsConnection": {
                    "edges": [
                      {
                        "cursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                        "node": {
                          "author": {
                            "profile": {
                              "bio": "Debitis perspiciatis unde sunt.",
                            },
                          },
                          "id": "250",
                        },
                      },
                    ],
                    "pageInfo": {
                      "endCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                      "hasNextPage": false,
                      "hasPreviousPage": true,
                      "startCursor": "R1BDOkQ6MTM1NTI3MDQwMDI0OQ==",
                    },
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
              "posts": {
                "cursor": {
                  "createdAt": 2012-12-12T00:00:00.248Z,
                },
                "include": {
                  "author": {
                    "include": {
                      "profile": true,
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
                  "createdAt": "asc",
                },
                "skip": 1,
                "take": 3,
              },
            },
            "skip": 0,
            "take": 2,
          },
          "model": "User",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "include": {
              "posts": {
                "include": {
                  "author": {
                    "include": {
                      "profile": true,
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
                "take": 3,
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

  it('connection with errors', async () => {
    const query = gql`
      query {
        userConnectionWithErrors(first: 1) {
          __typename
          ... on Error {
            message
          }
          ... on QueryUserConnectionWithErrorsSuccess {
            data {
              edges {
                node {
                  profile {
                    bio
                    user {
                      id
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
          "userConnectionWithErrors": {
            "__typename": "QueryUserConnectionWithErrorsSuccess",
            "data": {
              "edges": [
                {
                  "node": {
                    "profile": {
                      "bio": "Debitis perspiciatis unde sunt.",
                      "user": {
                        "id": "VXNlcjox",
                      },
                    },
                  },
                },
              ],
            },
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
              "profile": {
                "include": {
                  "user": true,
                },
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

  it('connected relation with errors', async () => {
    const query = gql`
      query {
        me {
          postsConnectionWithErrors(first: 1) {
            __typename
            ... on Error {
              message
            }
            ... on UserPostsConnectionWithErrorsSuccess {
              data {
                edges {
                  node {
                    author {
                      profile {
                        bio
                      }
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
          "me": {
            "postsConnectionWithErrors": {
              "__typename": "UserPostsConnectionWithErrorsSuccess",
              "data": {
                "edges": [
                  {
                    "node": {
                      "author": {
                        "profile": {
                          "bio": "Debitis perspiciatis unde sunt.",
                        },
                      },
                    },
                  },
                ],
              },
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
              "posts": {
                "include": {
                  "author": {
                    "include": {
                      "profile": true,
                    },
                  },
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
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

  it('connection with skip and take', async () => {
    const query = gql`
      query {
        me {
          postsSkipConnection(take: 3, skip: 1) {
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
            "postsSkipConnection": {
              "edges": [
                {
                  "node": {
                    "id": "2",
                  },
                },
                {
                  "node": {
                    "id": "3",
                  },
                },
              ],
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
              "posts": {
                "include": {
                  "comments": {
                    "include": {
                      "author": true,
                    },
                    "take": 3,
                  },
                },
                "skip": 1,
                "take": 3,
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

  it('connections with composite cursors', async () => {
    const query = gql`
      query {
        me {
          following(first: 3) {
            edges {
              cursor
              node {
                to {
                  id
                  name
                }
              }
            }
          }
          followingAfter: following(first: 3, after: "R1BDOko6WzEsMjFd") {
            edges {
              cursor
              node {
                to {
                  id
                  name
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
          "me": {
            "following": {
              "edges": [
                {
                  "cursor": "R1BDOko6WzEsMl0=",
                  "node": {
                    "to": {
                      "id": "VXNlcjoy",
                      "name": "Kyle Schoen",
                    },
                  },
                },
                {
                  "cursor": "R1BDOko6WzEsMjFd",
                  "node": {
                    "to": {
                      "id": "VXNlcjoyMQ==",
                      "name": "Euna Leffler",
                    },
                  },
                },
                {
                  "cursor": "R1BDOko6WzEsMzBd",
                  "node": {
                    "to": {
                      "id": "VXNlcjozMA==",
                      "name": "Sydni Schmitt",
                    },
                  },
                },
              ],
            },
            "followingAfter": {
              "edges": [
                {
                  "cursor": "R1BDOko6WzEsMzBd",
                  "node": {
                    "to": {
                      "id": "VXNlcjozMA==",
                      "name": "Sydni Schmitt",
                    },
                  },
                },
                {
                  "cursor": "R1BDOko6WzEsMzld",
                  "node": {
                    "to": {
                      "id": "VXNlcjozOQ==",
                      "name": "Esteban Jacobson",
                    },
                  },
                },
                {
                  "cursor": "R1BDOko6WzEsNDNd",
                  "node": {
                    "to": {
                      "id": "VXNlcjo0Mw==",
                      "name": "Renee McKenzie",
                    },
                  },
                },
              ],
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
              "following": {
                "include": {
                  "to": true,
                },
                "skip": 0,
                "take": 4,
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
              "following": {
                "cursor": {
                  "compositeID": {
                    "fromId": 1,
                    "toId": 21,
                  },
                },
                "include": {
                  "to": true,
                },
                "skip": 1,
                "take": 4,
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

  it('connections with BigInt cursor', async () => {
    const query = gql`
      query {
        postsBigIntCursor(first: 2) {
          edges {
            node {
              id
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
          "postsBigIntCursor": {
            "edges": [
              {
                "node": {
                  "id": "1",
                },
              },
              {
                "node": {
                  "id": "2",
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
              "comments": {
                "include": {
                  "author": true,
                },
                "take": 3,
              },
            },
            "skip": 0,
            "take": 3,
          },
          "model": "Post",
        },
      ]
    `);
  });

  it('manual connections', async () => {
    const query = gql`
      query {
        post(id: 1) {
          id
          mediaConnection(first: 1) {
            edges {
              cursor
              node {
                url
              }
            }
          }
          manualMediaConnection(first: 1, after: "R1BDOko6WzEsMV0=") {
            edges {
              cursor
              order
              node {
                url
              }
            }
          }
        }
        selectPost(id: "U2VsZWN0UG9zdDox") {
          comments(first: 1) {
            edges {
              node {
                id
                authorBio
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
            "id": "1",
            "manualMediaConnection": {
              "edges": [
                {
                  "cursor": "R1BDOko6WzEsMl0=",
                  "node": {
                    "url": "http://enchanting-east.org",
                  },
                  "order": 1,
                },
              ],
            },
            "mediaConnection": {
              "edges": [
                {
                  "cursor": "R1BDOko6WzEsMV0=",
                  "node": {
                    "url": "https://small-body.net",
                  },
                },
              ],
            },
          },
          "selectPost": {
            "comments": {
              "edges": [
                {
                  "node": {
                    "authorBio": "Debitis perspiciatis unde sunt.",
                    "id": "1",
                  },
                },
              ],
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
              "comments": {
                "include": {
                  "author": true,
                },
                "take": 3,
              },
              "media": {
                "orderBy": {
                  "id": "asc",
                },
                "select": {
                  "media": {
                    "select": {
                      "id": true,
                      "posts": true,
                      "url": true,
                    },
                  },
                  "mediaId": true,
                  "order": true,
                  "postId": true,
                },
                "skip": 0,
                "take": 2,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "Post",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "select": {
              "comments": {
                "include": {
                  "author": {
                    "include": {
                      "profile": true,
                    },
                  },
                },
                "skip": 0,
                "take": 2,
              },
              "id": true,
            },
            "where": {
              "id": 1,
            },
          },
          "model": "Post",
        },
        {
          "action": "findUniqueOrThrow",
          "args": {
            "include": {
              "_count": {
                "select": {
                  "media": true,
                },
              },
              "media": {
                "cursor": {
                  "postId_mediaId": {
                    "mediaId": 1,
                    "postId": 1,
                  },
                },
                "orderBy": {
                  "post": {
                    "createdAt": "asc",
                  },
                },
                "select": {
                  "media": {
                    "select": {
                      "id": true,
                      "posts": true,
                      "url": true,
                    },
                  },
                  "mediaId": true,
                  "order": true,
                  "postId": true,
                },
                "skip": 1,
                "take": 2,
              },
            },
            "where": {
              "id": 1,
            },
          },
          "model": "Post",
        },
      ]
    `);
  });

  it('queryInfo with manual connection', async () => {
    const query = gql`
      query {
        namedConnection(first: 2) {
          edges {
            node {
              ... on User {
                id
                postsConnection(first: 1) {
                  edges {
                    node {
                      title
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
          "namedConnection": {
            "edges": [
              {
                "node": {
                  "id": "VXNlcjox",
                  "postsConnection": {
                    "edges": [
                      {
                        "node": {
                          "title": "Ipsa blanditiis voluptatibus.",
                        },
                      },
                    ],
                  },
                },
              },
              {
                "node": {
                  "id": "VXNlcjoy",
                  "postsConnection": {
                    "edges": [
                      {
                        "node": {
                          "title": "Nam magnam pariatur id animi ut quae.",
                        },
                      },
                    ],
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
            "orderBy": {
              "id": "asc",
            },
          },
          "model": "User",
        },
      ]
    `);
  });
});
