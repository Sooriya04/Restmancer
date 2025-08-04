const { faker } = require("@faker-js/faker");

const generateBlog = (id = 1) => {
  const title = faker.lorem.sentence(6);
  return {
    id: `b${id.toFixed().padStart(3, "0")}`,
    title,
    slug: faker.helpers.slugify(title.toLowerCase()),
    author: {
      id: `u${faker.number.int({ min: 1, max: 5 })}`,
      name: faker.person.fullName(),
      email: faker.internet.email(),
    },
    content: faker.lorem.paragraphs(5, "<p>\n</p>"),
    tags: faker.helpers.arrayElements(
      [
        "tech",
        "life",
        "career",
        "coding",
        "tutorial",
        "ai",
        "remote",
        "javascript",
        "python",
        "news",
      ],
      faker.number.int({ min: 2, max: 4 })
    ),
    createAt: faker.date.past({ years: 1 }).toISOString(),
    likes: faker.number.int({ min: 0, max: 140 }),
    comments: Array.from({ length: faker.number.int({ min: 0, max: 5 }) }).map(
      () => ({
        id: faker.string.uuid(),
        author: faker.person.fullName(),
        content: faker.lorem.sentence(),
        postedAt: faker.date.recent({ days: 30 }).toISOString(),
      })
    ),
  };
};

const blogPosts = Array.from({ length: 10 }, (_, i) => generateBlog(i + 1));

module.exports = { blogPosts, generateBlog };
