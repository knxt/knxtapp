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
