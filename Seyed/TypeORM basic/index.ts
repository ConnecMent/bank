import { dataSource } from "./dataSource";
import { User } from "./entity";

dataSource.initialize().then(() => {
    const user = new User()
        user.fName = 'Seyed Mojtaba'
        user.lName = 'Mirsoleimani'
        user.age = 21
    

    dataSource.manager.save(user)
    console.log("User has been saved");

    dataSource.runMigrations()
    console.log("Migrations have been run");
}).catch(error => console.log(error));