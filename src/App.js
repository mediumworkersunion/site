import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
// Views
import Home from "./views/Home";

const App = () => {
  const childRef = useRef();

  useEffect(() => {
    document.body.classList.add("is-loaded");
  }, []);

  return (
    <LayoutDefault>
      <Home />
    </LayoutDefault>
  );
};

export default App;
