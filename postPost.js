const axios = require("axios");

axios({
  method: 'post',
  url: 'http://localhost:3000/',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  },
  headers: {
    liran:'ok'
  }
});
