import {NextApiRequest, NextApiResponse} from 'next';
import jwt from 'jsonwebtoken';

const KEY = '1212';

export default function(request: NextApiRequest, response: NextApiResponse) {
  if (!request.body) {
    response.statusCode = 404;
    response.end('Error');

    return;
  }

  const {username, password} = request.body;

  response.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, KEY)
  });
}

