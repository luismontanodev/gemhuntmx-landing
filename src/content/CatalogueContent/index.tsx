import React from "react";

import { FaChevronDown } from "react-icons/fa6";

import {
	CatalogueContainer,
	FirstProductContainer,
	IconContainer,
	ImageProductContainer,
	SecondProductContainer,
	ShopButtonContainer,
	ShopNowButton,
	SubtitleText,
	TextContainer,
	TitleText,
} from "./styled";
import { ProductCard } from "../../components/ProductCard";

export const Component = () => {
	return (
		<CatalogueContainer>
			<TextContainer>
				<TitleText>What's new...</TitleText>
				<SubtitleText>A selection of our finest gemstones for you</SubtitleText>
			</TextContainer>
			<ImageProductContainer>
				<FirstProductContainer>
					<ProductCard url="https://www.gemsociety.org/wp-content/uploads/2017/06/sp1934.jpg" />
					<ProductCard url="https://www.johndyergems.com/smallpictures/pusoz0.54.jpg" />
				</FirstProductContainer>
				<SecondProductContainer>
					<ProductCard url="https://mcginsberg.com/wp-content/uploads/2019/08/tanzanite-1.jpg" />
					<ProductCard url="https://image.brilliantearth.com/media/cache/9f/71/9f71f84b17c610c9987b8adfbcd305c9.jpg" />
				</SecondProductContainer>
			</ImageProductContainer>
			<ShopButtonContainer>
				<ShopNowButton>Shop now</ShopNowButton>
			</ShopButtonContainer>
			<IconContainer>
				<FaChevronDown size={40} color="#8F8F8F" />
			</IconContainer>
		</CatalogueContainer>
	);
};

export { Component as CatalogueContent };
