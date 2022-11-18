const tasks = require("jfrog-pipelines-tasks");
const axios = require("axios");

async function main() {
  let endpoint = tasks.getInput("endpoint");
  const summary = tasks.getInput("summary");
  const projectKey = tasks.getInput("projectKey");
  const issueTypeId = tasks.getInput("issueTypeId");
  const description = tasks.getInput("description");
  const username = tasks.getInput("username");
  const token = tasks.getInput("token");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: username,
      password: token,
    },
    data: {
      fields: {
        summary,
        project: {
          key: projectKey,
        },
        issuetype: {
          id: issueTypeId,
        },
        description,
      },
    },
    url: endpoint + "/rest/api/2/issue",
  };
  await axios(options);
}

(async () => {
  await main();
})();
