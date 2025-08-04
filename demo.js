const { faker } = require("@faker-js/faker");

// Function to generate a single blog post
function generateBlogPost(id = 1) {
  const title = faker.lorem.sentence(6);
  return {
    id: `b${id.toString().padStart(3, "0")}`,
    title,
    slug: faker.helpers.slugify(title.toLowerCase()),
    author: {
      id: `u${faker.number.int({ min: 1, max: 100 })}`,
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
    createdAt: faker.date.past({ years: 2 }).toISOString(),
    updatedAt: faker.date.recent({ days: 10 }).toISOString(),
    likes: faker.number.int({ min: 0, max: 1000 }),
    comments: Array.from({ length: faker.number.int({ min: 0, max: 5 }) }).map(
      () => ({
        id: faker.string.uuid(),
        author: faker.person.fullName(),
        content: faker.lorem.sentence(),
        createdAt: faker.date.recent({ days: 30 }).toISOString(),
      })
    ),
  };
}

// Generate array of blog post objects
const blogPosts = Array.from({ length: 10 }, (_, i) => generateBlogPost(i + 1));

// Pretty-print the blog posts as JSON
console.log(JSON.stringify(blogPosts, null, 2));
