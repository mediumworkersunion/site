import App, { Container } from "next/app";

//import '../App.css';
import "../../public/scss/style.scss";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_PUBLIC_TOKEN;



export const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp
