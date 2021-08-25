import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  Head as OAPHead,
  App as OAPApp,
  TopBar,
  IconsLibrary,
} from "@viacomcbs/openap-inventory-manager-react";
import store from "../store";

import { getAppRuntimeConfig, AppConfigProps } from "../config";
import useAuth from "../components/useAuth";

import "../css/global.css";
import Styles from "../css/App.module.css";

type Props = AppProps & AppConfigProps;

export default function App(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <OAPHead />
      </Head>
      <IconsLibrary />
      <Provider store={store}>
        <AppAuth {...props} />
      </Provider>
    </>
  );
}

function AppAuth({ Component, pageProps, config }: Props): JSX.Element {
  useAuth(config);

  return (
    <OAPApp className={Styles.App}>
      <TopBar />
      <Component {...pageProps} />
    </OAPApp>
  );
}

App.getInitialProps = async () => {
  const config = getAppRuntimeConfig();

  return {
    config,
  };
};
