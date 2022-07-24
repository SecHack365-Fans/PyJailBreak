import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
}

const Header: React.FC<Props> = ({ title, description }: Props) => {
  const defaultTitle = "PyJailBreak";
  const defaultDescription =
    "Black box automated vulnerability scanning tool for Python socket servers";
  return (
    <Head>
      <title>{title ? title : defaultTitle}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <link rel="icon" href="/PyJailBreak/favicon.ico" />
      <meta name="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/card_img/1551139193656844288/N9ApjUm4?format=jpg&amp;name=orig"
      />
    </Head>
  );
};

export default Header;