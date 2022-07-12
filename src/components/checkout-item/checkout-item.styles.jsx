import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
`;

export const ImgContainer = styled.img`
	width: 100%;
	height: 100%;
`;

export const NameContainer = styled.span`
	width: 23%;
`;

export const QuantityContainer = styled.span`
	width: 23%;
	display: flex;
	align-items: center;
`;

export const PriceContainer = styled.span`
	width: 23%;
`;

export const ValueContainer = styled.span`
	margin: 0 10px;
`;

export const ArrowContainer = styled.div`
	cursor: pointer;
	font-weight: bold;
`;

export const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;