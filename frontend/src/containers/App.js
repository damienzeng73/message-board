import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import axios from 'axios'

import Header from '../components/Header'
import Message from '../components/Message'
import MessageForm from '../components/MessageForm'
import validateMessage from '../utils/validateMessage'

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
        const { errors, isValid } = validateMessage(this.state)
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

                <Message messages={this.state.messages} />

                <Divider />

                <MessageForm
                    username={this.state.username}
                    message={this.state.message}
                    errors={this.state.errors}
                    handleOnChange={this.handleOnChange}
                    handleOnSubmit={this.handleOnSubmit}
                />
            </Container>
        )
    }
}


export default App
