import Head from "next/head";
import { Component } from "react";
import ReactGA from "react-ga";

export const initGA = () => {
  if (process.env.NODE_ENV !== "production" || !process.browser) return;
  console.log("initialize GA");
  console.log("GA init");
  ReactGA.initialize("UA-189244402-1", {
    testMode: window.location.hostname.includes("localhost"),
  });
};
export const logPageView = () => {
  if (process.env.NODE_ENV !== "production" || !process.browser) return;
  console.log("log page view");
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  console.log(ReactGA.testModeAPI.calls);
};
export const logEvent = (category = "", action = "") => {
  if (process.env.NODE_ENV !== "production" || !process.browser) return;
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = "", fatal = false) => {
  if (process.env.NODE_ENV !== "production" || !process.browser) return;
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
