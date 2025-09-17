// Sample data for populating the portfolio database
// Run this script to add sample projects to your MongoDB database

const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Project Schema (should match your server/models/Project.js)
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  github: { type: String, required: true },
  live: { type: String, required: true },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

// Sample projects data
const sampleProjects = [
  {
    title: 'E-Commerce Platform (Laravel + React)',
    description: 'Full-stack e-commerce solution with Laravel backend, React frontend, MySQL database, and Stripe payment integration. Features include user authentication, admin dashboard, and inventory management.',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Laravel', 'React', 'MySQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Task Management System (MERN Stack)',
    description: 'Collaborative task management application built with MERN stack. Features real-time updates, team collaboration, progress tracking, and advanced filtering capabilities.',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Content Management System (Laravel)',
    description: 'Custom CMS built with Laravel featuring modular architecture, role-based permissions, media management, and SEO optimization. Perfect for content-heavy websites.',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Laravel', 'MySQL', 'Blade', 'jQuery', 'Bootstrap'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  },
  {
    title: 'Real-time Chat Application (Node.js + React)',
    description: 'Scalable chat application with real-time messaging, file sharing, user presence indicators, and message encryption. Built with modern web technologies.',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Business Analytics Dashboard (Laravel + Vue.js)',
    description: 'Comprehensive business intelligence dashboard with data visualization, automated reporting, and KPI tracking. Integrates with multiple data sources.',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'API'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  },
  {
    title: 'Social Media Platform (MERN Stack)',
    description: 'Full-featured social media platform with user profiles, posts, comments, likes, and real-time notifications. Includes advanced features like content moderation and analytics.',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  }
];

// Function to populate database
const populateDatabase = async () => {
  try {
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects...');

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`Successfully inserted ${insertedProjects.length} projects!`);

    // Display inserted projects
    console.log('\n📋 Inserted Projects:');
    insertedProjects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
      console.log(`   Technologies: ${project.technologies.join(', ')}`);
      console.log(`   Featured: ${project.featured ? 'Yes' : 'No'}\n`);
    });

  } catch (error) {
    console.error('Error populating database:', error);
  }
};

// Main execution
const runScript = async () => {
  await connectDB();
  await populateDatabase();

  console.log('\n🎉 Database populated successfully!');
  console.log('💡 You can now view your projects at: http://localhost:3001');
  console.log('🔗 API endpoints:');
  console.log('   - GET /api/projects (all projects)');
  console.log('   - GET /api/projects/featured (featured projects only)');

  process.exit(0);
};

// Run the script
runScript().catch(console.error);
