import styled from "styled-components";

export const ServicesContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 100vh;

		/* background-color: black; */

		display: flex;
		flex-direction: column;
		align-items: center;
	}
	background-color: #1f1a23;
`;

export const TextContainer = styled.div`
	@media (max-width: 768px) {
		width: 85%;
		height: 20vh;

		/* background-color: gray; */

		position: relative;
		top: 5%;
	}
`;

export const ImagesContainer = styled.div`
	@media (max-width: 768px) {
		width: 98%;
		height: 50vh;

		position: relative;
		top: 5%;
	}
	background-color: blanchedalmond;
`;

export const KnowMoreButtonContainer = styled.div`
	@media (max-width: 768px) {
		width: 35%;
		height: 5vh;

		/* background-color: rebeccapurple; */

		position: relative;
		top: 13%;
	}
`;

export const IconContainer = styled.div`
	@media (max-width: 768px) {
		width: 15%;
		height: 4vh;

		/* background-color: burlywood; */

		position: relative;
		top: 20%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const TitleText = styled.h1`
	@media (max-width: 768px) {
		color: white;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
		font-size: 2rem;
		font-weight: bold;

		text-align: center;

		margin-bottom: 5%;
	}
`;

export const SubtitleText = styled.p`
	@media (max-width: 768px) {
		color: white;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;

		text-align: center;
	}
`;

export const KnowMoreButton = styled.button`
	@media (max-width: 768px) {
		width: 100%;
		height: 4vh;
		font-size: 1.3rem;
		font-weight: bold;
	}
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
