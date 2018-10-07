import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Receipt.css';

export default class Receipt extends Component {
  render() {
    return (
      <div class="receipt-container">
        <div class="notification is-success">
          <button class="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
            consectetur adipiscing elit
        </div>
      </div>
    )
  }
}
