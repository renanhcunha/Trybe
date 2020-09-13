import React from 'react';
import Order from './Order';

class ShowOrder extends React.Component {
  render() {
    const products = [
    {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];

    return (
      products.map(order => (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order user={order.user} product={order.product} price={order.price} />
      </div> ))
    );
  }
}

export default ShowOrder;