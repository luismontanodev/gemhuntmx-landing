import styled from "styled-components";

export const MainContentContainer = styled.div`
	background-image: url("https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
	background-size: cover;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		width: 100%;
		height: 90vh;
		background-color: #1f1a23;
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 90vh;
		background-color: #1f1a23;
	}

	/* @media (min-width: 1024px) {
		flex-direction: column;
	} */
`;

export const TextContainer = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	width: 80%;
	height: 22vh;

	top: 10%;

	@media (min-width: 768px) {
		position: relative;
	}

	/* @media (min-width: 1024px) {
		width: 100%;
	} */
`;

export const IconContainer = styled.div`
	width: 15%;
	height: 5vh;

	position: relative;
	top: 69%;
	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;

	/* @media (min-width: 1024px) {
		width: 100%;
		text-align: center;
	} */
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

export const KnowMoreText = styled.p`
	font-family: "Times New Roman", Times, serif;
	color: white;
	font-weight: 200;
	text-align: center;
	font-size: 1rem;

`;

export const KnowMoreContainer = styled.div`
	width: 35%;
	height: auto;

	display: inline-flex;
	align-items: center;
	justify-content: space-between;
`;

export const KnowMoreIconContainer = styled.div`
	width: auto;
	height: auto;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 2px solid white;
	border-radius: 100%;
`;
