const { faker } = require("@faker-js/faker");
const user = require("./user");
const generateBlog = (id = 1) => {
  const title = faker.lorem.sentence(6);
  return {
    id: `${id.toString().padStart(3, "0")}`,
    title,
    slug: faker.helpers.slugify(title.toLowerCase()),
  };
};
