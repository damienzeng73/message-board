import React from 'react'
import { Container, Divider, Form, Message } from 'semantic-ui-react'
import axios from 'axios'

import Header from '../components/Header'
import EachMessage from '../components/EachMessage'
import validateInput from '../validation/newMessage'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            message: '',
            messages: [],
            errors: {}
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

    isValid() {
        const { errors, isValid } = validateInput(this.state)
        if (!isValid) {
            this.setState({ errors })
        }

        return isValid
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOnSubmit(e) {
        e.preventDefault()

        if (this.isValid()) {
            axios.post('http://localhost:5000/addMessage', {username: this.state.username, message: this.state.message})
                .then((res) => {
                    this.setState({ username: '', message: '', messages: res.data, errors: {} })
                })
        }
    }

    render() {
        return (
            <Container>
                <Header />

                <EachMessage messages={this.state.messages} />

                <Divider />

                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Input
                        name='username'
                        label='Username'
                        value={this.state.username}
                        onChange={this.handleOnChange}
                        error={this.state.errors.username ? true : false}
                    />

                    <Message
                        color='red'
                        header='Action Forbidden'
                        content={this.state.errors.username}
                        hidden={this.state.errors.username ? false : true}
                    />

                    <Form.TextArea
                        name='message'
                        label='Message'
                        placeholder='Leave some messages'
                        value={this.state.message}
                        onChange={this.handleOnChange}
                        error={this.state.errors.message ? true: false}
                    />

                    <Message
                        color='red'
                        header='Action Forbidden'
                        content={this.state.errors.message}
                        hidden={this.state.errors.message ? false : true}
                    />

                    <Form.Button content='Submit' />
                </Form>
            </Container>
        )
    }
}


export default App
