import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
// Views
import Home from "./views/Home";

// TODO: define the pageLayouts and ensure it's being passed in during the page setup

const App = ({ pageLayout }) => {
  const childRef = useRef();
  useEffect(() => {
    document.body.classList.add("is-loaded");
  }, []);

  return (
    <ChakraProvider>
      <LayoutDefault>
        <Home />
      </LayoutDefault>
    </ChakraProvider>
  );
};

export default App;
