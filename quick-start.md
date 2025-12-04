# 🚀 Quick Start Guide

## Personal Profile Website - Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git (for cloning the repository)

### Installation Steps

1. **Navigate to project directory**
   ```bash
   cd /workspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

### Project Features Overview

✅ **Frontend Components Created:**
- Modern responsive profile page
- Interactive form for profile editing
- File upload functionality for photos and resume
- Real-time validation and error handling
- Professional design with smooth animations
- PWA capabilities with service worker

✅ **Backend API Created:**
- RESTful API with CRUD operations
- File upload handling with multer
- Data validation with Joi
- Error handling and security headers
- Health check endpoints
- Profile statistics API

✅ **Additional Features:**
- PDF resume generation and download
- GitHub integration
- Mobile-responsive design
- Loading states and user feedback
- Toast notifications
- Offline functionality (PWA)

### File Structure
```
/workspace/
├── package.json           # Dependencies and scripts
├── server.js              # Main server file
├── README.md              # Project documentation
├── quick-start.md         # This file
└── public/
    ├── index.html         # Main profile page
    ├── styles.css         # Styling
    ├── script.js          # JavaScript functionality
    ├── resume.html        # Resume template
    ├── sw.js             # Service worker
    ├── manifest.json     # PWA manifest
    └── uploads/          # Upload directory (auto-created)
```

### API Endpoints

- `GET /api/profile` - Get profile data
- `PUT /api/profile` - Update profile
- `POST /api/upload/photo` - Upload profile photo
- `POST /api/upload/resume` - Upload PDF resume
- `GET /api/profile/stats` - Get profile statistics
- `GET /api/health` - Health check

### Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Backend:** Node.js, Express.js
- **Validation:** Joi
- **File Handling:** Multer
- **Styling:** Custom CSS with modern features
- **PWA:** Service Worker, Web App Manifest

### Production Deployment

For production deployment, consider:
1. Setting up environment variables
2. Using a process manager (PM2)
3. Configuring a reverse proxy (Nginx)
4. Setting up SSL certificates
5. Using a cloud database instead of file storage

### Troubleshooting

**Port already in use:**
```bash
PORT=3001 npm start
```

**Module not found errors:**
```bash
npm install
```

**File upload issues:**
- Ensure the `uploads/` directory exists
- Check file size limits (5MB max)
- Verify file types (images/PDF only)

### Next Steps

1. Customize the profile content in `public/index.html`
2. Update the resume in `public/resume.html`
3. Modify the color scheme in `public/styles.css`
4. Deploy to your preferred hosting platform
5. Set up a custom domain

---

**Created by:** MiniMax Agent  
**Date:** December 2024  
**Version:** 1.0.0