from fastapi import APIRouter, HTTPException

from model import Note

from database import (
    create_note,
    get_all,
    get_one,
    update_note,
    delete_one
)

router = APIRouter(
    prefix="/api/notes",
    tags=["notes"]
)


@router.get("/")
async def fetch_all_notes():
    return await get_all()


@router.get("/{note_id}")
async def fetch_note(note_id: str):

    response = await get_one(note_id)

    if response:
        return response

    raise HTTPException(
        status_code=404,
        detail="Note not found"
    )


@router.post("/")
async def add_note(note: Note):

    response = await create_note(
        note.model_dump()
    )

    if response is None:
        raise HTTPException(
            status_code=400,
            detail="Title already exists"
        )

    return {
        "message": "created"
    }


@router.put("/{note_id}")
async def edit_note(
    note_id: str,
    note: Note
):

    response = await update_note(
        note_id,
        note.model_dump()
    )

    if response:
        return {
            "message": "updated"
        }

    raise HTTPException(
        status_code=404,
        detail="Note not found"
    )


@router.delete("/{note_id}")
async def remove_note(note_id: str):

    response = await delete_one(note_id)

    if response:
        return {
            "message": "deleted"
        }

    raise HTTPException(
        status_code=404,
        detail="Note not found"
    )
