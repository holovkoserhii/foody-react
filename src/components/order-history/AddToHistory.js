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
        const { date, price, address, rating } = this.state;
        return (
            <form onSubmit={evt => this.recordOrderAndReset(evt)}>
                <div>
                    Date: <input type="date" name="date" value={date} onChange={this.handleChange} required />
                </div>
                <div>
                    Price: <input type="number" name="price" value={price} placeholder="Enter the price" onChange={this.handleChange} required />
                </div>
                <div>
                    Address: <input type="text" name="address" value={address} placeholder="Enter the address" onChange={this.handleChange} required />
                </div>
                <div>
                    Rating: <input type="number" name="rating" value={rating} placeholder="Enter the rating" onChange={this.handleChange} required />
                </div>
                <button>Add to history</button>
                <br />
            </form>
        );
    }
}