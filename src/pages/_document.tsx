import Document, { Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          />

          <meta name="UiQ Chick!" content="Chick é ser você!" />
          <link rel="icon" href="/favicon.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
