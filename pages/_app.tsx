import Layout from "@/components/Layout/layout";
import store from "@/components/Redux/Store/store";
import "@/styles/globals.scss";
import { createWrapper } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
