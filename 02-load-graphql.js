function loadGraphQl(options) {
  let token = localStorage.getItem("token");
  if (!token) {
    token = prompt("GitHub Access Token (github.com/settings/tokens/new)");
    localStorage.setItem("token", token);
  }
  const gql = string => string[0];
  render({});

  var settings = {
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      authorization: `bearer ${token}`
    },
    data: JSON.stringify({
      query: gql`
        query myGithubDashboard(
          $numRepositories: Int = 4
          $numIssues: Int = 3
        ) {
          me: viewer {
            ...userInfo
            repositories(
              first: $numRepositories
              orderBy: { field: UPDATED_AT, direction: DESC }
              affiliations: OWNER
            ) {
              totalCount
              mostStarred: nodes {
                name
                url
                stargazers(last: 5) {
                  totalCount
                  mostRecent: nodes {
                    ...userInfo
                  }
                }
                issues(
                  first: $numIssues
                  states: [OPEN, CLOSED]
                  orderBy: { field: UPDATED_AT, direction: DESC }
                ) {
                  mostRecent: nodes {
                    title
                    url
                    author {
                      ...userInfo
                    }
                  }
                }
              }
            }
          }
        }

        fragment userInfo on User {
          login
          url
          avatarUrl(size: 30)
          name
          company
          location
        }
      `,
      variables: options
    })
  };

  $.ajax(settings)
    .then(response => {
      render({
        me: response.data.me,
        repositories: response.data.me.repositories
      });
    })
    .catch(error => {
      if (error.status === 401) {
        localStorage.removeItem("token");
        location.reload(true);
      }
    });
}
