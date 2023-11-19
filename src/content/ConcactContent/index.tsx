import React from "react";
import {
	ContactContainer,
	EmailInput,
	FooterContainer,
	FormContainer,
	FormElementsContainer,
	MessageTextArea,
	NameInput,
	SubmitButton,
	SubtitleText,
	TextContainer,
	TitleText,
} from "./styled";

export const Component = () => {
	return (
		<ContactContainer>
			<TextContainer>
				<TitleText>Let's build together</TitleText>
				<SubtitleText>
					Great vision without great people is irrelevant <br />
					Contact us
				</SubtitleText>
			</TextContainer>
			<FormContainer>
				<FormElementsContainer action="">
					<NameInput type="text" placeholder="Enter your name" />
					<EmailInput type="email" placeholder="Enter a valid email address" />
					<MessageTextArea
						name=""
						id=""
						cols={30}
						rows={10}
						placeholder="Your message here..."
					></MessageTextArea>
					<SubmitButton>Submit</SubmitButton>
				</FormElementsContainer>
			</FormContainer>
			<FooterContainer></FooterContainer>
		</ContactContainer>
	);
};

export { Component as ContactContent };
