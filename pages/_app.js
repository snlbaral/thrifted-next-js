import Layout from "@/components/layout";
import GlobalContext from "@/global/GlobalContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GlobalContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext>
    </SessionProvider>
  );
}
