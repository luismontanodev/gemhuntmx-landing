import styled from "styled-components";

export const CatalogueContainer = styled.div`
		width: 100%;
		height: 100vh;
		background-color: #f5f5f5;

		display: flex;
		flex-direction: column;
		align-items: center;
`;

export const TextContainer = styled.div`
		width: 85%;
		height: 15vh;

		position: relative;
		top: 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

`;

export const ImageProductContainer = styled.div`
		display: flex;
		flex-direction: column;

		width: 100%;
		height: auto;
		/* background-color: rebeccapurple; */

		position: relative;
		top: 10%;
`;

export const FirstProductContainer = styled.div`
		display: flex;

	@media (min-width: 768px) {
		align-items: center;
		justify-content: center;
	}
`;

export const SecondProductContainer = styled.div`
		display: flex;
`;

export const ShopButtonContainer = styled.div`
		width: 40%;
		height: 5vh;

		position: relative;
		top: 15%;
`;

export const IconContainer = styled.div`
		width: 10%;
		height: 4vh;
		/* background-color: black; */

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	@media (max-width: 768px) {
		top: 23%;
	}

	@media (min-width: 768px) {
		top: 20%;
	}
`;

export const TitleText = styled.h1`
		font-family: "Courier New", Courier, monospace;
		font-weight: 500;
		color: #1d1d1c;
`;

export const SubtitleText = styled.p`
		font-family: "Courier New", Courier, monospace;
		font-weight: 500;
		color: #1d1d1c;
		font-size: 1.5rem;
		text-align: center;
`;

export const ShopNowButton = styled.button`
	width: 100%;
	height: 4vh;

	font-size: 1.3rem;

	background-color: #914f99;
	color: white;
	font-weight: bold;
	cursor: pointer;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	border-radius: 8px;
	border-style: none;
	transition: background-color 0.2s;

	&:hover {
		background-color: #66376c;
	}
`;
