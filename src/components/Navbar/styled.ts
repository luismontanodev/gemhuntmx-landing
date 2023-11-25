import styled from "styled-components";

export const Container = styled.div`
	background-color: #1f1a23;

	width: 100%;
	height: auto;
`;

export const HeaderContainer = styled.div`
	width: 100%;
	height: auto;
`;

export const Header = styled.header`
	width: 100%;
	height: 10vh;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	width: 15%;
	height: 70%;
	background-color: black;
	margin-left: 10%;
`;

export const MenuContainer = styled.div`
	@media (max-width: 768px) {
		width: 15%;
		height: 70%;

		background-color: #1f1a23;

		margin-right: 10%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 768px) {
		width: 10%;
		height: 70%;

		background-color: #1f1a23;

		margin-right: 10%;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
