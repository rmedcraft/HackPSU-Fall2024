from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import Mongo
from datetime import date

app = Flask(__name__)
cors = CORS(app, origins="*")
app.config['CORS_HEADERS'] = 'Content-Type'

data_store = []
@app.route("/add", methods=["POST", "GET"])
@cross_origin()
def addJournal():
    # title = request.json['title']
    # journal = request.json['journal']


    # if request.content_type != 'application/json':
    #     return jsonify({"error": "Unsupported Media Type. Please send JSON data." + str(request.content_type)}), 415

    # if(request.is_json):
    #     data = request.get_json()
    #     data_store.append(data)
    #     print(f"Received and stored data: {data}")
    #     return jsonify({"message": "Data received"})
    # else: 
    #     return jsonify({"error": "Unsupported media type"})
    print(f"Content-Type: {request.content_type}")  # Should print application/json
    print(f"Raw Data: {request.data}")  # Print raw data

    Mongo.generateJorn(request.json["journal"], "user1", request.json["title"], str(date.today()))
    return {"message": "Received" + str(request.content_type) + str(request.data)}, 200


@app.route("/data", methods=["GET"])
def testJournal():
    data = []

    for x in Mongo.retrieveJorn("user1"):
        data.append({
            "text": x["text"],
            "score": x["score"],
            "label": x["label"],
            "date": x["date"],
            "title": str(x["_id"])
        })

    return jsonify(data)
    

@app.route("/edit", methods=["POST", "GET"])
def editJournal():
    Mongo.editJorn("user1", )


if __name__ == "__main__":
    app.run(debug=True)