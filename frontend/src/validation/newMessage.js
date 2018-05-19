import Validator from 'validator'
import _ from 'lodash'

const validateInput = (data) => {
    let errors = {}
    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required!'
    }

    if (Validator.isEmpty(data.message)) {
        errors.message = 'This field is required!'
    }

    if (Validator.isLength(data.username, {min: 21, max: undefined})) {
        errors.username = 'Username must be within 20 charactor!'
    }

    if (Validator.isLength(data.message, {min: 1, max: 19})) {
        errors.message = 'Message must at least 20 charactor!'
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}


export default validateInput
