// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import axios from 'axios';
import { parseString } from 'xml2js';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// https://nextjs.org/docs/api-routes/api-middlewares#connectexpress-middleware-support
const runMiddleware = (req: any, res: any, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

/**
 * Parse XML response into JSON
 */
const parseXMLResponse = async (data: any) => {
  try {
    const parsed: {
      GoodreadsResponse: {
        reviews: { review: any[] }[];
      };
    } = await new Promise((resolve, reject) =>
      parseString(data, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
    );

    return parsed;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get books from my Goodreads shelves
 * https://www.goodreads.com/api/index#reviews.list
 */
const getGoodreadsData = async (additionalParams: { shelf: string }) => {
  try {
    const response = await axios.get(
      'https://www.goodreads.com/review/list/89704524.xml',
      {
        params: {
          key: process.env.REACT_APP_GOODREADS_API_KEY,
          v: 2,
          per_page: 10,
          sort: 'date_read',
          ...additionalParams,
        },
      }
    );

    const parsedResponse = await parseXMLResponse(response.data);

    return parsedResponse?.GoodreadsResponse.reviews[0].review.map((item) => {
      const book = item.book[0];
      return {
        title: book.title,
        imageUrl: book.image_url,
        authors: book.authors[0].author,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

type SuccessResponse = {
  current?: any[];
  past?: any[];
  favorites?: any[];
};

type FailureResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | FailureResponse>
) {
  try {
    // Run the middleware
    await runMiddleware(req, res, cors);

    if (req.method === 'GET') {
      const [current, past, favorites] = await Promise.all([
        getGoodreadsData({ shelf: 'currently-reading' }),
        getGoodreadsData({ shelf: 'read' }),
        getGoodreadsData({ shelf: 'favorites' }),
      ]);

      res.status(200).json({ current, past, favorites });
    } else {
      return res.status(404).json({ message: 'Looking for something?' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
