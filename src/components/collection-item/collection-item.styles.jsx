import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const CustomButtonContainer = styled(CustomButton)`
    position: absolute;
    bottom: 15%;
    opacity: 0.65;
    display: none;

    &:hover {
      opacity: 0.8;
    }
`;

export const NameContainer = styled.span`
	margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
	margin-bottom: 15px;
`;