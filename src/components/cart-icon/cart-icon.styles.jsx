import styled from 'styled-components';
import { ReactComponent as Bag } from '../../assets/bag.svg';

export const CartIconContainer = styled.div`
	padding: 2px;
	background: rgba(199, 255, 100, 0.75);// background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(199, 255, 100, 1) 200%);
	border-radius: 5px;
	border: 0px solid #c7ff64;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
	position: absolute;
	bottom: -6px;
	right: -6px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const ShoppingIconContainer = styled(Bag)`
	width: 32px;
	height: 32px;
	position: relative;
	bottom: 0px;
`;

export const ItemCountContainer = styled.span`
	position: absolute;
	font-size: 16px;
	font-weight: bold;
	bottom: 3px;
`;