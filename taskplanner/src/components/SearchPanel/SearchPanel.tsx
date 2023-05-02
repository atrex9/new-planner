import {
  SearchCont,
  SearchImagesSpan,
  searchStyles,
} from "./SearchPanel.styles";
import SearchBar from "material-ui-search-bar";
import bright from "../../assets/icons/ico-bright.svg";
import more from "../../assets/icons/ico-more.svg";

const SearchPanel = () => {
  return (
    <SearchCont>
      <SearchBar
        cancelOnEscape={true}
        style={searchStyles.root}
        placeholder={"Search by Task, description or a keyword"}
      ></SearchBar>
      <SearchImagesSpan>
        <img src={bright} alt={"bright"}></img>
        <img src={more} alt={"more"}></img>
      </SearchImagesSpan>
    </SearchCont>
  );
};

export default SearchPanel;
