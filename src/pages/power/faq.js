import React from "react";
import ReactDOM from "react-dom";

import App from "../../App";
import { ContentfulProvider } from "../../contentful/ContentfulProvider";
import { getHomeContent } from "../../contentful/getHomeContent";

const HomePage = ({ data }) => {
  return (
    <ContentfulProvider data={data}>
      <App />
    </ContentfulProvider>
  );
};

export async function getServerSideProps({ preview }) {
  console.log("getting static props");
  const { data } = (await getHomeContent(preview)) ?? [];
  return {
    props: {
      data: {
        homepageData: data,
      },
    },
  };
}

export default HomePage;
