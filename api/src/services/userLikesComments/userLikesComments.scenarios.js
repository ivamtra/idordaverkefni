export const standard = defineScenario({
  userLikesComment: {
    one: {
      data: {
        action: 1908296,
        user: {
          create: {
            email: 'String1342505',
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
                email: 'String7350531',
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
        action: 882867,
        user: {
          create: {
            email: 'String3331279',
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
                email: 'String2744453',
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
