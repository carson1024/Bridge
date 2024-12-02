import { NextIntlClientProvider } from "next-intl";
import Insurance from "./home/insurance/page";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Bridge || Bridge International for Academic Services",
};

const MainRoot = () => {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@revolist/revo-dropdown@latest/dist/revo-dropdown/revo-dropdown.js" />
      </Head>
      <NextUIProvider>
        <ToastContainer position="top-right" />
        <Insurance />
      </NextUIProvider>
    </>
  );
};

export default MainRoot;
