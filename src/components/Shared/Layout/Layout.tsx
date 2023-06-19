import React from "react";
import { StyledLayout } from "./StyledLayout";
import { IBaseProps } from "@type/types";

interface LayoutProps extends IBaseProps {}
const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
