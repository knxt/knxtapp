import React, { Component } from 'react'
import Login from '../Login/Login.js'
import './Home.css'
import 'bulma/css/bulma.css'

export default class Home extends Component {
  render() {
    return(
      <html>
      <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name="description" content="Offchain P2P Payments/Lending" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@blokboy_JM" />
      <meta name="twitter:title" content="Knxt" />
      <meta name="twitter:description" content="Offchain P2P Payments/Lending" />
      <title>Knxt - Offchain P2P Payments/Lending</title>
      </head>

  <body>
      <div>
          <section class="hero is-fullheight">
            <div class="hero-head">
              <header class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    <span id="logo" class="navbar-item">
                      Knxt
                    </span>
                    <span id="hamburger-btn" class="navbar-burger burger" data-target="navbarMenuHeroC">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                      <span class="navbar-item">
                        <a class="button is-silent" href="/search">
                          <span>History</span>
                        </a>
                      </span>
                      <span class="navbar-item">
                        <a class="button is-silent is-inverted" href="/edit">
                          <span>Dashboard</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </header>
            </div>


            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Knxt
                </h1>
                <h2 class="subtitle">
                  Offchain P2P Payments/Lending
                </h2>
              </div>
              <div class="Login">
              <Login />
              </div>
            </div>
          </section>
          </div>
  </body>
</html>
    )
  }
}
