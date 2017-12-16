function loadStaticData() {
  render({
    me: {
      login: "gr2m",
      avatarUrl: "https://avatars3.githubusercontent.com/u/39992?size=24&v=4",
      name: "Gregor Martynus",
      company: "@HoodieHQ",
      location: "Los Angeles"
    },
    repositories: {
      mostStarred: [
        {
          name: "my-cool-repo",
          description: "foo la lal la",
          url: "https://github.com/gr2m/my-cool-repo",
          stargazers: {
            totalCount: 1234,
            mostRecent: [
              {
                login: "learningnerd",
                avatarUrl: "https://github.com/learningnerd.png?size=24&v=4",
                name: "Liz Krane",
                company: "@LearnTeachCode",
                location: "Los Angeles"
              },
              {
                login: "agonzalez0515",
                avatarUrl: "https://github.com/agonzalez0515.png?size=24&v=4",
                name: "Angelica Gonzalez",
                location: "Los Angeles"
              },
              {
                login: "gr2m",
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/39992?size=24&v=4",
                name: "Gregor Martynus",
                company: "@HoodieHQ",
                location: "Los Angeles"
              },
              {
                login: "rouzbeh84",
                avatarUrl: "https://github.com/rouzbeh84.png?size=24&v=4",
                name: "Rouzbeh Sarrafieh",
                location: "Los Angeles"
              },
              {
                login: "machikoyasuda",
                avatarUrl: "https://github.com/machikoyasuda.png?size=24&v=4",
                name: "Machiko Yasuda",
                location: "Los Angeles"
              }
            ]
          },
          issues: {
            mostRecent: [
              {
                title: "Some issue",
                url: "https://example.com",
                author: {
                  login: "jimthoburn",
                  avatarUrl: "https://github.com/jimthoburn.png?size=30&v=4",
                  name: "Jim Thoburn",
                  location: "Los Angeles"
                }
              }
            ]
          }
        },
        {
          name: "my-less-cool-repo",
          description: "bar di dam",
          url: "https://github.com/gr2m/my-cool-repo",
          stargazers: {
            totalCount: 893,
            mostRecent: [
              {
                login: "learningnerd",
                avatarUrl: "https://github.com/learningnerd.png?size=24&v=4",
                name: "Liz Krane",
                company: "@LearnTeachCode",
                location: "Los Angeles"
              },
              {
                login: "agonzalez0515",
                avatarUrl: "https://github.com/agonzalez0515.png?size=24&v=4",
                name: "Angelica Gonzalez",
                location: "Los Angeles"
              },
              {
                login: "gr2m",
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/39992?size=24&v=4",
                name: "Gregor Martynus",
                company: "@HoodieHQ",
                location: "Los Angeles"
              },
              {
                login: "rouzbeh84",
                avatarUrl: "https://github.com/rouzbeh84.png?size=24&v=4",
                name: "Rouzbeh Sarrafieh",
                location: "Los Angeles"
              },
              {
                login: "machikoyasuda",
                avatarUrl: "https://github.com/machikoyasuda.png?size=24&v=4",
                name: "Machiko Yasuda",
                location: "Los Angeles"
              }
            ]
          },
          issues: {
            mostRecent: [
              {
                title: "Some issue",
                url: "https://example.com",
                author: {
                  login: "agonzalez0515",
                  avatarUrl: "https://github.com/agonzalez0515.png?size=24&v=4",
                  name: "Angelica Gonzalez",
                  location: "Los Angeles"
                }
              },
              {
                title: "Some other issue",
                url: "https://example.com",
                author: {
                  login: "gr2m",
                  avatarUrl:
                    "https://avatars3.githubusercontent.com/u/39992?s=24&v=4",
                  name: "Gregor Martynus",
                  company: "@HoodieHQ @Octokit",
                  location: "Los Angeles"
                }
              }
            ]
          }
        },
        {
          name: "my-ehh-cool-repo",
          description: "baz inga",
          url: "https://github.com/gr2m/my-cool-repo",
          stargazers: {
            totalCount: 672,
            mostRecent: [
              {
                login: "learningnerd",
                avatarUrl: "https://github.com/learningnerd.png?size=24&v=4",
                name: "Liz Krane",
                company: "@LearnTeachCode",
                location: "Los Angeles"
              },
              {
                login: "agonzalez0515",
                avatarUrl: "https://github.com/agonzalez0515.png?size=24&v=4",
                name: "Angelica Gonzalez",
                location: "Los Angeles"
              },
              {
                login: "gr2m",
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/39992?size=24&v=4",
                name: "Gregor Martynus",
                company: "@HoodieHQ",
                location: "Los Angeles"
              },
              {
                login: "rouzbeh84",
                avatarUrl: "https://github.com/rouzbeh84.png?size=24&v=4",
                name: "Rouzbeh Sarrafieh",
                location: "Los Angeles"
              },
              {
                login: "machikoyasuda",
                avatarUrl: "https://github.com/machikoyasuda.png?size=24&v=4",
                name: "Machiko Yasuda",
                location: "Los Angeles"
              }
            ]
          },
          issues: {
            mostRecent: [
              {
                title: "Yet another issue",
                url: "https://example.com",
                author: {
                  login: "gr2m",
                  avatarUrl:
                    "https://avatars3.githubusercontent.com/u/39992?s=24&v=4",
                  name: "Gregor Martynus",
                  company: "@HoodieHQ @Octokit",
                  location: "Los Angeles"
                }
              }
            ]
          }
        },
        {
          name: "my-repo",
          description: "dum di dam",
          url: "https://github.com/gr2m/my-cool-repo",
          stargazers: {
            totalCount: 190,
            mostRecent: [
              {
                login: "learningnerd",
                avatarUrl: "https://github.com/learningnerd.png?size=24&v=4",
                name: "Liz Krane",
                company: "@LearnTeachCode",
                location: "Los Angeles"
              },
              {
                login: "agonzalez0515",
                avatarUrl: "https://github.com/agonzalez0515.png?size=24&v=4",
                name: "Angelica Gonzalez",
                location: "Los Angeles"
              },
              {
                login: "gr2m",
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/39992?size=24&v=4",
                name: "Gregor Martynus",
                company: "@HoodieHQ",
                location: "Los Angeles"
              },
              {
                login: "rouzbeh84",
                avatarUrl: "https://github.com/rouzbeh84.png?size=24&v=4",
                name: "Rouzbeh Sarrafieh",
                location: "Los Angeles"
              },
              {
                login: "machikoyasuda",
                avatarUrl: "https://github.com/machikoyasuda.png?size=24&v=4",
                name: "Machiko Yasuda",
                location: "Los Angeles"
              }
            ]
          },
          issues: {
            mostRecent: []
          }
        }
      ]
    }
  });
}
