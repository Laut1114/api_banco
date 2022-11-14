import { Router } from 'express';
import { subirArchivo, updateImage, getImage } from '../controllers/uploads.controller';

const route = Router();

route.post('/', subirArchivo);

route.get('/:id:username', getImage);

route.put('/updateAvatar/:username', updateImage);

module.exports = route;