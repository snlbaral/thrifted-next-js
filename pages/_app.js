import Layout from "@/components/layout";
import GlobalContext from "@/global/GlobalContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  );
}
