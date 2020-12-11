import { useRef } from "react";
import Refs from "./Refs";

const Store = (props) => {
  const refs = {};
  refs.header = useRef();
  return <Refs.Provider value={refs}>{props.children}</Refs.Provider>;
};

export default Store;
