export const standard = defineScenario({
  userHasBadge: {
    one: {
      data: {
        user: {
          create: {
            email: 'String3981696',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        badge: {
          create: {
            imageUrl: 'String',
            title: 'String',
            description: 'String',
          },
        },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String1925441',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        badge: {
          create: {
            imageUrl: 'String',
            title: 'String',
            description: 'String',
          },
        },
      },
    },
  },
})
