export const standard = defineScenario({
  answerComment: {
    one: {
      data: {
        body: 'String',
        user: {
          create: {
            email: 'String2237459',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String9845436',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            question: {
              create: {
                title: 'String',
                language: 'String',
                definition: 'String',
                user: {
                  create: {
                    email: 'String2695389',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
      },
    },

    two: {
      data: {
        body: 'String',
        user: {
          create: {
            email: 'String5577758',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String7720717',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            question: {
              create: {
                title: 'String',
                language: 'String',
                definition: 'String',
                user: {
                  create: {
                    email: 'String5089326',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})
