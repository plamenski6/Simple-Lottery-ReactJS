import React, { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

class AppFooter extends Component {

    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Lottery ©2020</Footer>
        )
    }
}

export default AppFooter