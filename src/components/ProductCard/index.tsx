import React from "react";
import { Container, ImageItem } from "./styled";

interface Props {
	url: string;
}

export const Component = (props: Props) => {
	const { url } = props;
	return (
		<Container>
			<ImageItem src={url} />
		</Container>
	);
};

export { Component as ProductCard };
