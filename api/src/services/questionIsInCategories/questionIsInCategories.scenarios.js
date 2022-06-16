export const standard = defineScenario({
  questionIsInCategory: {
    one: {
      data: {
        question: {
          create: {
            title: 'String',
            language: 'String',
            definition: 'String',
            user: {
              create: {
                email: 'String1849791',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },

        category: { create: { titill: 'String', litur: 'String' } },
      },
    },

    two: {
      data: {
        question: {
          create: {
            title: 'String',
            language: 'String',
            definition: 'String',
            user: {
              create: {
                email: 'String7588618',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },

        category: { create: { titill: 'String', litur: 'String' } },
      },
    },
  },
})
