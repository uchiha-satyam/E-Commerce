import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    // height: 100%;
    width: 140px;
    padding: 25px;

    & img {
      width: 140px;
    }
`;

export const OptionsContainer = styled.div`
    // width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

export const PhotoContainer = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 3px solid #c7ff64;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;