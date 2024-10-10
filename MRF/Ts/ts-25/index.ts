import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//  Write a function to fetch and display a list of 10 posts with their title, body, and author name. (Use console log to display)
async function display10Posts() {
  await axios
    .get<Post[]>("/posts", {
      params: {
        _limit: 10,
      },
    })
    .then((response) => {
      const posts = response.data;
      posts.forEach((post) => {
        console.log(`id: ${post.id}`);
        console.log(`userId: ${post.userId}`);
        console.log(`title: ${post.title}`);
        console.log(`body: ${post.body}`);
        console.log("-------------------------------");
      });
    });
}

// await display10Posts();

// Write a function to update the body of a specific post. Get the post id and body as function inputs.
async function updatePost(input: { id: number; body: string }) {
  await axios.patch(`/posts/${input.id}`, input).then((response) => {
    if (response.status === 200) {
      console.log("Updated Successfully");
      console.log(response.data);
    } else {
      console.log("Update Failed");
    }
  });
}

// await updatePost({ id: 1, body: "Hello World" });

// Write a function to delete a specific post. Get the post id as function input.
async function deletePost(id: number) {
  await axios.delete(`/posts/${id}`).then((response) => {
    if (response.status === 200) {
      console.log("Deleted Successfully");
    } else {
      console.log("Delete Failed");
    }
  });
}

// await deletePost(1);

// Write a function to add a new post. Pass the title and body as arguments.
async function addPost(input: { title: string; body: string }) {
  await axios.post("/posts", input).then((response) => {
    if (response.status === 201) {
      console.log("Added Successfully");
      console.log(response.data);
    } else {
      console.log("Add Failed");
    }
  });
}

// await addPost({ title: "Hello", body: "World" });

// Write a function to search for posts based on a query. Pass the query as the function argument.
async function searchPosts(query: string) {
  await axios
    .get<Post[]>(`/posts`, {
      params: {
        q: query,
      },
    })
    .then((response) => {
      const posts = response.data;
      posts.forEach((post) => {
        console.log(`id: ${post.id}`);
        console.log(`userId: ${post.userId}`);
        console.log(`title: ${post.title}`);
        console.log(`body: ${post.body}`);
        console.log("-------------------------------");
      });
    });
}

// await searchPosts("temporibus sit alias");
