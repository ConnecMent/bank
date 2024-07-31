import axios from "axios"

async function display10Posts() {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data.slice(0,10)
        console.log(posts)
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
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const posts = response.data;

        const filteredPosts = posts.filter((post: any) => {
            return (
                (input.id === undefined || post.id === input.id) &&
                (input.userId === undefined || post.userId === input.userId) &&
                (input.title === undefined || post.title.includes(input.title)) &&
                (input.body === undefined || post.body.includes(input.body))
            );
        });

        console.log(filteredPosts);
    }catch (error){
        console.error(error)
    }
}
