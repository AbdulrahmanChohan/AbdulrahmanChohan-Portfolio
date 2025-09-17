# Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing expertise in **Laravel**, **React**, **Node.js**, and **MERN Stack** development. Built with the MERN stack and featuring a clean, professional design.

## 🛠️ Tech Stack Expertise

### **Laravel & PHP**
- MVC Architecture
- Eloquent ORM
- Blade Templating
- RESTful APIs
- Authentication & Authorization
- Database Management (MySQL)

### **React & Frontend**
- Modern React Development
- State Management
- Component Architecture
- Responsive Design
- UI/UX Best Practices

### **Node.js & Backend**
- Express.js Applications
- RESTful API Development
- Authentication & Security
- Database Integration
- Real-time Applications

### **MERN Stack**
- MongoDB Integration
- Express.js Servers
- React Applications
- Node.js Runtime
- Full-stack JavaScript

## 🚀 Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly navigation
- 🚀 Smooth scrolling between sections
- 💼 Project showcase with technology tags
- 📊 Skills visualization with progress bars
- 📧 Contact form with backend integration
- 🔄 Dynamic content loading from MongoDB
- ⚡ Fast loading and optimized performance

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly navigation
- 🚀 Smooth scrolling between sections
- 💼 Project showcase with technology tags
- 📊 Skills visualization with progress bars
- 📧 Contact form with backend integration
- 🔄 Dynamic content loading from MongoDB
- ⚡ Fast loading and optimized performance

## Tech Stack

### Frontend
- React 19
- Tailwind CSS
- React Router (for future expansion)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd full_stack
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   The server already has a `.env` file with MongoDB connection. If you need to change it:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Start the development servers**

   **Terminal 1 - Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Start the frontend:**
   ```bash
   cd client
   npm start
   ```

6. **Open your browser**

   Navigate to `http://localhost:3000` to view your portfolio!

## Project Structure

```
full_stack/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── sections/      # Section components
│   │   ├── services/      # API service functions
│   │   └── App.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json
└── README.md
```

## Customization

### Personal Information

1. **Update Hero Section** (`client/src/sections/Hero.js`):
   - Change your name, title, and description
   - Replace the placeholder profile image

2. **Update About Section** (`client/src/sections/About.js`):
   - Modify your personal story and experience
   - Update education and background information

3. **Update Contact Information** (`client/src/sections/Contact.js`):
   - Add your real email, phone, and location
   - Update social media links

### Projects

The projects are loaded dynamically from the MongoDB database. You can:

1. **Add projects via API** or
2. **Update the Projects component** to use static data

To add projects programmatically, you can use tools like Postman to make POST requests to `/api/projects`.

### Skills

Update the skills in `client/src/sections/Skills.js`:
- Modify skill names and proficiency levels
- Add or remove skill categories

### Styling

The design uses Tailwind CSS classes. You can:
- Modify colors by changing the Tailwind classes
- Adjust spacing and layout
- Add custom CSS in `client/src/App.css`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Send contact message
- `PUT /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete contact message

## Deployment

### Frontend (React)
```bash
cd client
npm run build
```
Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

### Backend (Node.js)
Deploy to services like Heroku, DigitalOcean, AWS, etc.

### Database
- Use MongoDB Atlas for cloud database
- Update the `MONGO_URI` in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing or deploying your portfolio, feel free to reach out!

---

Built with ❤️ using MERN Stack
