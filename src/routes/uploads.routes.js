import { Router } from "express";
import { getImage, subirArchivo, updateImage } from '../controllers/uploads.controller';

const router = Router();

router.get('/:id:username', getImage);

router.post('/', subirArchivo);

router.put('/updAvatar/:username', updateImage);

module.exports = router;