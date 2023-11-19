import React from "react";
import { FaBars } from "react-icons/fa6";

import {
	Container,
	Header,
	HeaderContainer,
	LogoContainer,
	MenuContainer,
} from "./styled";

export const Component = () => {
	return (
		<Container>
			<HeaderContainer>
				<Header>
					<LogoContainer></LogoContainer>
					<MenuContainer>
						<FaBars size={50} color="white" />
					</MenuContainer>
				</Header>
			</HeaderContainer>
		</Container>
	);
};

export { Component as Navbar };
