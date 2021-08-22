import {Container, Content} from "./LayoutStyles";
import {Sidebar} from "../Sidebar/Sidebar";
import {Navbar} from "../Navbar/Navbar";

export const Layout = ({children}) => (
    <Container>
        <Content>
            <Sidebar/>
            {children}
        </Content>

    </Container>


);

export default Layout;