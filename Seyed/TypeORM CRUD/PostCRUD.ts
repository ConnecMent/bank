import { Repository } from "typeorm";
import { dataSource } from "./dataSource";
import { Post } from "./PostEntity";
import { User } from "./UserEntity";

export async function createNewPost(user: User, title: string, content: string, repo: Repository<Post>){
    try{
        await repo.insert({
            title,
            content,
            user: { id: user.id }
        });
        console.log("New post inserted successfuly!")
    }catch(error){
        console.error(error)
    };
}

export async function showAllPost(repo: Repository<Post>){
    try{
        const posts = await repo.find()
        console.log(posts);
    }catch(error){
        console.error(error)
    }
}

export async function updatePost(postId: number, updatedpost: Post, repo: Repository<Post>){
    try{
        const check = await repo.exists({
            where:{
                id: postId
            }
        })

        if(check){
            await repo.update(postId, {
                title: updatedpost.title,
                content: updatedpost.content,
            })

            console.log("The update is complete!")
            showAllPost(repo)
        }else{
            console.log("The desired post does not exist!")
        }
    }catch(error){
        console.error(error)
    }
}

export async function deletePost(postId: number, repo: Repository<Post>){
    try{
        const check = await repo.exists({
            where:{
                id: postId
            }
        })
        
        if(check){
            await repo.delete(postId)
                console.log("The post deleted!")
        }else{
            console.log("The desired post does not exist!")
        }

    }catch(error){
        console.error(error)
    }
}
