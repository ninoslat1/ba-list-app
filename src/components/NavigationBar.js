import { Navbar, Container} from "react-bootstrap";

const NavigationBar = () => {
    return (
    <div>   
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Blue_Archive_logo_JP.png?20220529033750" width={128} height={64}></img>
                    </a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar;