# Contact Manager - MERN Stack Application

A full-stack contact management web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that demonstrates fundamental concepts of modern web development.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete contacts
- **Form Validation**: Client-side and server-side validation for contact data
- **Responsive Design**: Mobile-friendly interface with modern UI
- **Real-time Updates**: Instant UI updates after database operations
- **Error Handling**: Comprehensive error handling and user feedback
- **Modern UI**: Clean, professional interface with smooth animations

## Technology Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling for Node.js
- **CORS**: Cross-Origin Resource Sharing support
- **dotenv**: Environment variable management

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Hooks**: useState, useEffect for state management
- **CSS3**: Modern styling with responsive design
- **Fetch API**: For HTTP requests to the backend

## Project Structure

```
contact-manager/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── server.js
│   └── .env
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactList.js
│   │   │   └── ContactForm.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

Before running this application, ensure you have the following installed:

1. **Node.js** (v14 or higher)
2. **npm** (comes with Node.js)
3. **MongoDB** (installed and running on your system)

### Installation Steps

1. **Clone or download the project** to your local machine

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**:
   - Navigate to the `backend` directory
   - Open the `.env` file and ensure the MongoDB URI is correct:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/contactmanager
     ```

### Running the Application

1. **Start MongoDB** (if not already running):
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   # or
   mongod
   ```

2. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

3. **Start the frontend development server** (in a new terminal):
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Using the Application

1. Open your browser and navigate to `http://localhost:3000`
2. You'll see the Contact Manager interface
3. Click "Add New Contact" to create your first contact
4. Use the Edit and Delete buttons on each contact card to manage them

## API Endpoints

The backend provides the following REST API endpoints:

### Contacts
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get a single contact by ID
- `POST /api/contacts` - Create a new contact
- `PUT /api/contacts/:id` - Update an existing contact
- `DELETE /api/contacts/:id` - Delete a contact

### Contact Data Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  address: String (optional),
  createdAt: Date (auto-generated)
}
```

## Development

### Backend Development

To run the backend in development mode with automatic restarts:

```bash
cd backend
npm run dev
```

### Frontend Development

The frontend runs in development mode by default with hot reloading:

```bash
cd frontend
npm start
```

### Building for Production

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running
   - Check the MongoDB URI in the `.env` file
   - Verify MongoDB is installed correctly

2. **Port Already in Use**:
   - Change the PORT in the `.env` file
   - Kill the process using the port

3. **CORS Issues**:
   - The backend is configured to allow requests from `http://localhost:3000`
   - If running on a different port, update the CORS configuration in `server.js`

4. **Dependencies Not Found**:
   - Run `npm install` in both backend and frontend directories
   - Clear npm cache if needed: `npm cache clean --force`

## Learning Outcomes

This project demonstrates:

- **MERN Stack Integration**: How MongoDB, Express, React, and Node.js work together
- **RESTful API Design**: Creating and consuming REST APIs
- **Database Operations**: CRUD operations with MongoDB and Mongoose
- **Component-Based Architecture**: Building reusable React components
- **State Management**: Using React Hooks for local state management
- **Form Handling**: Controlled components and form validation
- **Responsive Design**: CSS Grid and Flexbox for responsive layouts
- **Error Handling**: Both client-side and server-side error handling
- **Modern JavaScript**: ES6+ features and async/await patterns

## Future Enhancements

Potential features to add:

- User authentication and authorization
- Search and filter functionality
- Contact groups/categories
- Export contacts to CSV/JSON
- Profile pictures for contacts
- Phone number formatting
- Address autocomplete
- Bulk operations
- Data visualization dashboard

## License

This project is open source and available under the MIT License.
