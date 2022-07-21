import views from 'koa-views';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default views(path.join(__dirname, '../../views'), {
  map: { html: 'swig' }
})