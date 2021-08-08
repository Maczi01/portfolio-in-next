import {StyledMenu} from "./MenuStyles";

export const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="about us">💁🏻‍♂️</span>
                About me
            </a>
            <a href="/">
                <span role="img" aria-label="price">💸</span>
                Projects
            </a>
            <a href="/">
                <span role="img" aria-label="contact">📩</span>
                Contact
            </a>
        </StyledMenu>
    )
}
