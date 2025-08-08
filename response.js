const axios = require("axios");
axios
  .get("http://localhost:3000/api/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
