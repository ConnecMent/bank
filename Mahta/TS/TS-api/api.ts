import { createInterface } from "readline";
import axios from "axios";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  title: string;
}

function getTenPosts(): void {
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((postsResponse) => {
      const posts = postsResponse.data;

      const userPromises = posts.map((post) =>
        axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        )
      );

      return Promise.all(userPromises).then((usersResponses) => {
        const users = usersResponses.map((response) => response.data);

        posts.forEach((post) => {
          const user = users.find((user) => user.id === post.userId);
          if (user) {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log(`Author: ${user.title}`);
            console.log("---");
          } else {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log("Author: Unknown");
            console.log("---");
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching posts or users:", error);
    });
}


const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
      rl.question(question, (answer) => {
          resolve(answer);
      });
  });
}

async function createPost(): Promise<void> {
  try {
      const userIdInput = await askQuestion("Enter user's id: ");
      const userId = parseInt(userIdInput.trim(), 10);
      if (isNaN(userId)) {
          console.error("Invalid user id. Please enter a numeric value.");
          rl.close();
          return;
      }

      const titleInput = await askQuestion("Enter post's title: ");
      const title = titleInput.trim();
      if (!title) {
          console.error("Title is required.");
          rl.close();
          return;
      }

      let body = "";
      let line: string;
      console.log("Enter post's body (type 'END' on a new line to finish):");
      while ((line = await askQuestion("")) !== "END") {
          body += `${line}\n`;
      }

      const postId = Math.floor(Math.random() * 1000);
      const newPost: Post = {
          userId,
          id: postId,
          title,
          body: body.trim(),
      };

      const response = await axios.post<Post>("https://jsonplaceholder.typicode.com/posts", newPost);
      console.log("New Post Created:", response.data);
  } catch (error) {
      console.error("Error creating post:", error);
  } finally {
      rl.close();
  }
}

createPost();
