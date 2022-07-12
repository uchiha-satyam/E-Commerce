import styled from 'styled-components';
import { ReactComponent as G } from '../../assets/G.svg';

export const SignInContainer = styled.div`
	width: 32vw;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h2`
	margin: 10px 0;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SignWithGContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const GLogo = styled(G)`
	height: 36px;
	width: 36px;
	border-radius: 50%;
`;