import Head from 'next/head';

type Props = {
  title: string;
  meta: {
    name: string;
    content: string;
  };
};

const Header: React.FC<Props> = ({ title, meta }) => {
  return (
    <Head>
      <title>{`Chromatacia | ${title}`}</title>
      <meta name={meta.name} content={meta.content} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Header;
