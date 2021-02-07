import styled from "styled-components";

import { device } from "../../../constants/deviceSizes";

export const ContainerProducts = styled.section`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  @media ${device.mobileL} {
    max-width: 540px;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 960px;
  }
`;

export const TitleProducts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
`