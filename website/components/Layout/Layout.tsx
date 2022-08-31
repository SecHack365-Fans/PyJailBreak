/** @format */

import Header from "./Header";
import Navigator from "./Navigator";

export const Layout: React.FC<{
  children?: JSX.Element[] | JSX.Element;
  title?: string;
  description?: string;
  styles?: string;
}> = ({ children, title, description, styles }) => (
  <main className={styles}>
    <Header title={title} description={description} />
    <Navigator />
    <div style={{ padding: "15px" }}>{children}</div>
  </main>
);
