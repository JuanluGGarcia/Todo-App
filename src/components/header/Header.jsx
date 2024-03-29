import { StyledDarkMode, StyledHeaderContainer, StyledTitle } from "./style";

const Header = () => {
    return <StyledHeaderContainer>
        <StyledTitle>TODO</StyledTitle>
        <StyledDarkMode>
            <img src="./images/icon-sun.svg" alt="icon-sun" />
        </StyledDarkMode>
    </StyledHeaderContainer>
}

export default Header;