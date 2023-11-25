import styled from "styled-components";

export const Container = styled.div`
	@media (max-width: 768px) {
		width: 45%;
		height: 23vh;

		margin: 3%;
	}

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		width: 45%;
		height: 23vh;

		margin: 3%;
	}
`;

export const ImageItem = styled.img`
	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
			rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
		border-radius: 3%;
	}

	@media (min-width: 768px) {
		width: 80%;
		height: 100%;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
			rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
		border-radius: 3%;
	}
`;
