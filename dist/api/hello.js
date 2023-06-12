"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(request, response) {
    const { name = "World" } = request.query;
    response.send(`Hello ${name}!`);
}
exports.default = default_1;
// import { VercelRequest, VercelResponse } from '@vercel/node';
// export default (req: VercelRequest, res: VercelResponse) => {
//   const name = req.query.name || 'World';
//   res.status(200).send(`Hello ${name}!`);
// };
