import React, { Component, createRef } from 'react';

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    maxWidth: 600,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 16,
  },
};
export default class Modal extends Component {
  backdropRef = createRef();

componentDidMount() {
  window.addEventListener("keydown", this.handleKeyPress);
}

componentWillUnmount() {
  window.removeEventListener("keydown", this.handleKeyPress);
}

handleKeyPress = e => {
  if (e.code !== "Escape") return;
  this.props.onClose();
}

  handleBackdropClick = evt => {
    if (evt.target !== this.backdropRef.current) return;
    this.props.onClose();
  }

  render() {
    const { onClose } = this.props;
    const {date, price, address, rating} = this.props.order;
    return (
      <div style={styles.backdrop} ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <div style={styles.modal}>
          <h2>Order details</h2>
          <div>
            <h4>Date: {date}</h4>
            <h4>Price: {price}</h4>
            <h4>Address: {address}</h4>
            <h4>Rating: {rating}</h4>
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
