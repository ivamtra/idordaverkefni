export const standard = defineScenario({
  answerComment: {
    one: {
      data: {
        body: 'String',
        user: {
          create: {
            email: 'String5096489',
            name: 'String',
            hashedPassword: 'String',
            salt: 'String',
            imageUrl: 'String',
          },
        },

        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String4596659',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },

            question: {
              create: {
                title: 'String',
                language: 'String',
                definition: 'String',
                user: {
                  create: {
                    email: 'String4718357',
                    name: 'String',
                    hashedPassword: 'String',
                    salt: 'String',
                    imageUrl: 'String',
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
            email: 'String3540680',
            name: 'String',
            hashedPassword: 'String',
            salt: 'String',
            imageUrl: 'String',
          },
        },

        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String8518571',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },

            question: {
              create: {
                title: 'String',
                language: 'String',
                definition: 'String',
                user: {
                  create: {
                    email: 'String9807014',
                    name: 'String',
                    hashedPassword: 'String',
                    salt: 'String',
                    imageUrl: 'String',
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
