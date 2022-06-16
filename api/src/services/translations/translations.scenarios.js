export const standard = defineScenario({
  translation: {
    one: {
      data: {
        translation: 'String',
        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String9612871',
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
                    email: 'String3754732',
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
        translation: 'String',
        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String492413',
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
                    email: 'String6196546',
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
