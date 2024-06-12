// src/pages/api/upload.js
import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), '/public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Handler usando next-connect para manejar las rutas
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.fields([{ name: 'videoFile' }, { name: 'thumbnailFile' }]));

apiRoute.post((req, res) => {
  res.status(200).json({ 
    message: 'Archivos subidos con éxito',
    files: req.files 
  });
});

// Exportar la ruta
export default apiRoute;
