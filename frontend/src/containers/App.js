import React from 'react'
import { Container, Divider, Form } from 'semantic-ui-react'
import axios from 'axios'

import Message from '../components/Message'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            message: '',
            messages: []
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getMessages')
            .then((res) => {
                this.setState({ messages: res.data })
            })
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOnSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/addMessage', {username: this.state.username, message: this.state.message})
            .then((res) => {
                this.setState({ username: '', message: '', messages: res.data })
            })
    }

    render() {
        return (
            <Container>
                <Message messages={this.state.messages} />

                <Divider />

                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Input
                        name='username'
                        label='Username'
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />

                    <Form.TextArea
                        name='message'
                        label='Message'
                        placeholder='Leave some messages'
                        value={this.state.message}
                        onChange={this.handleOnChange}
                    />

                    <Form.Button content='Submit' />
                </Form>
            </Container>
        )
    }
}


export default App
