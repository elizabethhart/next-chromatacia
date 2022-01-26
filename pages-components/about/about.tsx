// 3rd Party
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export const About: FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className="w-full font-sans">
      <div className="flex flex-col text-center justify-between border-slate-500 border-2 rounded-md p-10">
        <section className="mb-10 pb-5 border-b-2 border-slate-200">
          <h1 className="text-2xl text-slate-800 font-bold">{'About'}</h1>
          <p className="text-md">{t('about-intro', { name: 'Elizabeth' })}</p>
        </section>
        <section className="flex flex-row justify-between">
          <div className="mx-10">
            <h2 className="text-lg font-medium">{t`technologies-header`}</h2>
            <ul>
              <li>React</li>
              <li>Next</li>
              <li>Node</li>
              <li>All things TypeScript</li>
            </ul>
          </div>
          <div className="mx-10">
            <h2 className="text-lg font-medium">{t`contact-header`}</h2>
            <ul className="decoration-transparent">
              <li>
                <a href="https://github.com/elizabethhart">
                  <FaGithub className="inline-block" /> GitHub
                </a>
              </li>
              <li>
                <a href="mailto:elizabethwhart@gmail.com">
                  <FiMail className="inline-block" /> Email
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
