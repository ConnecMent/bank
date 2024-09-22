import { Repository } from "typeorm";
import { dataSource } from "./dataSource2";
import { User } from "./entity2";

async function main(){
    await dataSource.initialize();

    await dataSource.runMigrations();
}

main()


async function createNewUser(newUser: User, repo: Repository<User>){
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

async function showAllUser(repo: Repository<User>){
    try{
        const users = await repo.find()
        console.log(users);
    }catch(error){
        console.error(error)
    }
}

async function updateUser(userId: number, updatedUser: User, repo: Repository<User>){
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

async function deleteUser(userId: number, repo: Repository<User>){
    try{
        const check = await repo.exists({
            where:{
                id: userId
            }
        })
        
        if(check){
            await repo.delete(userId)
                console.log("User deleted!")
        }else{
            console.log("The desired user does not exist!")
        }

    }catch(error){
        console.error(error)
    }
}
