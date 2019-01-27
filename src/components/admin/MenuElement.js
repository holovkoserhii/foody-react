import React, { Component } from 'react';
import { getMenuItemById } from '../../services/api';

export default class MenuElement extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: [],
  };

  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.state;
    if (state) {
      return this.props.history.push(state.from);
    }
    this.props.history.push({
      pathname: '/',
      search: `?category=${category}`,
    });
  };

  async componentDidMount() {
    const item = await getMenuItemById(this.props.match.params.id);
    this.setState({ ...item });
  }

  render() {
    const {
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;
    console.log(this.props.location.state);
    return (
      <>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        <div>
          Ingredients:
          <ul>
            {ingredients.map(ingr => (
              <li key={ingr}>{ingr}</li>
            ))}
          </ul>
        </div>
        <p>
          <strong>Category: {category}</strong>
        </p>
        <img src={image} alt={name} width="500" />
        <br />
        <button onClick={this.handleGoBack}>Back to dishes list</button>
      </>
    );
  }
}
