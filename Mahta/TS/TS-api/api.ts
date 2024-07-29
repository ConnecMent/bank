import axios from 'axios';

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
        const postsResponse = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const posts = postsResponse.data;

        const userPromises = posts.map(post => axios.get<User>(`https://jsonplaceholder.typicode.com/users/${post.userId}`));
        const usersResponses = await Promise.all(userPromises);
        const users = usersResponses.map(response => response.data);

        posts.forEach(post => {
            const user = users.find(user => user.id === post.userId);
            if (user) {
                console.log(`Title: ${post.title}`);
                console.log(`Body: ${post.body}`);
                console.log(`Author: ${user.name}`);
                console.log('---');
            } else {
                console.log(`Title: ${post.title}`);
                console.log(`Body: ${post.body}`);
                console.log('Author: Unknown');
                console.log('---');
            }
        });
    } catch (error) {
        console.error('Error fetching posts or users:', error);
    }
}


getTenPosts();