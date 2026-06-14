import axios from "axios";

const BASE_URL = "http://localhost:8000/api/notes";

const api = axios.create({
    baseURL : BASE_URL,
});

export async function getAllNotes(){
    const res = await api.get("/")
    return res.data;
}

export async function getNote(id){
    try{
        const res = api.get(`/${id}`);
        return (await res).data;
    } catch (err) {
        console.log(err);
        throw new Error("Note not found");
    }
}

export async function createNote(note){
    try{
        const res = await api.post("/", note);
        return res.data;
    } catch (err) {
        throw new Error("Title already in use");
    }
}

export async function updateNote(id, note){
    try{
        const res = await api.put(`/${id}`, note);
        return res.data;
    } catch (err) {
        throw new Error("Note note found")
    }
}

export async function deleteNote(id){
    try{
        const res = await api.delete(`/${id}`)
        return res.data;
    } catch (err){
        throw new Error("Note not found")
    }
}