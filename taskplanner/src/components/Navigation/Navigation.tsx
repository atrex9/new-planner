import NavLinks from "../NavLinks/NavLinks";
import Profile from "../Profile/Profile";
import { StyledParentCont } from "./Navigation.styles";

const Navigation = () => {
  return (
    <StyledParentCont>
      <Profile name={"Eric Hoffman"}></Profile>
      <NavLinks />
    </StyledParentCont>
  );
};

export default Navigation;
