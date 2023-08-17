import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BG};
	align-items: center;
	justify-content:center;
	flex-direction: row;
`;

export const StyledButton = styled.TouchableOpacity` /* Botao estilizado */
  background-color: ${({ theme }) => theme.COLORS.BTN};
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
