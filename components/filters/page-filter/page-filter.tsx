import { StyledContainer, StyledChildContainer, StyledTypesContainer } from "./page-filter.styled";

export const PageFilter = () => {
  return (
    <StyledContainer>
      <h3>Filters</h3>
      <StyledChildContainer>
        <label>Operating in</label>
        <select>
          <option defaultValue={'DEFAULT'} className="selected">
            Select a country
          </option>
        </select>
      </StyledChildContainer>
      <StyledTypesContainer>
        <h4>Ferry types</h4>
        <label className="container">Normal ferries
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label><br />
        <label className="container">High-speed ferries
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label><br />
      </StyledTypesContainer>
    </StyledContainer>
  )
}