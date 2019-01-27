import React, { Component } from 'react';
import { postNewMenuItem } from '../../services/api';

const INITIAL_STATE = {
  name: null,
  description: null,
  image: null,
  price: null,
  category: null,
  ingredients: [],
};

export default class AddDish extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    let { name, value } = target;
    if (name === 'ingredients') value = value.split(', ');
    if (name === 'price') value = parseInt(value, 10);
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  handleGoBack = () => {
    const { state } = this.props.location;
    const { from } = this.props.location.state;
    if (state) {
      return this.props.history.push({
        pathname: '/',
        search: `?category=${from}`,
      });
    }
    this.props.history.push({
      pathname: '/',
      search: `?category=all`,
    });
  };

  async saveDish(evt) {
    evt.preventDefault();
    const response = await postNewMenuItem(this.state);
    if (Object.keys(response).length !== Object.keys(this.state).length + 1) {
      console.log('Something went wrong while saving. ' + response);
    } else {
      this.setState({ ...INITIAL_STATE });
    }
  }

  render() {
    let { name, description, image, price, category, ingredients } = this.state;
    ingredients = ingredients.join(', ');
    return (
      <>
        <form onSubmit={this.saveDish.bind(this)}>
          Name:
          <input
            type="text"
            value={name || ''}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          Description:
          <input
            type="text"
            value={description || ''}
            name="description"
            onChange={this.handleChange}
          />
          <br />
          Image URL:
          <input
            type="text"
            value={image || ''}
            name="image"
            onChange={this.handleChange}
          />
          <br />
          Price:
          <input
            type="number"
            value={price || 0}
            name="price"
            onChange={this.handleChange}
          />
          <br />
          Category:
          <input
            type="text"
            value={category || ''}
            name="category"
            onChange={this.handleChange}
          />
          <br />
          Ingredients (please, divide each ingredient with a comma and a space):
          <input
            type="text"
            value={ingredients || ''}
            name="ingredients"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit">Save a dish</button>
        </form>
        <br />
        <br />
        <button onClick={this.handleGoBack}>Back to dishes list</button>
      </>
    );
  }
}
