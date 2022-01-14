import { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About: NextPage = () => {
  return <h1>About</h1>;
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