import React from "react";

import { FaChevronDown } from "react-icons/fa6";

import {
	CatalogueContainer,
	IconContainer,
	ImageCarouselContainer,
	ShopButtonContainer,
	ShopNowButton,
	SubtitleText,
	TextContainer,
	TitleText,
} from "./styled";

export const Component = () => {
	return (
		<CatalogueContainer>
			<TextContainer>
				<TitleText>What's new...</TitleText>
				<SubtitleText>A selection of our finest gemstones for you</SubtitleText>
			</TextContainer>
			<ImageCarouselContainer></ImageCarouselContainer>
			<ShopButtonContainer>
				<ShopNowButton>Shop now</ShopNowButton>
			</ShopButtonContainer>
			<IconContainer>
				<FaChevronDown size={40} color="white" />
			</IconContainer>
		</CatalogueContainer>
	);
};

export { Component as CatalogueContent };
