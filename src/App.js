import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { getRandomNumber } from './helper/utils'
import { registerTicket, removeTicket, finish, reset } from './helper/actions'

import Lottery from './components/Lottery'
import Final from './components/Final'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AboutUs from './components/AboutUs'

import './App.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const { Content } = Layout

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false
    }

    this.registerTicket = registerTicket.bind(this)
    this.removeTicket = removeTicket.bind(this)
    this.finish = finish.bind(this)
    this.reset = reset.bind(this)
  }

  renderApp() {
    const { tickets, remainingTickets, finished, winningNumber } = this.state
    const actions = {}

    if (finished) {
      actions.reset = this.reset

      return (
        <Final
          actions={actions}
          tickets={tickets}
          winningNumber={winningNumber}
        />
      )
    }

    actions.registerTicket = this.registerTicket
    actions.removeTicket = this.removeTicket
    actions.finish = this.finish

    return (
      <Lottery
        actions={actions}
        tickets={tickets}
        remainingTickets={remainingTickets}
      />
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className='layout'>
          <AppHeader />
          <Content style={{ padding: '0 50px', textAlign: 'center' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Switch>
                <Route path='/' exact component={() => this.renderApp()} />
                <Route path='/about' component={AboutUs} />
                <Redirect from='/info' to='/about' />
              </Switch>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
