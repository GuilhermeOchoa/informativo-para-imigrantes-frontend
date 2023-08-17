import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BLUE_500};
	align-items: center;
	justify-content:center;
	flex-direction: row;
`;
