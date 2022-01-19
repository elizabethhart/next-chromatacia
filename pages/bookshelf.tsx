import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import PageContent from './components/PageContent';

const Bookshelf: NextPage = () => {
  const { t } = useTranslation(['common']);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentBooks, setCurrentBooks] = useState<any[]>([]);
  const [recentBooks, setRecentBooks] = useState<any[]>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<any[]>([]);

  const fetchBookshelf = async () => {
    try {
      const {
        data: { current, past, favorites },
      } = await axios.get('/api/bookshelf');

      setCurrentBooks(current);
      setRecentBooks(past);
      setFavoriteBooks(favorites);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchBookshelf();
  });

  return (
    <PageContent>
      <div className="w-full flex flex-col content-center items-center">
        <h2>{t`goodreads-reviews`}</h2>
        <h3>
          Check out the books I'm reading on{' '}
          <a href="https://www.goodreads.com/user/show/89704524-liz-hart">
            Goodreads
          </a>
        </h3>
        {[
          { name: 'Current Reads', books: currentBooks },
          { name: 'Recent Reads', books: recentBooks },
          { name: 'Favorite Reads', books: favoriteBooks },
        ].map((shelf, index) => {
          return (
            <div className="max-h-40" key={index}>
              <h3>{shelf.name}</h3>
              <div className="flex flex-row max-w-lg overflow-scroll">
                {shelf.books.map((item: { book: any[] }) => {
                  const { title, image_url, authors } = item.book[0];
                  return (
                    <div
                      className="flex flex-col max-w-xs"
                      key={`${title}-${authors[0].author[0].name}`}
                    >
                      <img
                        className="object-scale-down max-h-32"
                        src={image_url}
                        alt={`${title} Image`}
                      />
                      <div className="text-ellipsis">
                        <p>{title}</p>
                        <p>{authors[0].author[0].name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </PageContent>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Bookshelf;
