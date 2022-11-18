const tasks = require('jfrog-pipelines-tasks');
const axios = require('axios');

async function main() {
  const issue_key = tasks.getInput('issue_key');
  let endpoint = tasks.getInput('endpoint');
  const username = tasks.getInput('username');
  const token = tasks.getInput('token');
  const comment = tasks.getInput('comment');
  const apiSuffix = "/rest/api/2";

  endpoint = endpoint.replace(/^\/|\/$/g, ''); // removes trailing slash
  endpoint = endpoint.replace(apiSuffix, '');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    auth: {
      username: username,
      password: token
    },
    data: {
      'body': comment
    },
    url: endpoint + '/rest/api/2/issue/' + issue_key + '/comment'
  };
  await axios(options);
}
  
(
  async () => {
    await main();
  }
)();
