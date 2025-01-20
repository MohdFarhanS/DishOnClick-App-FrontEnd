import React, { useEffect } from "react";
import Page1 from "../pages/page1";

const PageWithRedirect = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return <Page1 />;
};

export default PageWithRedirect;
