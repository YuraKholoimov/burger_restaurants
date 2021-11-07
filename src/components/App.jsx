import  React from "react";
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import sampleBurger from '../../src/sample-burgers'
import Burger from "./Burger";



class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurger });
  };

  addBurger = (burger) => {
    const burgers = { ...this.state.burgers };
    burgers[`burger${Date.now()}`] = burger;
    this.setState({ burgers });
  };

  addOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => (
              <Burger
                ditails={this.state.burgers[key]}
                key={key}
                index={key}
                addOrder={this.addOrder}
              />
            ))}
          </ul>
        </div>
        <Order burger={this.state.burgers} order={this.state.order} />
        <MenuAdmin
          loadSampleBurgers={this.loadSampleBurgers}
          addBurger={this.addBurger}
        />
      </div>
    );
  }
}
export default App;