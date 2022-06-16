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
                email: 'String6990854',
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
                email: 'String2495871',
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
