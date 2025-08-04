const axios = require("axios");

axios
  .get("http://localhost:8070/api/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
