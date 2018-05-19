# Message-board
A simple message board built with React, Flask.

## Dependencies
* Python3+
* Node
* MongoDB

## Getting Started
### Installation
Clone this repository:

    git clone https://github.com/damnee562/message-board.git

Create virtualenv and install all requirements in **backend** directory:

    cd message-board/backend/
    python3 -m venv venv_name
    source venv_name/bin/activate
    pip install -r requirements.txt

Install all needed node_modules in **frontend** directory:

    cd message-board/frontend/
    yarn install

or with npm:

    npm install

Make sure MongoDB is running on your system, you can check its status by typing:

    sudo service mongod status

If it's not running, fire it up:

    sudo service mongod start

Fire up **backend** server:

    cd message-board/backend/
    export FLASK_APP=app.py
    flask run

Open another terminal for **frontend** server:

    cd message-board/frontend/
    yarn start

or with npm:

    npm start

## Built With
* [React](https://facebook.github.io/react/) - A JavaScript library for building UI
* [Semantic UI React](https://react.semantic-ui.com/introduction) - A React UI framework
* [Flask](http://flask.pocoo.org/) - A python web framework
* [axios](https://github.com/mzabriskie/axios) - A Promised based HTTP client

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
