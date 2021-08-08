import {StyledMenu} from "./MenuStyles";

export const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="about us">💁🏻‍♂️</span>
                About us
            </a>
            <a href="/">
                <span role="img" aria-label="price">💸</span>
                Pricing
            </a>
            <a href="/">
                <span role="img" aria-label="contact">📩</span>
                Contact
            </a>
        </StyledMenu>
    )
}
