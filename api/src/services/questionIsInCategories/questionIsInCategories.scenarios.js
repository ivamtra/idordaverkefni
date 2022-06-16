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
                email: 'String5949972',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
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
                email: 'String348397',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },
          },
        },

        category: { create: { titill: 'String', litur: 'String' } },
      },
    },
  },
})
