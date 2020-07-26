import React, { Component } from 'react';
import { Button, Card } from 'antd'
import { getRandomColor } from '../helper/utils'

class Final extends Component {

  isWinning() {
    const { tickets, winningNumber } = this.props

    for (const ticket of tickets) {
      if(ticket.number === winningNumber) {
        return true;
      }
    }

    return false
  }

  renderWinnig() {
    return (
      <>
        <h1>CONGRATULATIONS!!!</h1>
        <h2>You are winning!</h2>
        <p>Your winning number is: <b>{this.props.winningNumber}</b></p>
      </>
    )
  }

  renderTryAgain() {
    return (
      <>
        <h1>TRY AGAIN! ;(</h1>
        <p>The winning number is: <b>{this.props.winningNumber}</b></p>
      </>
    )
  }

  render() {
    return (
      <Card style={{ background: getRandomColor()}}
       title={this.isWinning() ? this.renderWinnig() : this.renderTryAgain()}
       >
        <Button onClick={this.props.actions.reset}>NEW DRAW</Button>
      </Card>
    )
  }
}

export default Final;
