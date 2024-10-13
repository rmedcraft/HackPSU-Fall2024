from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo
import ML_Models

uri = "mongodb+srv://user:password1234@cluster0.amvde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

def generateJorn(text, user):
    result = ML_Models.classifier(text)
    createJorn(text, result[1], result[0], user)
    return

#takes in the text and the score and adds the journal to the database
def createJorn(text, score, label, user):
    db = client[user]
    collection = db["Journals"]

    post = {"text": text, "score": score, "label": label}

    collection.insert_one(post)

    return



#needs the user db name as in user1
def retrieveJorn(user):
    db = client[user]
    collection = db["Journals"]


    """
    for x in collection.find({}): 
        print(x)
    """
    return collection.find({})

