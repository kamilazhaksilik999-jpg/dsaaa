const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// In-memory data store (in production, use a proper database)
let profileData = {
  id: uuidv4(),
  name: 'Kamila Zhaksilik',
  bio: 'Passionate developer skilled in Java, HTML, CSS, and Python. I love creating innovative solutions and learning new technologies.',
  skills: ['Java', 'HTML', 'CSS', 'Python'],
  githubUrl: 'https://github.com/kamilazhaksilik999-jpg',
  photoUrl: 'https://i.pinimg.com/736x/bd/81/eb/bd81ebec260db5b5cdb38e7c506d2ba1.jpg',
  email: 'kamila.zhaksilik@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Kazakhstan',
  resumeUrl: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

// File upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Accept images and PDFs
    const allowedTypes = /jpeg|jpg|png|gif|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images (JPEG, PNG, GIF) and PDF files are allowed'));
    }
  }
});

// Validation schemas
const profileSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  bio: Joi.string().min(10).max(1000).required(),
  skills: Joi.array().items(Joi.string().min(1).max(50)).min(1).max(20),
  githubUrl: Joi.string().uri().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().pattern(/^[+]?[1-9][\d\s\-\(\)]{7,15}$/).optional(),
  location: Joi.string().max(100).optional()
});

// Routes

// Get profile data
app.get('/api/profile', (req, res) => {
  try {
    res.json({
      success: true,
      data: profileData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching profile data',
      error: error.message
    });
  }
});

// Update profile
app.put('/api/profile', (req, res) => {
  try {
    const { error, value } = profileSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }

    // Update profile data
    profileData = {
      ...profileData,
      ...value,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: profileData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating profile',
      error: error.message
    });
  }
});

// Upload photo
app.post('/api/upload/photo', upload.single('photo'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const photoUrl = `/uploads/${req.file.filename}`;
    profileData.photoUrl = photoUrl;
    profileData.updatedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'Photo uploaded successfully',
      photoUrl: photoUrl,
      data: profileData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error uploading photo',
      error: error.message
    });
  }
});

// Upload resume
app.post('/api/upload/resume', upload.single('resume'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const resumeUrl = `/uploads/${req.file.filename}`;
    profileData.resumeUrl = resumeUrl;
    profileData.updatedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'Resume uploaded successfully',
      resumeUrl: resumeUrl,
      data: profileData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error uploading resume',
      error: error.message
    });
  }
});

// Delete uploaded file
app.delete('/api/upload/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join('uploads', filename);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({
        success: true,
        message: 'File deleted successfully'
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'File not found'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting file',
      error: error.message
    });
  }
});

// Get profile stats (for dashboard)
app.get('/api/profile/stats', (req, res) => {
  try {
    const stats = {
      profileViews: Math.floor(Math.random() * 1000) + 100, // Mock data
      lastUpdated: profileData.updatedAt,
      skillsCount: profileData.skills.length,
      hasResume: !!profileData.resumeUrl,
      hasPhoto: !!profileData.photoUrl
    };

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stats',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size is 5MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Profile website: http://localhost:${PORT}`);
});

module.exports = app;