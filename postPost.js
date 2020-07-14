const axios = require("axios");

axios({
  method: 'post',
  url: 'https://post-saver.herokuapp.com/',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  },
  headers: {
    liran:'ok44'
  }
});
