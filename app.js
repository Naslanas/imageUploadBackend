const express = require('express');
const multer = require('multer');
const app = express();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Define the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Preserve original filename
  }
});

const upload = multer({ storage: storage });

// Define a route for file upload
app.post('/upload', upload.single('image'), (req, res) => {
  // Multer adds the file to the request object
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
