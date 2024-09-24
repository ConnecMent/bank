import { dataSource } from "./dataSource";
import { createNewPost, showAllPost, updatePost, deletePost } from "./PostCRUD";
import { Post } from "./PostEntity";
import { createNewUser, showAllUser, updateUser, deleteUser } from "./UserCRUD";
import { User } from "./UserEntity";

async function main(){
    await dataSource.initialize();

    await dataSource.runMigrations();

    const userRepo = dataSource.getRepository(User);
    const postRepo = dataSource.getRepository(Post);

    const user = new User();

    user.fName = "seyed";
    user.lName = "Mojtaba";
    user.age = 21;

    const post1 = new Post();

    post1.title = "post1";
    post1.content = "content1";
    post1.user = user;

    createNewUser(user, userRepo).then(() => createNewPost(user, post1.title, post1.content, postRepo));

    // showAllUser(userRepo);
    // showAllPost(postRepo);

    // deleteUser(4,userRepo);
    // deletePost(4,postRepo);
    // deletePost(5,postRepo);
}

main()