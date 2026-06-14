# NotesApp

A full-stack Notes Application built using the FARM stack:

- **FastAPI** (Backend API)
- **React** (Frontend UI)
- **MongoDB Atlas** (Database)
- **Motor** (Async MongoDB Driver)

## Features

- Create notes
- View all notes
- View individual notes
- Update existing notes
- Delete notes
- MongoDB Atlas integration
- Async FastAPI backend
- React frontend with Axios API calls
- CORS-enabled API communication

---

## Tech Stack

### Backend
- FastAPI
- Motor
- MongoDB Atlas
- Python
- Uvicorn
- Pydantic

### Frontend
- React
- Vite
- Axios

### Database
- MongoDB Atlas

---

## Project Structure

```text
NotesApp/
│
├── backend/
│   ├── routes/
│   ├── database.py
│   ├── model.py
│   ├── main.py
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/NotesApp.git
cd NotesApp
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install fastapi uvicorn motor python-dotenv pymongo
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

Swagger Docs:

```text
http://localhost:8000/docs
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## API Endpoints

### Get All Notes

```http
GET /api/notes
```

### Get Note By ID

```http
GET /api/notes/{id}
```

### Create Note

```http
POST /api/notes
```

Request Body:

```json
{
  "title": "Gym",
  "content": "Need to work on core"
}
```

### Update Note

```http
PUT /api/notes/{id}
```

### Delete Note

```http
DELETE /api/notes/{id}
```

---

## Database

MongoDB Atlas is used as the cloud database.

Each note is stored in the following format:

```json
{
  "_id": "ObjectId",
  "title": "Gym",
  "content": "Need to work on core"
}
```

---

## Future Improvements

- User authentication
- User-specific notes
- Search functionality
- Categories and tags
- Rich text editor
- Dark mode
- Deployment to Render/Vercel

---

## Author

Sarvesh Sundar

GitHub: https://github.com/S-Sarvesh
