import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contact: NextPage = () => {
  return <h1>{'Contact'}</h1>;
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
