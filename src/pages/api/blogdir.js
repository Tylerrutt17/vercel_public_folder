import { existsSync } from 'fs';
import { resolve } from 'path';

export default function handler(req, res) {
    // Retrieve the filename from the query string
    // const { filename } = req.query;
  
    // Define the path to the file in the public directory
    const filePath = resolve(process.cwd(), 'public', "blog", 'random.mdx');
  
    // Check if the file exists
    if (existsSync(filePath)) {
      res.status(200).json({ message: `File exists:` });
    } else {
      res.status(404).json({ message: `File does not exist` });
    }
}