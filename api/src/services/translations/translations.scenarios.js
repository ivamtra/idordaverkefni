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
                email: 'String6882258',
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
                    email: 'String3608145',
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
                email: 'String8220160',
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
                    email: 'String8866578',
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
