/** @format */

import Header from "./Header";
import Navigator from "./Navigator";

const Layout: React.FC<{
  children?: JSX.Element[] | JSX.Element;
  title?: string;
  description?: string;
}> = ({ children, title, description }) => (
  <main>
    <Header title={title} description={description} />
    <Navigator />
    <div style={{ padding: "15px" }}>{children}</div>
  </main>
);

export default Layout;
