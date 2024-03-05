import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS'],
    })
);

type Data = {
    chapters: string[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await cors(req, res);

    res.json({ chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'] });
}
