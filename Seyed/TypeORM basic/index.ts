import { Repository } from "typeorm";
import { dataSource } from "./dataSource";
import { User } from "./entity";

dataSource.initialize().then(async() => {
    const user = dataSource.getRepository(User)

    const seyed = new User()
        seyed.fName = 'Seyed Mojtaba'
        seyed.lName = 'Mirsoleimani'
        seyed.age = 21
    
    await user.save(seyed)
    console.log("User has been saved");

    const users = await user.find()
    console.log(users)
}).catch(error => console.log(error));

export default dataSource