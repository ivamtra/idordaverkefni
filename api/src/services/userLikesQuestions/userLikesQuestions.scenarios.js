export const standard = defineScenario({
  userLikesQuestion: {
    one: {
      data: {
        action: 5794935,
        user: {
          create: {
            email: 'String3959774',
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
                email: 'String1273171',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },

    two: {
      data: {
        action: 3651580,
        user: {
          create: {
            email: 'String7734453',
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
                email: 'String7845521',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})
