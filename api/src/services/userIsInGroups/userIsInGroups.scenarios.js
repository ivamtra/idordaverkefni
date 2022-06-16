export const standard = defineScenario({
  userIsInGroup: {
    one: {
      data: {
        user: {
          create: {
            email: 'String5802230',
            name: 'String',
            hashedPassword: 'String',
            salt: 'String',
            imageUrl: 'String',
          },
        },

        group: { create: { name: 'String', imageUrl: 'String' } },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String4358036',
            name: 'String',
            hashedPassword: 'String',
            salt: 'String',
            imageUrl: 'String',
          },
        },

        group: { create: { name: 'String', imageUrl: 'String' } },
      },
    },
  },
})
