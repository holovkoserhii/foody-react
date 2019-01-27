import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import CategoriesList from './CategoriesList';
import DishesList from './DishesList';

import {
  getCategories,
  getAllMenuItems,
  getMenuItemsWithCategory,
} from '../../services/api';

const INITIAL_STATE = {
  categories: [],
  dishes: [],
};

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class Menu extends Component {
  state = { ...INITIAL_STATE };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState(prevState => ({
      ...prevState,
      categories: [{ id: 4, name: 'all' }, ...categories],
    }));

    const currentCategory = getCategoryFromProps(this.props);

    if (!currentCategory) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all',
      });
    }
    this.fetchDishes(currentCategory);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
    if (prevCategory === nextCategory) return;
    this.fetchDishes(nextCategory);
  }

  fetchDishes = async category => {
    let dishes = [];
    if (category === 'all') {
      dishes = await getAllMenuItems();
    } else {
      dishes = await getMenuItemsWithCategory(category);
    }
    this.setState(prevState => ({ ...prevState, dishes: dishes }));
  };

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { categories, dishes } = this.state;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <>
        <Link to={{ pathname: '/add', state: { from: currentCategory } }}>
          Add new dish
        </Link>
        <h4>Categories list:</h4>
        <CategoriesList
          categories={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        {currentCategory !== 'all' && (
          <button onClick={() => this.handleCategoryChange('all')}>
            Reset category
          </button>
        )}
        <DishesList dishes={dishes} />
      </>
    );
  }
}
