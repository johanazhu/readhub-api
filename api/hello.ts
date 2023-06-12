import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (request: VercelRequest, response: VercelResponse) {
  const { name = "World" } = request.query;
  response.send(`Hello ${name}!`);
}

// import { VercelRequest, VercelResponse } from '@vercel/node';

// export default (req: VercelRequest, res: VercelResponse) => {
//   const name = req.query.name || 'World';
//   res.status(200).send(`Hello ${name}!`);
// };
