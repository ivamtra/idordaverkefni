export const standard = defineScenario({
  answer: {
    one: {
      data: {
        title: 'String',
        justification: 'String',
        user: {
          create: {
            email: 'String6168690',
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
                email: 'String4599152',
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
        title: 'String',
        justification: 'String',
        user: {
          create: {
            email: 'String2236820',
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
                email: 'String8221553',
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
