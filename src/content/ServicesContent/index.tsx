import React from "react";

import { FaChevronDown } from "react-icons/fa6";

import {
	IconContainer,
	ImagesContainer,
	KnowMoreButton,
	KnowMoreButtonContainer,
	PrimaryImage,
	SecondaryImage,
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
			<ImagesContainer>
				<PrimaryImage src="https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				<SecondaryImage src="https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
			</ImagesContainer>
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
