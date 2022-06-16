export const standard = defineScenario({
  userHasBadge: {
    one: {
      data: {
        user: {
          create: {
            email: 'String6296767',
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
            email: 'String4591982',
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
