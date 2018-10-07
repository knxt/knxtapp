import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './FriendsList.css';

export default class Friend extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
    }

    render() {
      return(
        <div className="Friend">
          <nav className="box">
            <div className="content has-text-center" style={{height: "80px"}}>
            <h3 style={{marginRight: '35px'}}>{this.props.friendName}</h3>
            <div className="core-btns">
              <a className="button is-rounded" id="pay" style={{float: 'left'}}><strong>Pay</strong></a>
              <a class="button is-danger is-outlined" style={{float: 'center'}} onClick={this.props.delete}><span>Delete</span></a>
              <a className="button is-rounded" id="req" style={{float:"right"}}><strong>Request</strong></a>
            </div>
            </div>
          </nav>
        </div>
      )
    }
}
