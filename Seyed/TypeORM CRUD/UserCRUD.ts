import { Repository } from "typeorm";
import { dataSource } from "./dataSource";
import { User } from "./UserEntity";
import { Post } from "./PostEntity";

export async function createNewUser(newUser: User, repo: Repository<User>){
    try{
        const check = await repo.exists({
            where:{
                fName: newUser.fName,
                lName: newUser.lName
            }
        })

        if(!check){
        await repo.insert(newUser);
        console.log("New user inserted successfuly!")
        }else{
            console.log("User already exists!")
        }
    }catch(error){
        console.error(error)
    };
}

export async function showAllUser(repo: Repository<User>){
    try{
        const users = await repo.find({ relations: ['post']})
        console.log(users);
    }catch(error){
        console.error(error)
    }
}

export async function updateUser(userId: number, updatedUser: User, repo: Repository<User>){
    try{
        const check = await repo.exists({
            where:{
                id: userId
            }
        })

        if(check){
            await repo.update(userId, {
                fName: updatedUser.fName,
                lName: updatedUser.lName,
                age: updatedUser.age
            })

            console.log("The update is complete!")
            showAllUser(repo)
        }else{
            console.log("The desired user does not exist!")
        }
    }catch(error){
        console.error(error)
    }
}

export async function deleteUser(userId: number, repo: Repository<User>){
    try{
        const check = await repo.exists({
            where:{
                id: userId
            }
        })
        
        if(check){
            await repo.delete(userId)
                console.log("The user deleted!")
        }else{
            console.log("The desired user does not exist!")
        }

    }catch(error){
        console.error(error)
    }
}
