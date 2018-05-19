from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'messages'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/messages-board'

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
