import styled from "styled-components";

export const CatalogueContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #dad9d9;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TextContainer = styled.div`
	width: 85%;
	height: 15vh;

	/* background-color: blueviolet; */

	position: relative;
	top: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ImageCarouselContainer = styled.div`
	width: 100%;
	height: 40vh;
	background-color: rebeccapurple;

	position: relative;
	top: 15%;
`;

export const ShopButtonContainer = styled.div`
	width: 40%;
	height: 5vh;
	/* background-color: bisque; */

	position: relative;
	top: 25%;
`;

export const IconContainer = styled.div`
	width: 10%;
	height: 4vh;
	/* background-color: black; */

	position: relative;
	top: 35.5%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TitleText = styled.h1`
	font-family: "Courier New", Courier, monospace;
	font-weight: 500;
	color: #1d1d1c;
`;

export const SubtitleText = styled.p`
	font-family: "Courier New", Courier, monospace;
	font-weight: 400;
	color: #1d1d1c;
	font-size: 1.5rem;
	text-align: center;
`;

export const ShopNowButton = styled.button`
	background-color: #914f99;
	width: 100%;
	height: 4vh;
	cursor: pointer;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	border-radius: 8px;
	border-style: none;

	color: white;
	font-size: 1.3rem;
	font-weight: bold;
	transition: background-color 0.2s;

	&:hover {
		background-color: #66376c;
	}
`;
