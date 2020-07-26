import React, { Component } from 'react';
import { Button, Card, Typography } from 'antd'
const { Title } = Typography

class LotteryTicket extends Component {
  render() {
    const { color, number, actions, index } = this.props

    return (
      <Card style={{ background: color, marginBottom: 25 }}
        size='small'
        title='TICKET'
      >
        <b><Title level={3}>{number}</Title></b>
        <Button block
          onClick={() => {
            actions.removeTicket(index)
          }}>
          X
        </Button>
      </Card>
    )
  }
}

export default LotteryTicket;
