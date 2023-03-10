import "../styles/input.css";

import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}