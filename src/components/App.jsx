import  React from "react";
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import sampleBurger from '../../src/sample-burgers'
import Burger from "./Burger";
import base from "../Base";


class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.Id}/burgers`, {
      context: this,
      state: 'burgers'
    })

    const localStorageRef = localStorage.getItem(params.Id);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)})
    }
    console.log(this.state.order);
  }

  componentDidUpdate() {
    const { params } = this.props.match;
  
    localStorage.setItem(params.Id,  JSON.stringify(this.state.order) )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  upDateBurger = (key, updatedBurger) => {
    const burgers = {...this.state.burgers};
    burgers[key] = updatedBurger;
    this.setState({burgers})

  };
 
  deleteBurger = (key) => {
    const burgers = {...this.state.burgers};
    burgers[key] = null;
    this.setState({burgers})

  }

  deleteOrder = (key) => {
    const order = {...this.state.order};

    if (order[key] > 1) {
      console.log(order[key]);
       order[key] = order[key] - 1;
    } else  {
      console.log(order[key]);
      delete order[key];
    }
    
    this.setState({order})

  }

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
        <Order 
          burger={this.state.burgers} 
          order={this.state.order} 
          deleteOrder={this.deleteOrder}
          />
        <MenuAdmin
          loadSampleBurgers={this.loadSampleBurgers}
          addBurger={this.addBurger}
          burgers={this.state.burgers}
          upDateBurger={this.upDateBurger}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}
export default App;