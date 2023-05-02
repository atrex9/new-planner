import { Link } from "react-router-dom";
import { getLinkIcon, getLinkName, linkData } from "../../utils/NavLink.utils";
import { IconCont, NameSpan, NavDiv, ParentDiv } from "./NavLink.styles";

const NavLinks = () => {
  return (
    <ParentDiv>
      {linkData.map((link) => {
        return (
          <Link
            key={link.linkType}
            style={{ textDecoration: "none" }}
            to={link.isSelected ? "/Discover" : ""}
          >
            <NavDiv
              isSelected={link.isSelected}
              isLastLinkInSection={link.isLastLinkInSection}
            >
              <IconCont
                src={getLinkIcon(link.linkType)}
                alt={getLinkName(link.linkType)}
              ></IconCont>
              <NameSpan isSelected={link.isSelected}>
                {getLinkName(link.linkType)}
              </NameSpan>
            </NavDiv>
          </Link>
        );
      })}
    </ParentDiv>
  );
};

export default NavLinks;
