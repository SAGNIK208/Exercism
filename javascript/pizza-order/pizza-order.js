/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
   switch(pizza){
    case 'Margherita' :
      price = 7;
      break;
    case 'Caprese' :
      price = 9;
      break;
    case 'Formaggio' :
      price = 10;
      break;    
   }
   return price + calculateToppingPrice(extras);
}

function calculateToppingPrice(extras){
  if(extras.length === 0){
    return 0;
  }
  if(extras[0] === 'ExtraSauce'){
    return 1 + calculateToppingPrice(extras.slice(1));
  }
  else{
    return 2 + calculateToppingPrice(extras.slice(1));
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  if(pizzaOrders.length === 0){
    return 0;
  }
  return pizzaOrders.reduce((accumulator,currentValue,index)=>{
    return accumulator + pizzaPrice(pizzaOrders[index].pizza,...pizzaOrders[index].extras);
  },0);
}
