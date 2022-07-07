import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import cx from 'classnames';
import Modal from 'react-modal';

import Spinner from '../../components/Spinner';
import { FaRegTimesCircle } from 'react-icons/fa';

export const Gallery: FC = () => {
  const { t } = useTranslation(['common']);
  const [loading, setLoading] = useState<boolean>(true);
  const [photoset, setPhotoset] = useState<any[]>([]);
  const [photoChunks, setPhotochunks] = useState<any[]>([]);
  const [photo, setPhoto] = useState<any>();

  const fetchGallery = async () => {
    try {
      const {
        data: { photoset },
      } = await axios.get('/api/gallery');

      setPhotoset(photoset.reverse());
      console.log(photoset);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchGallery();
  }, []);

  useEffect(() => {
    var arrays = [],
      size = 3;

    while (photoset.length > 0) {
      arrays.push(photoset.splice(0, size));
    }

    console.log(arrays);
    setPhotochunks(arrays);
  }, [photoset]);

  const style = {
    content: {
      border: '0',
      borderRadius: '4px',
      bottom: 'auto',
      left: '50%',
      padding: '2rem',
      position: 'fixed',
      right: 'auto',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: '40%',
      maxWidth: '40rem',
    },
  };

  return (
    <div className="w-full flex flex-col content-center items-center">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {photo && (
            <Modal
              style={style}
              isOpen={photo}
              onRequestClose={() => {
                setPhoto(undefined);
              }}
            >
              <div className="border-2 rounded-md">
                <FaRegTimesCircle
                  className="fixed right-10 top-10 cursor-pointer"
                  onClick={() => setPhoto(undefined)}
                />
                <img
                  alt={photo.title}
                  className="block object-cover object-center h-full"
                  src={photo.url}
                />
              </div>
            </Modal>
          )}
          <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2">
                {photoChunks.length % 2 === 0 ? (
                  <>
                    {photoChunks.map((chunk, index) => {
                      return (
                        <div className="flex flex-wrap w-1/2">
                          <div
                            className={cx('p-1 md:p-2', {
                              'w-1/2': index % 2 === 0,
                              'w-full': index % 2 !== 0,
                            })}
                          >
                            <img
                              alt={chunk[0].title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={chunk[0].url}
                              onClick={() => setPhoto(chunk[0])}
                            />
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img
                              alt={chunk[1].title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={chunk[1].url}
                              onClick={() => setPhoto(chunk[1])}
                            />
                          </div>
                          <div
                            className={cx('p-1 md:p-2', {
                              'w-1/2': index % 2 !== 0,
                              'w-full': index % 2 === 0,
                            })}
                          >
                            <img
                              alt={chunk[2].title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={chunk[2].url}
                              onClick={() => setPhoto(chunk[2])}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {photoChunks.slice(0, -1).map((chunk, index) => {
                      return (
                        <div className="flex flex-wrap w-1/2">
                          <div
                            className={cx('p-1 md:p-2', {
                              'w-1/2': index % 2 === 0,
                              'w-full': index % 2 !== 0,
                            })}
                          >
                            <img
                              alt={chunk[0].title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={chunk[0].url}
                              onClick={() => setPhoto(chunk[0])}
                            />
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img
                              alt={chunk[1].title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={chunk[1].url}
                              onClick={() => setPhoto(chunk[1])}
                            />
                          </div>
                          <div
                            className={cx('p-1 md:p-2', {
                              'w-1/2': index % 2 !== 0,
                              'w-full': index % 2 === 0,
                            })}
                          >
                            <img
                              alt={chunk[2].title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={chunk[2].url}
                              onClick={() => setPhoto(chunk[2])}
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex flex-wrap w-full">
                      {photoChunks[photoChunks.length - 1].map((photo: any) => {
                        return (
                          <div className="'p-1 md:p-2 w-1/3">
                            <img
                              alt={photo.title}
                              className="block object-cover object-center w-full h-full rounded-lg border-2 border-slate-100 cursor-pointer"
                              src={photo.url}
                              onClick={() => setPhoto(photo)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
