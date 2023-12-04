import styled from "styled-components";

export const ServicesContainer = styled.div`
	background-image: url("https://cdn.pixabay.com/photo/2016/11/19/15/04/black-1839731_1280.jpg");
	background-size: cover;

	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TextContainer = styled.div`
		width: 85%;
		height: 20vh;

		position: relative;
		top: 5%;
`;

export const KnowMoreButtonContainer = styled.div`
		width: 35%;
		height: 5vh;

		position: relative;
		top: 13%;
`;

export const IconContainer = styled.div`
	width: 15%;
	height: 4vh;

	position: relative;
	top: 20%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TitleText = styled.h1`
	color: white;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	font-size: 2rem;
	font-weight: bold;

	text-align: center;

	margin-bottom: 5%;
`;

export const SubtitleText = styled.p`
	color: white;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;

	text-align: center;
`;

export const KnowMoreButton = styled.button`
	width: 100%;
	height: 4vh;
	font-size: 1.3rem;
	font-weight: bold;

	background-color: #914f99;
	cursor: pointer;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	border-radius: 8px;
	border-style: none;

	color: white;
	transition: background-color 0.2s;

	&:hover {
		background-color: #66376c;
	}
`;

export const ImagesContainer = styled.div`
	width: 98%;
	height: 50vh;

	position: relative;
	top: 5%;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const PrimaryImage = styled.img`
	width: 47%;
	height: 40vh;

	border-radius: 3%;

	object-fit: cover;
`;

export const SecondaryImage = styled.img`
	width: 47%;
	height: 40vh;

	border-radius: 3%;

	object-fit: cover;
`;
