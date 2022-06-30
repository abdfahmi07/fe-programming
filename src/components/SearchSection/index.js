import Movies from "../Movies";
import StyledSearchSection from "./index.styled";

function SearchSection({ searchQuery }) {
  return (
    <StyledSearchSection>
      <Movies title="Hasil Penelusuran" searchQuery={searchQuery} />
    </StyledSearchSection>
  );
}

export default SearchSection;
