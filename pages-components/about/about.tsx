// 3rd Party
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { FaGithub } from 'react-icons/fa';

export const About: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="font-sans relative mx-auto text-white flex items-center justify-end">
      <div className="flex flex-col text-center justify-between border-slate-500 border-2 rounded-md">
        <section className="py-5 border-b-2 border-slate-200 flex flex-col justify-center items-center">
          <div
            className="h-48 w-48 rounded-full bg-contain"
            style={{
              backgroundImage: `url("https://avatars.githubusercontent.com/u/22899417?v=4")`,
            }}
          ></div>
          <h1 className="text-2xl font-bold">Elizabeth Hart</h1>
          <p className="text-md">Software Engineer | Artist</p>
        </section>
        <section>
          <div className="flex flex-row w-full p-10 justify-center">
            <button
              className="h-24 w-48 border-2 rounded flex flex-col justify-center items-center"
              onClick={() =>
                window.open('https://github.com/elizabethhart', '_blank')
              }
              aria-label="github link"
            >
              <FaGithub size="50px" />
              <p>GitHub</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
