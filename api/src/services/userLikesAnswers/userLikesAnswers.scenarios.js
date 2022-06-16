export const standard = defineScenario({
  userLikesAnswer: {
    one: {
      data: {
        action: 200385,
        user: {
          create: {
            email: 'String5634746',
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
                email: 'String8361649',
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
                    email: 'String6871116',
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
        action: 3026931,
        user: {
          create: {
            email: 'String49972',
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
                email: 'String1712392',
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
                    email: 'String9244872',
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
