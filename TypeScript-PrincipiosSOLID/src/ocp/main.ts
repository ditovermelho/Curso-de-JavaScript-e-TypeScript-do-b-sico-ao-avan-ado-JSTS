/*
Open/Closed principle
O Princípio do Aberto/Fechado é um dos cinco princípios SOLID e foi formulado por Bertrand Meyer.

Ele diz o seguinte:
“Entidades de software (classes, módulos, funções etc.) devem estar abertas para extensão, mas fechadas para modificação.”

Extensibilidade:
Uma classe ou módulo deve ser projetado de forma que seja possível adicionar novas funcionalidades sem alterar o código existente.
Isso significa que, ao introduzir uma nova funcionalidade, não precisamos modificar o comportamento já testado e revisado.
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from "./classes/discount";
//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camiseta", 49.9));
shoppingCart.addItem(new Product("Caderno", 9.9));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
