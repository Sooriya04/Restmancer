const { faker } = require("@faker-js/faker");
const users = require("./user");
const generateBlog = (id = 1) => {
  const title = faker.lorem.sentence(6);
  const author = faker.helpers.arrayElement(users);
  return {
    id: `b${id.toFixed().padStart(3, "0")}`,
    title,
    slug: faker.helpers.slugify(title.toLocaleLowerCase()),
    author: {
      id: author.id,
      name: author.name,
      email: author.email,
    },
  };
};
