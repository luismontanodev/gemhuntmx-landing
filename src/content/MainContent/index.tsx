import React from "react";

import { FaChevronDown } from "react-icons/fa6";

import {
	IconContainer,
	ImagesContainer,
	MainContentContainer,
	SubtitleText,
	TextContainer,
	TitleText,
} from "./styled";

export const Component = () => {
	return (
		<MainContentContainer>
			<TextContainer>
				<TitleText>Lorem Ipsum anaudifamam</TitleText>
				<SubtitleText>JEWELRY</SubtitleText>
			</TextContainer>
			<ImagesContainer></ImagesContainer>
			<IconContainer>
				<FaChevronDown size={40} color="white" />
			</IconContainer>
		</MainContentContainer>
	);
};

export { Component as MainContent };
