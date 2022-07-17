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
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default Header;
