import React from 'react'
import { Container, Divider, Form } from 'semantic-ui-react'

import Message from '../components/Message'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            message: '',
            messages: []
        }
    }

    render() {
        return (
            <Container>
                <Message messages={this.state.messages} />

                <Divider />

                <Form>
                    <Form.Input
                        name='username'
                        label='Username'
                        value={this.state.username}
                    />

                    <Form.TextArea
                        name='message'
                        label='Message'
                        placeholder='Leave some messages'
                        value={this.state.message}
                    />

                    <Form.Button content='Submit' />
                </Form>
            </Container>
        )
    }
}


export default App
