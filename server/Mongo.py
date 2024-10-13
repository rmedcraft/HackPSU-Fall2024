from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo

uri = "mongodb+srv://user:password1234@cluster0.amvde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))




def createJorn(text, score):
    db = client["user1"]
    collection = db["Journals"]

    post = {"text": text, "score": score}

    collection.insert_one(post)

    return


createJorn("asdfasdfasdfs", 1.5336222555)