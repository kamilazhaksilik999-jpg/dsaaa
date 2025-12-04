// Simple static server without external dependencies
const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = process.env.PORT || 3000;

// MIME types mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.ico': 'image/x-icon'
};

// Simple file server
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Serve index.html for root requests
    let filePath = req.url === '/' ? '/public/index.html' : req.url;
    
    // Add public prefix if not already there
    if (!filePath.startsWith('/public/')) {
        filePath = '/public' + filePath;
    }
    
    const fullPath = path.join(__dirname, filePath);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
    }
    
    // Get file extension and set content type
    const ext = path.extname(fullPath);
    const contentType = mimeTypes[ext] || 'text/plain';
    
    // Read and serve file
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal server error');
            return;
        }
        
        res.writeHead(200, { 
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=3600'
        });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
    console.log(`Profile Website: http://localhost:${PORT}/public/index.html`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});