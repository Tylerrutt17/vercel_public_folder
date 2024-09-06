import fs from 'fs';
import path from 'path';

function listDirectories(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            allFiles.push(name);
            listDirectories(name, allFiles);  // Recursively list directories
        } else {
            allFiles.push(name);  // Optionally list files
        }
    });
    return allFiles;
}

export default function handler(req, res) {
    try {
        const basePath = process.cwd();  // Adjust this if necessary
        const directoriesAndFiles = listDirectories(basePath);
        res.status(200).json({ paths: directoriesAndFiles });
    } catch (error) {
        res.status(500).json({ error: 'Failed to list directories', message: error.message });
    }
}