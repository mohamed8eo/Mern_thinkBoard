# MERN Stack Note Taking App

**Live Demo:** [https://thinkboard.up.railway.app/](https://thinkboard.up.railway.app/)

---

## Screenshots

### Homepage
![Homepage Screenshot]
![image](https://github.com/user-attachments/assets/bbb2a262-ee6f-41e5-89c3-b329f81494c6)

*The homepage displays all your notes in a clean, card-based layout. You can view, edit, or delete notes, and create a new note using the green button at the top right.*

### Create Note Page
![Create Note Page Screenshot]
![image](https://github.com/user-attachments/assets/5f31c29a-e9b0-4e69-88b3-eeabfe546001)

*The create note page allows you to add a new note by entering a title and content. After filling out the form, click "Create Note" to save your note.*

### Update Note Page
![Update Note Page Screenshot]
![image](https://github.com/user-attachments/assets/6e8db7ce-82d4-42ac-8a61-94f591011c25)

*The update note page lets you edit the title and content of an existing note. You can save your changes or delete the note using the buttons provided.*

A full-stack Note Taking application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, view, update, and delete notes, with rate limiting and a modern UI.

---

## Features
- Create, read, update, and delete notes
- Rate limiting to prevent abuse
- Responsive and modern React frontend
- RESTful API backend with Express
- MongoDB for persistent storage
- Environment variable support
- Production-ready build and static file serving

---

## Folder Structure
```
mern_Stack_Todo/
  Backend/        # Express API backend
    src/
      config/     # Database and rate limiter config
      Controllers/# Note controller logic
      middleware/ # Rate limiting middleware
      models/     # Mongoose Note model
      routes/     # API route definitions
      server.js   # Main server entry point
    package.json  # Backend dependencies
  Client/         # React frontend
    src/
      components/ # Reusable UI components
      lib/        # Axios and utilities
      pages/      # App pages
      App.jsx     # Main app component
      main.jsx    # Entry point
    public/       # Static assets
    package.json  # Frontend dependencies
  package.json    # (root, optional)
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or v20 recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd mern_Stack_Todo
```

### 2. Setup Backend
```bash
cd Backend
npm install
# Create a .env file with the following variables:
# MONGODB_URI=<your-mongodb-uri>
# PORT=3000
npm start
```

### 3. Setup Frontend
```bash
cd ../Client
npm install
npm run dev # For development
# or
npm run build # For production build
```

### 4. Environment Variables
- **Backend**: Create a `.env` file in `Backend/` with:
  - `MONGODB_URI` - Your MongoDB connection string
  - `PORT` - Port for the backend server (default: 3000)
- **Frontend**: If your backend is deployed, set the API base URL in `Client/src/lib/axios.js` or as an environment variable (e.g., `VITE_API_URL`)

---

## Deployment

### Frontend (React)
- Deploy the `Client` folder to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
- Set the API base URL to your deployed backend.

### Backend (Express API)
- Deploy the `Backend` folder to [Render](https://render.com/), [Railway](https://railway.app/), [Fly.io](https://fly.io), or similar.
- Set environment variables in your deployment dashboard.

### Database
- Use [MongoDB Atlas](https://www.mongodb.com/atlas) for a free cloud MongoDB database.

---

## API Endpoints
- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a note by ID
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

---

## Credits
- Built with [Express](https://expressjs.com/), [React](https://react.dev/), [MongoDB](https://mongodb.com/), [Mongoose](https://mongoosejs.com/), [Vite](https://vitejs.dev/)
- Rate limiting via [@upstash/ratelimit](https://www.npmjs.com/package/@upstash/ratelimit)

---

## License
This project is open source and available under the [MIT License](LICENSE). 
