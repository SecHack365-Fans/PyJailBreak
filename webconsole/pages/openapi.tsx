import dynamic from "next/dynamic";
import Head from "next/head";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic<{ url: string }>(import("swagger-ui-react"), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <Head>
        <title>Swagger Doc for PyJailBreak API</title>
        <meta name="description" content="Swagger Doc for PyJailBreak API" />
      </Head>
      <SwaggerUI url="./swagger.yaml" />
    </div>
  );
}
