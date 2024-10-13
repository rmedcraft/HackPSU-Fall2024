from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route("/data", methods=["GET"])

def testJournal():
    data = []

    data.append({
        "date": "9/11",
        "title": "THIS IS A REALLY COOL TITLE",
        "example": "THIS IS A REALLY COOL EXAMPLE",
    })
    data.append({
        "date": "9/12",
        "title": "THIS IS A REALLY COOLer TITLE",
        "example": "THIS IS A REALLY COOLer EXAMPLE",
    }) 
    data.append({
        "date": "9/13",
        "title": "THIS IS A REALLY COOLerest TITLE",
        "example": "THIS IS A REALLY COOLerset EXAMPLE",
    })

    
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)