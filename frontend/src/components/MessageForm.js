import React from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'

const MessageForm = (props) => {
    return (
        <Form onSubmit={props.handleOnSubmit}>
            <Form.Input
                name='username'
                label='Username'
                placeholder='Username'
                value={props.username}
                onChange={props.handleOnChange}
                error={props.errors.username ? true : false}
            />

            <Message
                color='red'
                header='Action Forbidden'
                content={props.errors.username}
                hidden={props.errors.username ? false : true}
            />

            <Form.TextArea
                name='message'
                label='Message'
                placeholder='Leave some messages'
                value={props.message}
                onChange={props.handleOnChange}
                error={props.errors.message ? true: false}
            />

            <Message
                color='red'
                header='Action Forbidden'
                content={props.errors.message}
                hidden={props.errors.message ? false : true}
            />

            <Form.Button
                primary={true}
                content='Submit'
            />
        </Form>
    )
}

MessageForm.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    errors: PropTypes.object,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}


export default MessageForm
