export const standard = defineScenario({
  userIsInGroup: {
    one: {
      data: {
        user: {
          create: {
            email: 'String1713142',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        group: { create: { name: 'String', imageUrl: 'String' } },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String6276479',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        group: { create: { name: 'String', imageUrl: 'String' } },
      },
    },
  },
})
