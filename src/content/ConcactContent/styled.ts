import styled from "styled-components";

export const ContactContainer = styled.div`
	width: 100%;
	height: 100vh;

	/* background-color: white; */
	background-color: #1d1d1c;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TextContainer = styled.div`
	width: 85%;
	height: 15vh;

	/* background-color: green; */

	position: relative;
	top: 5%;
`;

export const FormContainer = styled.div`
	width: 85%;
	height: 40vh;
	/*
	background-color: cadetblue; */

	position: relative;
	top: 8%;
`;

export const FooterContainer = styled.div`
	width: 100%;
	height: 30vh;

	background-color: #543a57;

	position: relative;
	top: 15%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TitleText = styled.h1`
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2.2rem;
	font-weight: bold;

	text-align: center;

	margin-bottom: 5%;
`;

export const SubtitleText = styled.p`
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1rem;

	text-align: center;
`;

export const FormElementsContainer = styled.form`
	display: flex;
	flex-direction: column;
`;

export const NameInput = styled.input`
	margin-bottom: 5%;
	padding-left: 4%;
	height: 4vh;

	border-radius: 5px;
	background-color: #d9d9d9;
`;

export const EmailInput = styled.input`
	margin-bottom: 5%;
	padding-left: 4%;
	height: 4vh;

	border-radius: 5px;
	background-color: #d9d9d9;
`;

export const MessageTextArea = styled.textarea`
	padding-top: 3%;
	padding-left: 4%;

	border-radius: 5px;
	background-color: #d9d9d9;
`;

export const SubmitButton = styled.button`
	width: 100%;
	height: 4vh;

	background-color: #1f6684;
	color: white;

	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;

	border-style: none;
	border-radius: 5px;

	margin-top: 5%;
`;

export const FooterElementsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 80%;
	height: 25vh;
	/* background-color: blue; */
`;

export const SocialNetworkIconsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;

	width: 100%;
	height: 10vh;

	position: relative;
	top: 30%;

	/* background-color: bisque; */
`;

export const CopyrightContainer = styled.div`
	width: 100%;
	height: 10vh;

	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: rebeccapurple; */

	position: relative;
	top: 15%;
`;

export const CopyrightLabel = styled.p`
	font-weight: 500;
	font-size: 1rem;
	font-family: Arial, Helvetica, sans-serif;
	color: white;
`;
