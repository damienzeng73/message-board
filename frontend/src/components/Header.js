import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import './Header.css'

const _Header = () => {
    return (
        <Container id='header' fluid>
            <Header as='h1'>MESSAGE BOARD</Header>
        </Container>
    )
}


export default _Header
