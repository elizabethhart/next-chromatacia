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
        href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default Header;
