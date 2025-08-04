const { faker } = require("@faker-js/faker");

const generateUser = (id) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const username = faker.internet
    .username({ firstName, lastName })
    .toLowerCase();

  const password = faker.internet.password({ length: 6, memorable: true });
  const role = faker.person.jobTitle();
  const location = `${faker.location.city()}, ${faker.location.country()}`;
  const skills = faker.helpers.arrayElement([
    "React",
    "Node js",
    "Python",
    "GO",
    "Flutter",
    "SQL",
    "Angular",
  ]);
  const email = `${username}@restmancer.dev`;
  return {
    id,
    name: `${firstName} ${lastName}`,
    username,
    email,
    password,
    role,
    location,
    skills,
  };
};
const users = [];
for (let i = 1; i <= 30; i++) {
  const userId = `u${i.toString().padStart(3, "0")}`;
  users.push(generateUser(userId));
}

module.exports = users;
