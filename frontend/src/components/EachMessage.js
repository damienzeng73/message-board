import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'
import _ from 'lodash'

const EachMessage = (props) => {
    let messageCollection = _.map(props.messages, (element, index) => {
        return (
            <List.Item key={index}>
                <List.Content>
                    <List.Header>{element.username}</List.Header>
                    <List.Description>{element.content} - {element.timestamp}</List.Description>
                </List.Content>
            </List.Item>
        )
    })

    return (
        <List relaxed>
            {messageCollection}
        </List>
    )
}

EachMessage.propTypes = {
    messages: PropTypes.array.isRequired
}


export default EachMessage
