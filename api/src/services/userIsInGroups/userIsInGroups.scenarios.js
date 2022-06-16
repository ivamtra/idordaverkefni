export const standard = defineScenario({
  userIsInGroup: {
    one: {
      data: {
        user: {
          create: {
            email: 'String982197',
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
            email: 'String3928971',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        group: { create: { name: 'String', imageUrl: 'String' } },
      },
    },
  },
})
