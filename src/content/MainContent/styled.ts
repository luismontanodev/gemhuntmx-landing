import styled from "styled-components";

export const MainContentContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: #1f1a23;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TextContainer = styled.div`
	width: 80%;
	height: 22vh;
	background-color: bisque;
	background-color: #1f1a23;

	position: relative;
	top: 5%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ImagesContainer = styled.div`
	width: 80%;
	height: 55vh;
	background-color: black;
`;

export const IconContainer = styled.div`
	width: 15%;
	height: 5vh;
	/* background-color: orange; */
	background-color: #1f1a23;

	position: relative;
	top: 7%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TitleText = styled.h1`
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	font-weight: bold;
	text-align: center;
	font-size: 2.5rem;
`;

export const SubtitleText = styled.h2`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2.8rem;
	color: #3c95b1;

	font-weight: bold;
`;
