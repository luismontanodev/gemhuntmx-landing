import React from "react";

import {
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaXTwitter,
} from "react-icons/fa6";

import {
	ContactContainer,
	CopyrightContainer,
	CopyrightLabel,
	EmailInput,
	FooterContainer,
	FooterElementsContainer,
	FormContainer,
	FormElementsContainer,
	MessageTextArea,
	NameInput,
	SocialNetworkIconsContainer,
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
			<FooterContainer>
				<FooterElementsContainer>
					<SocialNetworkIconsContainer>
						<FaInstagram size={30} color="white" />
						<FaXTwitter size={30} color="white" />
						<FaFacebook size={30} color="white" />
						<FaPinterest size={30} color="white" />
					</SocialNetworkIconsContainer>
					<CopyrightContainer>
						<CopyrightLabel>
							Copyright ® Gemhuntmx. All rights reserved
						</CopyrightLabel>
					</CopyrightContainer>
				</FooterElementsContainer>
			</FooterContainer>
		</ContactContainer>
	);
};

export { Component as ContactContent };
