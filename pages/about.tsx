// 3rd Party
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// UI
import PageContent from '../components/PageContent';
import Header from '../components/Header';
import About from '../pages-components/about';

const AboutPage: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Header
        title={t('about')}
        meta={{ name: 'description', content: 'Generated by create next app' }}
      />
      <PageContent>
        <About />
      </PageContent>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default AboutPage;
