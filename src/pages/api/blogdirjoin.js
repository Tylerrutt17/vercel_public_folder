import { existsSync, promises as fsPromises } from 'fs';
import { resolve, join } from 'path';

export default async function handler(req, res) {
    // Define the path to the file in the public directory
    const filePathJoin = join(process.cwd(), 'public', 'blog', 'random.mdx');

    // Use filePathResolve or filePathJoin based on your preference
    const filePath = filePathJoin; // or filePathJoin

    // Check if the file exists
    if (existsSync(filePath)) {
        try {
            // Read the file contents asynchronously
            const fileContents = await fsPromises.readFile(filePath, 'utf8');
            res.status(200).json({ message: `File exists:`, content: fileContents });
        } catch (error) {
            // Handle potential errors during file reading
            res.status(500).json({ message: `Error reading file: ${error.message}` });
        }
    } else {
        res.status(404).json({ message: `File does not exist` });
    }
}