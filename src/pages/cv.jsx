import pdf from "../documents/SaadRana_CV.pdf";
import { useLayoutEffect } from "react";

const CV = () => {
  const openPDF = () => {
    window.open(pdf, "_self");
  };

  useLayoutEffect(() => {
    openPDF();
  }, []);

  return <div></div>;
};

export default CV;
