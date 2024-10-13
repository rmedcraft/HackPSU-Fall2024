from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo
import ML_Models


def generateJorn(text, user, title, date):
    result = ML_Models.classifier(text)
    createJorn(text, result[1], result[0], user, title, date)
    return

#takes in the text and the score and adds the journal to the database
def createJorn(text, score, label, user, title, date):
    uri = "mongodb+srv://user:password1234@cluster0.amvde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))
    db = client[user]
    collection = db["Journals"]

    post = {"_id": title, "date": date, "text": text, "score": score, "label": label}

    collection.insert_one(post)

    return

#needs the user db name as in user1
def retrieveJorn(user):
    uri = "mongodb+srv://user:password1234@cluster0.amvde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    db = client[user]
    collection = db["Journals"]
    
    return collection.find({})
