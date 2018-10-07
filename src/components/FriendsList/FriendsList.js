import React, { Component } from 'react';
import Friend from './Friend.js';
import FriendForm from './FriendsForm.js';
import './FriendsList.css';
import 'bulma/css/bulma.css';

export default class FriendsList extends Component{

    showModal = e => {
      const modal = document.querySelector('.modal');
      modal.classList.value = 'modal is-active';
    }

    closeModal = e => {
      const modal = document.querySelector('.modal');
      modal.classList.value = 'modal';
    }

    render() {
        return(
            <div className="FriendsList">
              <nav className="box">
              <div className="content">
                <h1>Friend List</h1>
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Find a Friend"></input>
                  </p>
                <p class="control">
                  <a class="button is-info">
                    Search
                  </a>
                </p>
              </div>
              <div style={{float:"left",paddingLeft:"4px"}}>
              <a className="button" id="add-rmv" onClick={this.showModal}>Add</a>
              </div>

              <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Add A Friend</p>
                  <button class="delete" aria-label="close" onClick={this.closeModal}></button>
               </header>

               <section class="modal-card-body">
                  <FriendForm add={this.props.AddFriend}/>
               </section>

               <footer class="modal-card-foot">
              </footer>
            </div>
          </div>

          <br/>
          <hr/>

          <ul className="FriendList" style={{margin: '0 auto'}}>
            {this.props.friends.map(friend => {
              return (
                <Friend
                  key={friend.id}
                  friendName={friend.name}
                  friendAddress={friend.address}
                  delete={this.props.DeleteFriend}
                  add={this.props.AddFriend}
                 />
               );
             })}
            </ul>

            </div>
          </nav>
        </div>
        )
      }
    }
