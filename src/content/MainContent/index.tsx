import React from "react";

import { FaChevronDown, FaPlus } from "react-icons/fa6";

import {
	IconContainer,
	KnowMoreContainer,
	KnowMoreIconContainer,
	KnowMoreText,
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
				<KnowMoreContainer>
					<KnowMoreIconContainer>
						<FaPlus color="white" size={12} />
					</KnowMoreIconContainer>
					<KnowMoreText>Know more...</KnowMoreText>
				</KnowMoreContainer>
			</TextContainer>
			<IconContainer>
				<FaChevronDown size={40} color="white" />
			</IconContainer>
		</MainContentContainer>
	);
};

export { Component as MainContent };
