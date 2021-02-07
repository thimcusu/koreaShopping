import React from "react";
import { NavLink } from "react-router-dom";

import {
  StyledAdv,
  AdvSmall,
  AdvLarge,
  AdvSmallInner,
  AdvLargeInner,
  Title,
  Details,
  Link,
  AdvBackGround,
} from "./StyledAdv";
import advSmall from "../../../assets/images/avds_small.jpg";
import advLarge from "../../../assets/images/avds_large.jpg";

function Adv() {
  return (
    <StyledAdv>
      <AdvSmall>
        <AdvBackGround src={advSmall} />
        <AdvSmallInner>
          <Title>Smart Phones</Title>
          <Link>
            <NavLink to="/category">See More</NavLink>
          </Link>
        </AdvSmallInner>
      </AdvSmall>
      <AdvLarge>
        <AdvBackGround src={advLarge} />
        <AdvLargeInner>
          <Title>Professional Cameras</Title>
          <Details>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            unde deleniti laboriosam fugiat, vitae, molestiae aspernatur
            eligendi dolorum quam ratione ipsum repellendus
          </Details>
          <Link>
            <NavLink to="/category">See More</NavLink>
          </Link>
        </AdvLargeInner>
      </AdvLarge>
    </StyledAdv>
  );
}

export default Adv;
