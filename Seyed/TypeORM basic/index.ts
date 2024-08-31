import { Repository } from "typeorm";
import { dataSource } from "./dataSource";
import { User } from "./entity";

async function main(){
    await dataSource.initialize();

    await dataSource.runMigrations();
    const user = await dataSource.getRepository(User);

    const seyed = new User();
        seyed.fName = 'Seyed Mojtaba'
        seyed.lName = 'Mirsoleimani'
        seyed.age = 21

    await user.save(seyed);
    console.log("User has been saved");

    const users = await user.find();
    console.log(users);
}

main();

export default dataSource