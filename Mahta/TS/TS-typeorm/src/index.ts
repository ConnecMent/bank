import { DataSource } from "typeorm";
import "reflect-metadata";
import { user } from "./entity/dataSource"; 

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.db",
  synchronize: false,
  logging: false,
  entities: [user],
  subscribers: [],
  migrations: ["src/migration/*.ts"]
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Database initialized.");

    const userRepository = AppDataSource.getRepository(user);

    const johnDoe = new user();
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
