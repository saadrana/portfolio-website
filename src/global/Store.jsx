import { useState } from "react";
import Context from "./Context";

const Store = (props) => {
  /*
  const [name, setName] = useState(null);
  const [red1, setRed1] = useState(null);
  const [red2, setRed2] = useState(null);
  const [titles, setTitles] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [moon, setMoon] = useState(null);
  */

  const refs = {};
  refs.name = useState(null);
  refs.red1 = useState(null);
  refs.red2 = useState(null);
  refs.titles = useState(null);
  refs.portfolio = useState(null);
  refs.moon = useState(null);

  return (
    <Context.Provider value={{ refs: refs }}>{props.children}</Context.Provider>
  );
};

export default Store;
