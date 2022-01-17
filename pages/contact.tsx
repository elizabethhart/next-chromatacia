import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageContent from './components/PageContent';

const Contact: NextPage = () => {
  return (
    <PageContent>
      <h1>{'Contact'}</h1>
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

export default Contact;
