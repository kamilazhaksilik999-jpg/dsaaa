# Personal Profile Website

A modern, responsive personal profile website built with HTML, CSS, JavaScript, and Node.js. This project showcases a complete web development solution with CRUD functionality, file uploads, and a professional design.

## 🌟 Features

- **Responsive Design**: Modern, mobile-first design that works on all devices
- **Profile Management**: Full CRUD operations for user profile data
- **File Uploads**: Support for profile photos and PDF resume uploads
- **Form Validation**: Client-side and server-side validation
- **API Integration**: RESTful API for data management
- **Real-time Updates**: Dynamic content updates without page refresh
- **Professional Styling**: Clean, modern interface with smooth animations

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Validation**: Joi for server-side validation
- **File Handling**: Multer for file uploads
- **API**: RESTful API design

## 📁 Project Structure

```
personal-profile-website/
├── public/
│   ├── index.html          # Main profile page
│   ├── styles.css          # CSS styling
│   ├── script.js           # JavaScript functionality
│   ├── resume.html         # Resume template
│   └── uploads/            # Uploaded files directory
├── server.js               # Main server file
├── package.json            # Node.js dependencies
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamilazhaksilik999-jpg/personal-profile-website.git
   cd personal-profile-website
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

### Production Setup

```bash
# Start production server
npm start
```

## 📖 API Documentation

### Endpoints

#### Profile Management
- `GET /api/profile` - Get current profile data
- `PUT /api/profile` - Update profile information
- `GET /api/profile/stats` - Get profile statistics

#### File Uploads
- `POST /api/upload/photo` - Upload profile photo
- `POST /api/upload/resume` - Upload PDF resume
- `DELETE /api/upload/:filename` - Delete uploaded file

#### Utility
- `GET /api/health` - Health check endpoint

### Sample API Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Kamila Zhaksilik",
    "bio": "Passionate developer...",
    "skills": ["Java", "HTML", "CSS", "Python"],
    "githubUrl": "https://github.com/kamilazhaksilik999-jpg",
    "email": "kamila.zhaksilik@example.com",
    "photoUrl": "/uploads/photo.jpg",
    "resumeUrl": "/uploads/resume.pdf"
  }
}
```

## 🎨 Design Features

### Color Scheme
- Primary: #2563EB (Professional Blue)
- Neutral: #F8F9FA to #111827
- Success: #10B981
- Error: #EF4444

### Typography
- Font Family: Inter (Google Fonts)
- Responsive text scaling
- WCAG AA compliant contrast ratios

### Components
- Modern card-based layout
- Smooth hover animations
- Form validation with real-time feedback
- Toast notifications for user feedback
- Loading spinners for better UX

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout, touch-friendly controls
- **Desktop**: ≥ 768px - Multi-column layout, hover effects enabled
- **Flexible**: Adapts seamlessly across all screen sizes

## 🔧 Configuration

### Environment Variables
```bash
PORT=3000                    # Server port
NODE_ENV=development         # Environment mode
```

### File Upload Limits
- Maximum file size: 5MB
- Allowed image types: JPEG, PNG, GIF
- Allowed document type: PDF

## 🧪 Testing

The application includes comprehensive validation:
- Client-side form validation
- Server-side data validation with Joi
- File type and size validation
- Error handling and user feedback

## 🚀 Deployment

### Manual Deployment
1. Build the project for production
2. Set environment variables
3. Start the server with PM2 or similar process manager

### Platform Recommendations
- **Heroku**: Easy deployment with git push
- **Vercel**: Serverless deployment option
- **DigitalOcean**: VPS deployment with Docker
- **AWS**: Scalable cloud deployment

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- File type validation
- Size limit enforcement
- Input sanitization
- XSS protection

## 📈 Performance Optimizations

- Efficient CSS with minimal overhead
- Lazy loading for images
- Compressed API responses
- Static file caching
- Minimal JavaScript bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Kamila Zhaksilik**
- GitHub: [@kamilazhaksilik999-jpg](https://github.com/kamilazhaksilik999-jpg)
- Email: kamila.zhaksilik@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Font Awesome for icons
- Google Fonts for typography
- Inter font family for excellent readability

## 📞 Support

For questions or support, please:
1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub
4. Contact via email

## 🔄 Changelog

### Version 1.0.0 (December 2024)
- Initial release
- Complete profile management system
- File upload functionality
- Responsive design implementation
- API documentation
- GitHub integration

---

*This README was generated as part of the personal profile website project. For the live version, visit the deployed application or check out the source code on GitHub.*