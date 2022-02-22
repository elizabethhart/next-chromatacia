import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'next-i18next';

import Spinner from '../../components/Spinner';
import Carousel from '../../components/Carousel';

export const Gallery: FC = () => {
  const { t } = useTranslation(['common']);
  const [loading, setLoading] = useState<boolean>(true);
  const [photoset, setPhotoset] = useState<any[]>([]);

  const fetchGallery = async () => {
    try {
      const {
        data: { photoset },
      } = await axios.get('/api/gallery');

      setPhotoset(photoset);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchGallery();
  }, []);

  return (
    <div className="w-full flex flex-col content-center items-center">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="w-full text-center mb-6">
            <h1 className="text-2xl">{t`digital-art`}</h1>
          </div>
          <div className="w-full flex flex-row justify-center">
            <Carousel
              slides={photoset.map((photo) => {
                return {
                  image: photo.url,
                  altText: photo.title,
                };
              })}
            />
          </div>
        </>
      )}
    </div>
  );
};
