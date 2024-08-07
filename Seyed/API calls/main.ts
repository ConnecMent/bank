import axios from "axios"

interface Post{
    id: number,
    userId: number,
    title: string,
    body: string
}

async function display10Posts() {
    try{
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const posts = response.data
        
        posts.forEach(post => {
            console.log(`id: ${post.id}`);
            console.log(`userId: ${post.userId}`);
            console.log(`title: ${post.title}`);
            console.log(`body: ${post.body}`);
            console.log("-------------------------------")
        })
    }catch (error){
        console.error(error)
    }
}


async function deletePost(id : number) {
    try{
        const result = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(result)
    }catch (error){
        console.error(error)
    }
}


interface UpdatePost{
    id: number,
    body: string
}

async function updatePost(input: UpdatePost) {
    try{
        const result = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${input.id}`,input)
        console.log(result)
    }catch (error){
        console.error(error)
    }
}

interface NewPost{
    userId: number,
    title: string,
    body: string
}

async function addPost(input: NewPost) {
    try{
        const result = await axios.post('https://jsonplaceholder.typicode.com/posts',input)
        console.log(result.data)
    }catch (error){
        console.error(error)
    }
}


interface Query{
    id?: number,
    userId?: number,
    title?: string,
    body?: string
}

async function searchForPosts(input: Query) {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${input.id}&?userId=${input.userId}&?body=${input.body}&?title=${input.title}`)
        const posts = response.data;

        console.log(posts);
    }catch (error){
        console.error(error);
    }
}
