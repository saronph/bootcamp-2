import express from 'express';
import { helloWorld } from './routes';

/**
 * - É necessário a instalação do pacote de declaração do express
 * - Necessário passar configs, usar 'yarn tsc --init', usar 'yarn tsc' para
 * converter código para js, depois utilizar 'node src/index.js'
 * - Passar '"outDir": "./dist"' no tsconfig, deletar arquivo index.js do src
 * - Usar 'yarn tsc' novamente para criar aquivo no novo dir
 */

const app = express();

app.get('/', helloWorld);

app.listen(3333);