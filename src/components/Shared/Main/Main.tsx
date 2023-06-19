import React, { useState } from "react";
import Layout from "../Layout/Layout";
import MohammadPage from "@components/Home/MohammadPage/MohamaadPage";
import DefaultPage from "@components/Home/DefaultPage/DefaultPage";

const Main = () => {
  const [userName, setUserName] = useState("mohammad");

  return (
    <Layout>
      {userName === "mohammad" ? <MohammadPage /> : <DefaultPage />}
    </Layout>
  );
};

export default Main;
