/*
O Princípio da Inversão de Dependência (DIP) é um dos cinco princípios SOLID e foi formulado por Barbara
Liskov em 1987.

Ele estabelece o seguinte:
“Módulos de alto nível não devem depender de detalhes de implementação de módulos de baixo nível. Ambos
devem depender de abstrações.”

Aqui estão os pontos essenciais desse princípio:

Abstração sobre Implementação:
- O DIP enfatiza que módulos de alto nível (ou classes) devem depender de abstrações (interfaces ou
classes abstratas) em vez de depender diretamente de implementações concretas.
- Isso ajuda a desacoplar os componentes do sistema, tornando-o mais flexível e fácil de manter.

Benefícios:
- Reduz o acoplamento entre módulos.
- Facilita a substituição de implementações sem afetar o código cliente.
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from "./classes/discount";
import { IndividualCustomer } from "./classes/customer";

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
