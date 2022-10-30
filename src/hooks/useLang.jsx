import { useState, useEffect } from "react";

const useLang = () => {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    setLang(navigator.language.split("-")?.[0]);
  }, []);

  return lang;
};

export default useLang;
