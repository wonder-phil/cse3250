from flask import Flask, request, jsonify
from flask_cors import CORS
import pyjokes


app = Flask(__name__)

# Allow requests only from URL:port
CORS(app, origins=["http://localhost:5173"])
JOKE_FILE_NAME = "/external_vol/jokes.txt"

count = 0

@app.route("/")
def hello():
   return " you called / \n"

# curl -d "text=Hello!&param2=value2" -X POST http://localhost:5000/echo
@app.route("/echo", methods=['POST'])
def echo():
   return "You said: " + request.form['text']

@app.route("/joke", methods=['GET'])
def getJoke():
   global count
   count += 1
   myJoke = pyjokes.get_joke(category='neutral')
   saveJoke(myJoke)
   return jsonify(myJoke)

def saveJoke(myJoke):
   with open(JOKE_FILE_NAME, "a") as f:
      f.write(myJoke + "\n")

@app.route("/all_jokes", methods=['GET'])
def sendFullJokeFile():
   content = "NONE"
   with open(JOKE_FILE_NAME, "r") as file:
      content = file.read()
   return jsonify(content)



if __name__ == "__main__":
   app.run(host='0.0.0.0')
