function loadRest(options) {
  if (!options) {
    options = {};
  }
  if (!options.numRepositories) {
    options.numRepositories = 4;
  }
  if (!options.numIssues) {
    options.numIssues = 3;
  }

  let token = localStorage.getItem("token");
  if (!token) {
    token = prompt("GitHub Access Token (github.com/settings/tokens/new)");
    localStorage.setItem("token", token);
  }

  const data = {
    me: {},
    repositories: {
      mostStarred: []
    }
  };
  render(data);

  loadUser();
  loadRepositories(options.numRepositories)
    .then(() => {
      return Promise.all(
        data.repositories.mostStarred.map((repository, repositoryIndex) => {
          loadRepositoryIssues(repository, options.numIssues).then(issues => {
            issues.map(loadIssueAuthor.bind(null, repositoryIndex));
          });
          loadRepositoryStargazers(repository).then(stargazers => {
            stargazers.map(loadStargazer.bind(null, repositoryIndex));
          });
        })
      );
    })

    .catch(error => {
      if (error.status === 401) {
        localStorage.removeItem("token");
        location.reload(true);
      }
    });

  function loadUser() {
    return $.ajax({
      method: "GET",
      url: "https://api.github.com/user",
      headers: {
        authorization: "token " + token,
        accept: "application/vnd.github.v3+json"
      }
    }).then(response => {
      data.me = {
        login: response.login,
        avatarUrl: response.avatar_url,
        name: response.name,
        company: response.company,
        location: response.location
      };
      render(data);
    });
  }

  function loadRepositories(num) {
    return $.ajax({
      method: "GET",
      url: "https://api.github.com/user/repos",
      data: {
        per_page: num,
        sort: "updated",
        direction: "desc",
        visibility: "public",
        affiliation: "owner"
      },
      headers: {
        authorization: "token " + token,
        accept: "application/vnd.github.v3+json"
      }
    }).then(response => {
      response.forEach(repository => {
        data.repositories.mostStarred.push({
          name: repository.name,
          description: repository.description,
          url: repository.html_url,
          stargazers: {
            totalCount: repository.stargazers_count,
            mostRecent: []
          },
          issues: {
            mostRecent: []
          }
        });
      });
      render(data);
    });
  }

  function loadRepositoryIssues(repository, numIssues) {
    return $.ajax({
      method: "GET",
      url: `https://api.github.com/repos/${data.me.login}/${
        repository.name
      }/issues`,
      data: {
        per_page: numIssues,
        sort: "created",
        direction: "desc",
        state: "all"
      },
      headers: {
        authorization: "token " + token,
        accept: "application/vnd.github.v3+json"
      }
    });
  }

  function loadIssueAuthor(index, issue) {
    $.ajax({
      method: "GET",
      url: `https://api.github.com/users/${issue.user.login}`,
      data: {
        per_page: 3,
        sort: "created",
        direction: "desc",
        state: "all"
      },
      headers: {
        authorization: "token " + token,
        accept: "application/vnd.github.v3+json"
      }
    }).then(user => {
      data.repositories.mostStarred[index].issues.mostRecent.push({
        title: issue.title,
        url: issue.html_url,
        author: {
          login: user.login,
          avatarUrl: user.avatar_url,
          name: user.name,
          location: user.location
        }
      });
      render(data);
    });
  }

  function loadRepositoryStargazers(repository) {
    return $.ajax({
      method: "GET",
      url: `https://api.github.com/repos/${data.me.login}/${
        repository.name
      }/stargazers`,
      data: {
        per_page: 5,
        direction: "desc",
        state: "all"
      },
      headers: {
        authorization: "token " + token,
        accept: "application/vnd.github.v3+json"
      }
    });
  }

  function loadStargazer(index, stargazer) {
    $.ajax({
      method: "GET",
      url: `https://api.github.com/users/${stargazer.login}`,
      data: {
        per_page: 3,
        sort: "created",
        direction: "desc",
        state: "all"
      },
      headers: {
        authorization: "token " + token,
        accept: "application/vnd.github.v3+json"
      }
    }).then(user => {
      data.repositories.mostStarred[index].stargazers.mostRecent.push({
        login: user.login,
        avatarUrl: user.avatar_url,
        name: user.name,
        location: user.location
      });
      render(data);
    });
  }
}
