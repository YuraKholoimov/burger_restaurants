import React from "react";

class Shipment extends React.Component {
  render() {
    const { total} = this.props;
    const shipping = total < 500 && total > 0 ? 350 : 99;
    const shippingNeon = shipping === 99 
        ? <span className="font-effect-neon total_wrap-cheap">99₽</span>
        : <span>{shipping}</span>
    return (
      <div className="total">
        <div className="total_wrap">
          <div>Доставка: {total > 0 && shippingNeon }</div>
            <div className='total_wrap-free'>
                {total < 500 
                && `Закажите еще на ${500 - total}₽ для доставки за 99₽`}
            </div>
          <div className="total_wrap-final">Итого: {total}</div>
        </div>
      </div>
    );
  }
}
export default Shipment;


// if (total < 500 && total > 0) {
//   return 350
// } else {
//   if (99) {
//     return <span className="font-effect-neon total_wrap-cheap">99₽</span>
//   } else {
//     return <span>{shipping}</span>
//   }
// }
