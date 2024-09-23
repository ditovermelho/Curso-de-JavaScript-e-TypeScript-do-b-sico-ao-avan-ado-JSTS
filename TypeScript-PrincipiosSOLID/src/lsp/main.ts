/*
O Princípio da Substituição de Liskov é um dos cinco princípios SOLID e foi formulado por Barbara Liskov em 1987.

Ele estabelece o seguinte:
“Se um programa está usando uma classe base, então a referência à classe base pode ser substituída por uma classe
derivada sem afetar a funcionalidade do programa.”

Extensibilidade:
- Uma classe derivada (subclasse) deve estender o comportamento da classe base (superclasse) e não substituí-lo por
algo diferente.
- Se seguirmos esse princípio, podemos substituir uma classe base por qualquer uma de suas subclasses sem quebrar o
código cliente.
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  "Luiz",
  "Miranda",
  "111.111.111-11"
);
/*
const enterpriseCustomer = new EnterpriseCustomer(
  "Empresa Gigante",
  "2222222222222"
);
*/
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer
);

shoppingCart.addItem(new Product("Camiseta", 49.9));
shoppingCart.addItem(new Product("Caderno", 9.9));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
