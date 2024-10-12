from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])

def testJournal():
    data = {
        "date": "9/11",
        "title": "THIS IS A REALLY COOL TITLE",
        "example": "THIS IS A REALLY COOL EXAMPLE",
    }
    return jsonify(data)

if(__name__ == "__main__"):
    app.run(debug=True)