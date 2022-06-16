export const standard = defineScenario({
  userHasBadge: {
    one: {
      data: {
        user: {
          create: {
            email: 'String683018',
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
            email: 'String6829363',
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
