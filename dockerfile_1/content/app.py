# app for hello world
from flask import Flask
app = Flask(__name__)

# this route 
@app.route('/')
def hello_world():
    return 'Hello, World!'

app.run( host='0.0.0.0', port=5000, debug=True)



