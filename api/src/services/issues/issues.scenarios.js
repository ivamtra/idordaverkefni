export const standard = defineScenario({
  issue: {
    one: {
      data: {
        description: 'String',
        question: {
          create: {
            title: 'String',
            language: 'String',
            definition: 'String',
            user: {
              create: {
                email: 'String6836750',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },
          },
        },

        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String282',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },

            question: {
              create: {
                title: 'String',
                language: 'String',
                definition: 'String',
                user: {
                  create: {
                    email: 'String1568836',
                    name: 'String',
                    hashedPassword: 'String',
                    salt: 'String',
                    imageUrl: 'String',
                  },
                },
              },
            },
          },
        },

        answerComment: {
          create: {
            body: 'String',
            user: {
              create: {
                email: 'String5887144',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },

            answer: {
              create: {
                title: 'String',
                justification: 'String',
                user: {
                  create: {
                    email: 'String7141261',
                    name: 'String',
                    hashedPassword: 'String',
                    salt: 'String',
                    imageUrl: 'String',
                  },
                },

                question: {
                  create: {
                    title: 'String',
                    language: 'String',
                    definition: 'String',
                    user: {
                      create: {
                        email: 'String1364781',
                        name: 'String',
                        hashedPassword: 'String',
                        salt: 'String',
                        imageUrl: 'String',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    two: {
      data: {
        description: 'String',
        question: {
          create: {
            title: 'String',
            language: 'String',
            definition: 'String',
            user: {
              create: {
                email: 'String1282706',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },
          },
        },

        answer: {
          create: {
            title: 'String',
            justification: 'String',
            user: {
              create: {
                email: 'String1607356',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },

            question: {
              create: {
                title: 'String',
                language: 'String',
                definition: 'String',
                user: {
                  create: {
                    email: 'String643875',
                    name: 'String',
                    hashedPassword: 'String',
                    salt: 'String',
                    imageUrl: 'String',
                  },
                },
              },
            },
          },
        },

        answerComment: {
          create: {
            body: 'String',
            user: {
              create: {
                email: 'String2345896',
                name: 'String',
                hashedPassword: 'String',
                salt: 'String',
                imageUrl: 'String',
              },
            },

            answer: {
              create: {
                title: 'String',
                justification: 'String',
                user: {
                  create: {
                    email: 'String8419251',
                    name: 'String',
                    hashedPassword: 'String',
                    salt: 'String',
                    imageUrl: 'String',
                  },
                },

                question: {
                  create: {
                    title: 'String',
                    language: 'String',
                    definition: 'String',
                    user: {
                      create: {
                        email: 'String4509571',
                        name: 'String',
                        hashedPassword: 'String',
                        salt: 'String',
                        imageUrl: 'String',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})
