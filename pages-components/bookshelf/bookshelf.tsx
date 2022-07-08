import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import cx from 'classnames';

import { Shelf } from '../../types';

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
    <div className="w-full flex flex-col content-center items-center md:max-w-2xl relative mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full">
          <div className="w-full text-center mb-6">
            <h1 className="text-2xl">{t`goodreads-reviews`}</h1>
            <h2 className="text-lg">
              {t`bookshelf-header`}&nbsp;
              <a href="https://www.goodreads.com/user/show/89704524-liz-hart">
                Goodreads
              </a>
            </h2>
          </div>
          <div className="w-full flex flex-wrap">
            {shelves.map((shelf, index) => {
              return (
                <div key={index} className="mb-8 w-1/3">
                  <div className="w-full text-center mb-4">
                    <h3 className="text-xl font-semibold">{shelf.name}</h3>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {shelf.books.map((book) => {
                      return (
                        <div
                          className={cx(`p-1 md:p-2 w-1/${shelf.books.length}`)}
                        >
                          <a target="_blank" href={book.link} rel="noreferrer">
                            <img
                              alt={book.title[0]}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={book.imageUrl[0]}
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
