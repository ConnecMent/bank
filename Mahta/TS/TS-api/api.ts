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
      return;
    }

    const titleInput = await askQuestion("Enter post's title: ");
    const title = titleInput.trim();
    if (!title) {
      console.error("Title is required.");
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
  }
}

async function performSearch(): Promise<void> {
  try {
    const searchInput = await askQuestion("Enter post's title: ");
    const title = searchInput.trim();
    if (!title) {
      console.error("Title is required.");
      return;
    }

    const postsResponse = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?title=${encodeURIComponent(title)}`);
    const posts = postsResponse.data;

    const userPromises = posts.map((post) =>
      axios.get<User>(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    );

    const usersResponses = await Promise.all(userPromises);
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
  } catch (error) {
    console.error("Error fetching posts or users:", error);
  }
}

async function updatePostBody(): Promise<void> {

}

async function deletePost(): Promise<void> {

}

async function mainMenu(): Promise<void> {
  while (true) {
    const choice = await askQuestion("Choose an option: (1) Get Ten Posts, (2) Create Post, (3) Search Posts, (4) Exit: ");
    switch (choice.trim()) {
      case "1":
        await getTenPosts();
        break;
      case "2":
        await createPost();
        break;
      case "3":
        await performSearch();
        break;
      case "4":
        await updatePostBody();
        break;
      case "5":
        await deletePost();
        break;
      case "6":
        rl.close();
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

mainMenu();