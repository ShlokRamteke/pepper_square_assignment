# School Website

This project is a assignment. I have deployed the Strapi backend to strapi cloud and uses the api genrated. If the backend is run locally, the images will not load as the url in the uploads folder in backend. However deployed URLs work.

Also the Header and Footer links redirect however their corresponding pages are not created.

## Technologies Used

- Frontend:
  - React.js
  - React Router for navigation
  - Axios for API requests
  - Tailwind CSS for styling
- Backend:
  - Strapi (Headless CMS)
  - Node.js
- Database:
  - SQLite (default for Strapi, can be changed)

## Project Structure

```
dbtr-school-website/
├── backend/                 # Strapi backend
│   ├── api/
│   ├── config/
│   └── ...
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── main.js
│   └── package.json
└── README.md
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/ShlokRamteke/pepper_square_assignment.git
   cd pepper_square_assignment
   ```

2. Install backend dependencies and start the Strapi server:

   ```
   cd backend
   npm install
   npm run develop
   ```

3. In a new terminal, install frontend dependencies and start the React app:

   ```
   cd ../frontend
   npm install
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the website.

## Usage

- Access the Strapi admin panel at `http://localhost:1337/admin`
- Create and manage events, pages, and other content through the Strapi CMS
- The React frontend will automatically fetch and display the latest content

## API Endpoints

- GET `/api/events`: Fetch all events
