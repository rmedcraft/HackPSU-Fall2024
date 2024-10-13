from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo

uri = "mongodb+srv://user:password1234@cluster0.amvde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))


#takes in the text and the score and adds the journal to the database
def createJorn(text, score, user):
    db = client[user]
    collection = db["Journals"]

    post = {"text": text, "score": score}

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
