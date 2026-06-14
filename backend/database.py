from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from dotenv import load_dotenv
from pymongo.errors import DuplicateKeyError
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = AsyncIOMotorClient(MONGO_URI)

db = client.notesdb

notes_coll = db.notes


async def create_indexes():
    await notes_coll.create_index(
        "title",
        unique=True
    )


# CREATE
async def create_note(note_data: dict):

    try:
        result = await notes_coll.insert_one(note_data)
        return str(result.inserted_id)

    except DuplicateKeyError:
        return None


# RETRIEVE
async def get_all():

    notes = []

    cursor = notes_coll.find()

    async for note in cursor:
        note["_id"] = str(note["_id"])
        notes.append(note)

    return notes


async def get_one(note_id: str):

    try:
        oid = ObjectId(note_id)
    except Exception:
        return None

    note = await notes_coll.find_one(
        {"_id": oid}
    )

    if note:
        note["_id"] = str(note["_id"])

    return note


# UPDATE
async def update_note(
    note_id: str,
    updated_data: dict
):

    try:
        oid = ObjectId(note_id)
    except Exception:
        return 0

    result = await notes_coll.update_one(
        {"_id": oid},
        {"$set": updated_data}
    )

    return result.modified_count


# DELETE
async def delete_one(note_id: str):

    try:
        oid = ObjectId(note_id)
    except Exception:
        return 0

    result = await notes_coll.delete_one(
        {"_id": oid}
    )

    return result.deleted_count