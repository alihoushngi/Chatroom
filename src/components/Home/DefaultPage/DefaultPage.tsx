import React from "react";
import {
  DefaultPageDesStyle,
  DefaultPageTitleStyle,
  DefaultPageWrapperStyle,
} from "./StyledDefaultPage";

const DefaultPage = () => {
  return (
    <DefaultPageWrapperStyle>
      <DefaultPageTitleStyle>B-Chat ! Fast and Safe 👌</DefaultPageTitleStyle>
      <DefaultPageDesStyle>
        B-Chat offers a chatroom experience that excels in both safety and
        speed. We prioritize your security through advanced encryption and
        vigilant moderation, ensuring a protected environment. Simultaneously,
        our optimized infrastructure enables lightning-fast communication,
        facilitating seamless interactions and minimizing latency. Join us for a
        secure and swift chatroom where you can connect, engage, and converse
        with peace of mind and unparalleled efficiency.
      </DefaultPageDesStyle>
    </DefaultPageWrapperStyle>
  );
};

export default DefaultPage;
