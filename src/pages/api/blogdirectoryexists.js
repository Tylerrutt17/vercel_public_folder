const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    // Retrieve the filename from the query string
    const { filename } = req.query;
  
    // Define the path to the file in the public directory
    const filePath = path.resolve(process.cwd(), 'public', "blog", filename);
  
    // Check if the file exists
    if (existsSync(filePath)) {
      res.status(200).json({ message: `File exists: ${filename}` });
    } else {
      res.status(404).json({ message: `File does not exist: ${filename}` });
    }
  }