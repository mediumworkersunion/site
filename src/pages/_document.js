import theme from "../theme";
// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="As the workers at Medium, we want Actions to Matter too"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <meta name="robots" content="noindex" />
          <link rel="manifest" href="/manifest.json" />
          <title>MWU</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
