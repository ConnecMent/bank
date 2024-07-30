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
  name: string;
}

async function getTenPosts(): Promise<void> {
  try {
    const postsResponse = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10");
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
        console.log(`ID: ${post.id}`);
        console.log(`Author: ${user.name}`);
        console.log("---");
      } else {
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log(`ID: ${post.id}`);
        console.log("Author: Unknown");
        console.log("---");
      }
    });
  } catch (error) {
    console.error("Error fetching posts or users:", error);
  }
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

async function createPost(userId: number, title: string, body: string): Promise<void> {
  try {
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

async function performSearch(title: string): Promise<void> {
  try {
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
        console.log(`ID: ${post.id}`);
        console.log(`Author: ${user.name}`);
        console.log("---");
      } else {
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log(`ID: ${post.id}`);
        console.log("Author: Unknown");
        console.log("---");
      }
    });
  } catch (error) {
    console.error("Error fetching posts or users:", error);
  }
}

async function updatePostBody(postId: number, body: string): Promise<void> {
  try {
    const response = await axios.patch<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`, { body });
    console.log("Post Updated:", response.data);
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

async function deletePost(postId: number): Promise<void> {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log("Post deleted successfully.");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

async function mainMenu(): Promise<void> {
  while (true) {
    const choice = await askQuestion("Choose an option: (1) Get Ten Posts, (2) Create Post, (3) Search Posts, (4) Update Post Body, (5) Delete Post, (6) Exit: ");
    switch (choice.trim()) {
      case "1":
        await getTenPosts();
        break;
      case "2":
        const userIdInput = await askQuestion("Enter user's id: ");
        const userId = parseInt(userIdInput.trim(), 10);
        if (isNaN(userId)) {
          console.error("Invalid user id. Please enter a numeric value.");
          break;
        }
        const titleInput = await askQuestion("Enter post's title: ");
        const title = titleInput.trim();
        if (!title) {
          console.error("Title is required.");
          break;
        }
        let body = "";
        let line: string;
        console.log("Enter post's body (type 'END' on a new line to finish):");
        while ((line = await askQuestion("")) !== "END") {
          body += `${line}\n`;
        }
        await createPost(userId, title, body);
        break;
      case "3":
        const searchInput = await askQuestion("Enter post's title: ");
        const searchTitle = searchInput.trim();
        if (!searchTitle) {
          console.error("Title is required.");
          break;
        }
        await performSearch(searchTitle);
        break;
      case "4":
        const postIdUpdateInput = await askQuestion("Enter post ID to update: ");
        const postIdUpdate = parseInt(postIdUpdateInput.trim(), 10);
        if (isNaN(postIdUpdate)) {
          console.error("Invalid post ID. Please enter a numeric value.");
          break;
        }
        const bodyUpdateInput = await askQuestion("Enter new body for the post: ");
        const bodyUpdate = bodyUpdateInput.trim();
        if (!bodyUpdate) {
          console.error("Body is required.");
          break;
        }
        await updatePostBody(postIdUpdate, bodyUpdate);
        break;
      case "5":
        const postIdDeleteInput = await askQuestion("Enter post ID to delete: ");
        const postIdDelete = parseInt(postIdDeleteInput.trim(), 10);
        if (isNaN(postIdDelete)) {
          console.error("Invalid post ID. Please enter a numeric value.");
          break;
        }
        await deletePost(postIdDelete);
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
