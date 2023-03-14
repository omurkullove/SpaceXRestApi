import { FC, ReactNode } from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | SpaceX</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="SpaceX, Information,  Ships, Rockets "
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
