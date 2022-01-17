import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageContent from './components/PageContent';

const About: NextPage = () => {
  return (
    <PageContent>
      <h1>{'About'}</h1>
      <div>
        <p>Software Engineer</p>
        <p>
          <a href="https://github.com/elizabethhart">GitHub</a>
        </p>
        <p>
          <a href="mailto:elizabethwhart@gmail.com">Email</a>
        </p>
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

export default About;
