export const standard = defineScenario({
  userLikesQuestion: {
    one: {
      data: {
        action: 7175930,
        user: {
          create: {
            email: 'String3790061',
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
                email: 'String5913857',
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

    two: {
      data: {
        action: 8104228,
        user: {
          create: {
            email: 'String6492192',
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
                email: 'String207605',
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
})
