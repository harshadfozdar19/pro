/* Complete MERN Stack Portfolio Website */

/*--- Frontend: React App ---*/

// Directory: client

// 1. Install dependencies
// npm install react react-dom react-router-dom axios

// 2. App Structure:
// - src
//   - components
//     - Navbar.js
//     - Home.js
//     - About.js
//     - Projects.js
//     - Contact.js
//   - App.js
//   - index.js

// Example Code: Navbar Component (src/components/Navbar.js)
import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;

// Example Code: Home Component (src/components/Home.js)
import React from 'react';
import './Home.css';

const Home = () => (
  <div id="home" className="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Your journey starts here!</p>
  </div>
);

export default Home;

// Example Code: About Component (src/components/About.js)
import React from 'react';
import './About.css';

const About = () => (
  <div id="about" className="about">
    <h2>About Me</h2>
    <p>I am a Computer Science student with a passion for web development and machine learning. I have experience in Python, C++, React, and more.</p>
  </div>
);

export default About;

// Example Code: Projects Component (src/components/Projects.js)
import React from 'react';
import './Projects.css';

const Projects = () => (
  <div id="projects" className="projects">
    <h2>Projects</h2>
    <ul>
      <li><strong>Object Detection:</strong> Using YOLOv5 and Tkinter for object detection.</li>
      <li><strong>CV Extractor:</strong> A tool for extracting and analyzing CV data.</li>
      <li><strong>Avalanche Prediction:</strong> Machine learning model for predicting avalanches.</li>
    </ul>
  </div>
);

export default Projects;

// Example Code: Contact Component (src/components/Contact.js)
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', formData);
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message.');
    }
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

// App.js (src/App.js)
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default App;

// Index.js (src/index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

/*--- Backend: Node/Express Server ---*/

// Directory: server

// Install dependencies
// npm install express mongoose cors body-parser dotenv

// Server Setup (server.js)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/contact', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).send('Message Sent!');
  } catch (error) {
    res.status(500).send('Error sending message.');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

/*--- Database: MongoDB ---*/

// Use MongoDB Atlas or a local MongoDB instance.
// Store the connection string in a .env file as MONGO_URI.

/*--- Deployment Instructions ---*/

1. **Frontend:**
   - Build the React app using `npm run build`.
   - Deploy using platforms like Netlify or Vercel.

2. **Backend:**
   - Deploy the server using Heroku or Render.
   - Ensure the MongoDB Atlas database is connected securely.

3. **Integration:**
   - Update the React app's API endpoints to match the deployed backend's URL.

/*--- Additional Notes ---*/

- Ensure your site is responsive with CSS media queries.
- Add animations using libraries like Animate.css or Framer Motion.
- Optimize the website for SEO by adding meta tags and descriptions in the React app's public/index.html file.
- Test the contact form after deployment to confirm the backend integration is functional.
