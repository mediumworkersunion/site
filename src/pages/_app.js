import App, { Container } from "next/app";

import "../../public/scss/style.scss";
import '../App.css';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_PUBLIC_TOKEN;



export const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp
