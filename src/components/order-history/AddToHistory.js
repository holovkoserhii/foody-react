import React, { Component } from 'react';

const INITIAL_STATE = {
    date: "",
    price: "",
    address: "",
    rating: ""
}

export default class AddToHistory extends Component {

    state = { ...INITIAL_STATE };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    recordOrderAndReset = evt => {
        evt.preventDefault();
        this.props.onAdd({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        return (
            <form>
                Date: <input type="date" name="date" onChange={this.handleChange} required />
                <br />
                Price: <input type="number" name="price" placeholder="Enter the price" onChange={this.handleChange} required />
                <br />
                Address: <input type="text" name="address" placeholder="Enter the address" onChange={this.handleChange} required />
                <br />
                Rating: <input type="number" name="rating" placeholder="Enter the rating" onChange={this.handleChange} required />
                <br />
                <button type="submit" onClick={evt => this.recordOrderAndReset(evt)}>
                    Add to history
                </button>
                <br />
                <br />
            </form>
        );
    }
}