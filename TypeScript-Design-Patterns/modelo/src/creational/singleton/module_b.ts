//import { MyDatabaseModule} from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a";

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Roberto', age: 30 });
myDatabase.add({ name: 'Joana', age: 50 });
myDatabase.add({ name: 'Luiza', age: 25 });
myDatabase.show();

console.log(myDatabaseFromModuleA === myDatabase);
