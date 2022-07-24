/** @format */

import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import "swagger-ui-react/swagger-ui.css";
import styles from "../styles/OpenAPI.module.css";

const SwaggerUI = dynamic<{ url: string }>(import("swagger-ui-react"), {
  ssr: false,
});

const OpenAPI = () => {
  return (
    <Layout
      title="Swagger Doc for PyJailBreak API"
      description="Swagger Doc for PyJailBreak API"
      styles={styles.body}
    >
      <SwaggerUI url="./swagger.yaml" />
    </Layout>
  );
};

export default OpenAPI;
