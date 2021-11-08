import React from "react";

class EditBurgerForm extends React.Component {
  handleChange = (event) => {
    const upDateBurgerForm = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.upDateBurger(this.props.index, upDateBurgerForm);
  };

  render() {
    return (
      <div className="burger-edit">
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="name"
          type="text"
          value={this.props.burger.name}
        />
        <input
          onChange={this.handleChange}
          name="price"
          placeholder="price"
          type="text"
          value={this.props.burger.price}
        />
        <select
          onChange={this.handleChange}
          name="status"
          className="status"
          value={this.props.burger.status}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">Недоступно</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name="desc"
          placeholder="desc"
          value={this.props.burger.desc}
        />
        <input
          name="image"
          placeholder="image"
          type="text"
          value={this.props.burger.image}
        />
        <button onClick={() => this.props.deleteBurger(this.props.index)}>
          Удалить из меню
        </button>
      </div>
    );
  }
}

export default EditBurgerForm;
