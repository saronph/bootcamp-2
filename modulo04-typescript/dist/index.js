"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
/**
 * - É necessário a instalação do pacote de declaração do express
 * - Necessário passar configs, usar 'yarn tsc --init', usar 'yarn tsc' para
 * converter código para js, depois utilizar 'node src/index.js'
 * - Passar '"outDir": "./dist"' no tsconfig, deletar arquivo index.js do src
 */
var app = express_1.default();
app.get('/', function (request, response) {
    return response.json({ message: 'Hello Saron' });
});
app.listen(3333);
