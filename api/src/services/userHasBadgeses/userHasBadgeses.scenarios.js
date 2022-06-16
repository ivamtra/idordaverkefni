export const standard = defineScenario({
  userHasBadges: {
    one: {
      data: {
        user: {
          create: {
            email: 'String6228813',
            name: 'String',
            hashedPassword: 'String',
            salt: 'String',
            imageUrl: 'String',
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
            email: 'String354397',
            name: 'String',
            hashedPassword: 'String',
            salt: 'String',
            imageUrl: 'String',
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
