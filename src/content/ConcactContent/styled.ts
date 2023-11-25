import styled from "styled-components";

export const ContactContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 768px) {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	background-color: #1d1d1c;
`;

export const TextContainer = styled.div`
	@media (max-width: 768px) {
		width: 85%;
		height: 15vh;
		position: relative;
		top: 5%;
	}

	@media (min-width: 768px) {
		width: 85%;
		height: 15vh;
		position: relative;
		top: 5%;
	}
`;

export const FormContainer = styled.div`
	@media (max-width: 768px) {
		width: 85%;
		height: 40vh;
		position: relative;
		top: 8%;
	}

	@media (min-width: 768px) {
		width: 85%;
		height: 40vh;
		position: relative;
		top: 8%;
	}
`;

export const FooterContainer = styled.div`
	background-image: url("https://cdn.pixabay.com/photo/2011/04/13/09/43/gem-6579_1280.jpg");
	background-size: cover;

	@media (max-width: 768px) {
		width: 100%;
		height: 30vh;
		position: relative;
		top: 15%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 768px) {
		width: 100%;
		height: 30vh;
		position: relative;
		top: 15%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
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

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 80%;
		height: 25vh;
	}
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

	@media (min-width: 768px) {
		display: flex;
		justify-content: space-evenly;

		width: 100%;
		height: 10vh;

		position: relative;
		top: 30%;
	}
`;

export const CopyrightContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		height: 10vh;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		top: 15%;
	}

	@media (min-width: 768px) {
		width: 100%;
		height: 10vh;

		display: flex;
		justify-content: center;
		align-items: center;

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

	@media (min-width: 768px) {
		font-weight: 500;
		font-size: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		color: white;
	}
`;
