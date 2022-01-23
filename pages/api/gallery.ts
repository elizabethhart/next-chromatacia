// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type SuccessResponse = {
  photoset: any;
};

type FailureResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | FailureResponse>
) {
  try {
    const response = await axios.get('https://www.flickr.com/services/rest/', {
      params: {
        method: 'flickr.photosets.getPhotos',
        photoset_id: '72157715844102541',
        extras: 'url_o',
        format: 'json',
        nojsoncallback: 1,
        api_key: process.env.REACT_APP_FLICKR_API_KEY,
      },
    });

    res.status(200).json({
      photoset: response.data.photoset.photo.map((photo: any) => ({
        url: photo.url_o,
        title: photo.title,
      })),
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
