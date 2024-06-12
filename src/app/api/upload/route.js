// src/app/api/upload/route.js
import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
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

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.fields([{ name: 'videoFile' }, { name: 'thumbnailFile' }]));

apiRoute.post((req, res) => {
  res.status(200).json({
    message: 'Archivos subidos con éxito',
    files: req.files,
  });
});

export { apiRoute as GET, apiRoute as POST }; // Exportar los métodos GET y POST
