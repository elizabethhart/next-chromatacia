import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

import { Shelf } from '../../types';

import Carousel from '../../components/Carousel';
import Spinner from '../../components/Spinner';

export const Bookshelf: FC = () => {
  const { t } = useTranslation(['common']);
  const [loading, setLoading] = useState<boolean>(true);
  const [shelves, setShelves] = useState<Shelf[]>([]);

  const fetchBookshelf = async () => {
    try {
      const {
        data: { current, past, favorites },
      } = await axios.get('/api/bookshelf');

      setShelves([
        { name: t`reading`, books: current },
        { name: t`just-finished`, books: past },
        { name: t`favorites`, books: favorites },
      ]);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchBookshelf();
  }, []);

  return (
    <div className="w-full flex flex-col content-center items-center">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="w-full text-center mb-6">
            <h1 className="text-2xl">{t`goodreads-reviews`}</h1>
            <h2 className="text-lg">
              Check out the books I'm reading on{' '}
              <a href="https://www.goodreads.com/user/show/89704524-liz-hart">
                Goodreads
              </a>
            </h2>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between">
            {shelves.map((shelf, index) => {
              return (
                <div key={index}>
                  <div className="w-full text-center mb-6">
                    <h3>{shelf.name}</h3>
                  </div>
                  <div className="w-full flex flex-row justify-center">
                    <Carousel
                      slides={shelf.books.map((book) => {
                        return {
                          image: book.imageUrl,
                          title: book.title,
                          subTitle: book.authors
                            .map((author) => author.name)
                            .join(', '),
                          altText: book.title,
                        };
                      })}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
