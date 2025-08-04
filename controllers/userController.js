const userData = require("../api/user");

exports.getUsers = async (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(userData.slice(0, limit));
  }
  res.status(200).json(userData);
};

exports.getCustomUsers = async (req, res) => {
  const fieldQuery = req.query.field;
  const limit = parseInt(req.query.limit);

  const selectField = fieldQuery
    ? fieldQuery.split(",").map((field) => field.trim())
    : [];

  const filteredData =
    !isNaN(limit) && limit > 0 ? userData.slice(0, limit) : userData;

  if (selectField.length === 0) {
    return res.status(200).json(filteredData);
  }

  const result = filteredData.map((user) => {
    const selectUser = {};
    selectField.forEach((field) => {
      if (user.hasOwnProperty(field)) {
        selectUser[field] = user[field];
      }
    });
    return selectUser;
  });

  res.status(200).json(result);
};
