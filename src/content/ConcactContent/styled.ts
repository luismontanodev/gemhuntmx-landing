import styled from "styled-components";

export const ContactContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* background-color: white; */
	background-color: #1d1d1c;
`;

export const TextContainer = styled.div`
	@media (max-width: 768px) {
		width: 85%;
		height: 15vh;
		position: relative;
		top: 5%;
	}

	/* background-color: green; */
`;

export const FormContainer = styled.div`
	@media (max-width: 768px) {
		width: 85%;
		height: 40vh;
		position: relative;
		top: 8%;
	}
	/*
	background-color: cadetblue; */
`;

export const FooterContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 30vh;
		position: relative;
		top: 15%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	background-color: #543a57;
`;

export const TitleText = styled.h1`
	@media (max-width: 768px) {
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 2.2rem;
		font-weight: bold;

		text-align: center;

		margin-bottom: 5%;
	}
`;

export const SubtitleText = styled.p`
	@media (max-width: 768px) {
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;

		text-align: center;
	}
`;

export const FormElementsContainer = styled.form`
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export const NameInput = styled.input`
	@media (max-width: 768px) {
		margin-bottom: 5%;
		padding-left: 4%;
		height: 4vh;

		border-radius: 5px;
		background-color: #d9d9d9;
	}
`;

export const EmailInput = styled.input`
	@media (max-width: 768px) {
		margin-bottom: 5%;
		padding-left: 4%;
		height: 4vh;

		border-radius: 5px;
		background-color: #d9d9d9;
	}
`;

export const MessageTextArea = styled.textarea`
	@media (max-width: 768px) {
		padding-top: 3%;
		padding-left: 4%;

		border-radius: 5px;
		background-color: #d9d9d9;
	}
`;

export const SubmitButton = styled.button`
	@media (max-width: 768px) {
		width: 100%;
		height: 4vh;

		background-color: #1f6684;
		color: white;

		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;

		border-style: none;
		border-radius: 5px;

		margin-top: 5%;
	}
`;

export const FooterElementsContainer = styled.div`
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 80%;
		height: 25vh;
	}
	/* background-color: blue; */
`;

export const SocialNetworkIconsContainer = styled.div`
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-evenly;

		width: 100%;
		height: 10vh;

		position: relative;
		top: 30%;
	}

	/* background-color: bisque; */
`;

export const CopyrightContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 10vh;

		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: rebeccapurple; */

		position: relative;
		top: 15%;
	}
`;

export const CopyrightLabel = styled.p`
	@media (max-width: 768px) {
		font-weight: 500;
		font-size: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		color: white;
	}
`;
