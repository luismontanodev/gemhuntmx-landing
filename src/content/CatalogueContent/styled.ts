import styled from "styled-components";

export const CatalogueContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 100vh;
		background-color: #dad9d9;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const TextContainer = styled.div`
	@media (max-width: 768px) {
		width: 85%;
		height: 15vh;

		position: relative;
		top: 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const ImageCarouselContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 40vh;
		background-color: rebeccapurple;

		position: relative;
		top: 15%;
	}
`;

export const ShopButtonContainer = styled.div`
	@media (max-width: 768px) {
		width: 40%;
		height: 5vh;

		position: relative;
		top: 25%;
	}
`;

export const IconContainer = styled.div`
	@media (max-width: 768px) {
		width: 10%;
		height: 4vh;
		/* background-color: black; */

		position: relative;
		top: 35.5%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const TitleText = styled.h1`
	@media (max-width: 768px) {
		font-family: "Courier New", Courier, monospace;
		font-weight: 500;
		color: #1d1d1c;
	}
`;

export const SubtitleText = styled.p`
	@media (max-width: 768px) {
		font-family: "Courier New", Courier, monospace;
		font-weight: 400;
		color: #1d1d1c;
		font-size: 1.5rem;
		text-align: center;
	}
`;

export const ShopNowButton = styled.button`
	@media (max-width: 768px) {
		width: 100%;
		height: 4vh;

		font-size: 1.3rem;
	}
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
