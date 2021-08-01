import styled from "styled-components";
import {Container, Content} from "./LayoutStyles";
import {Sidebar} from "../Sidebar/Sidebar";

export const Layout = ({children}) => (
    <Container>
        <Content>
            <Navbar/>
            <Sidebar/>
            {children}
        </Content>

    </Container>


);

export default Layout;