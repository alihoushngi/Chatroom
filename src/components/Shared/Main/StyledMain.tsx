import styled from "styled-components";
import tw from "twin.macro";

export const StyledMain = styled.aside`
  ${tw`min-h-[50vh] w-full flex-[3  1  0%]`}
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
