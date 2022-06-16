export const standard = defineScenario({
  userLikesComment: {
    one: {
      data: {
        action: 3040175,
        user: {
          create: {
            email: 'String7322146',
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
                email: 'String8218700',
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
        action: 2764328,
        user: {
          create: {
            email: 'String3296189',
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
                email: 'String2329656',
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
