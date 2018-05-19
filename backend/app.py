from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'messages'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/messages-board'
CORS(app)

mongo = PyMongo(app)

@app.route('/getMessages', methods=['GET'])
def get_messages():
    messages = []
    for message in mongo.db.messages.find():
        dic = {}
        dic['username'] = message['username']
        dic['content'] = message['content']
        dic['timestamp'] = message['timestamp']

        messages.append(dic)

    return jsonify(messages[::-1])


@app.route('/addMessage', methods=['POST'])
def add_message():
    username = request.json['username']
    message = request.json['message']

    if username and message:
        mongo.db.messages.insert({
            'username': username,
            'content': message,
            'timestamp': datetime.now()
        })

    messages = []
    for message in mongo.db.messages.find():
        dic = {}
        dic['username'] = message['username']
        dic['content'] = message['content']
        dic['timestamp'] = message['timestamp']

        messages.append(dic)

    return jsonify(messages[::-1])
