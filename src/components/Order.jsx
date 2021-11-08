import React from "react";
import Shipment from "./Shipment";

class Order extends React.Component {

  renderOrder = (key) => {
    const burger = this.props.burger[key];
    const count = this.props.order[key];


    const isAvailable = burger && burger.status === "available";

    if (!burger) return null

    if (!isAvailable) {
      return (
        <li className="unavailbale" key={key}>
          Извините {burger ? burger.name : "бургер"} временно недоступен
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <span>{count}</span>
            шт. {burger.name}
          <span> {count * burger.price} ₽</span>
        </span>
        <button onClick={() => this.props.deleteOrder(key)}>&times;</button>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burger[key];
      const count = this.props.order[key];

      if (burger && burger.status === "available") {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Ваш заказ</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        {total > 0 
        ?  <Shipment total={total} />
        : <div className='nothingSelected'>
            Выберите блюда и добавте к заказу
        </div> }
      </div>
    );
  }
}
export default Order;
