const axios = require('axios');

async function makePostRequest() {

    params = {
        id: 7,
        first_name: 'Artur',
        last_name: 'Cuellar',
        email: 'hapiefet@gmail.com'
      }

      let resp = await axios.post('http://localhost:3000/users', params);
      console.log(resp.data);

    
}

makePostRequest();
