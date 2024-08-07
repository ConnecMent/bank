import { DataSource } from "typeorm";
import "reflect-metadata";
import { User } from "./entity/User"; 

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.db",
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Database initialized.");

    const userRepository = AppDataSource.getRepository(User);

    const johnDoe = new User();
    johnDoe.fName = "John";
    johnDoe.lName = "Doe";
    johnDoe.age = 21;

    await userRepository.save(johnDoe);
    console.log("John Doe has been saved:", johnDoe.id);

    const users = await userRepository.find();
    console.log("All users:", users);
  })
  .catch((err) => {
    console.error("Error happened", err);
  });

export default AppDataSource;
