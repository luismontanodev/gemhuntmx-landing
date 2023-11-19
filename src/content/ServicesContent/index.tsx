import React from "react";

import { FaChevronDown } from "react-icons/fa6";

import {
	IconContainer,
	ImagesContainer,
	KnowMoreButton,
	KnowMoreButtonContainer,
	ServicesContainer,
	SubtitleText,
	TextContainer,
	TitleText,
} from "./styled";

export const Component = () => {
	return (
		<ServicesContainer>
			<TextContainer>
				<TitleText>Quality over quantity</TitleText>
				<SubtitleText>
					Lorem ipsum dolor sit amet audi fam consectetur adipiscing elit.
				</SubtitleText>
			</TextContainer>
			<ImagesContainer></ImagesContainer>
			<KnowMoreButtonContainer>
				<KnowMoreButton>Know more</KnowMoreButton>
			</KnowMoreButtonContainer>
			<IconContainer>
				<FaChevronDown size={40} color="white" />
			</IconContainer>
		</ServicesContainer>
	);
};

export { Component as ServicesContent };
