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

function getTenPosts(): void {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(postsResponse => {
            const posts = postsResponse.data;

            const userPromises = posts.map(post => 
                axios.get<User>(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            );

            return Promise.all(userPromises)
                .then(usersResponses => {
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
                });
        })
        .catch(error => {
            console.error('Error fetching posts or users:', error);
        });
}

getTenPosts();
