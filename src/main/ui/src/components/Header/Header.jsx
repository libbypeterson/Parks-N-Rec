import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import StateDropdown from "./StateDropdown";
import Button from 'react-bootstrap/Button';





export const Header = () => {
	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">Park It</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav>
						<SearchBar />
						<StateDropdown />
					</Nav>
					<div style={{ display: "block", height: 49 }}>
                <Button href="login" variant="primary"  >Login</Button>
                </div>

 		</Navbar.Collapse>
			</Container>

		</Navbar>
	);
};
