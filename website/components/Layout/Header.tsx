import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
}

const Header: React.FC<Props> = ({ title, description }: Props) => {
  const defaultTitle = "PyJailBreak";
  const defaultDescription =
    "Black box automated vulnerability scanning tool for Python socket servers";
  const perfectTitle = title ? title : defaultTitle
  const perfectDescription = description ? description : defaultTitle
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <link rel="icon" href="/PyJailBreak/favicon.ico" />
      <meta name="og:url" content="https://fans.sechack365.com/PyJailBreak/" />
      <meta name="og:title" content={perfectTitle} />
      <meta name="og:description" content={perfectDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/SecHack365-Fans/PyJailBreak/main/assets/logo_readme_title.png"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default Header;
