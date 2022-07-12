import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuItemContainer, ContentContainer, ContentSubtitle, ContentTitle, ImageContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const navigate = useNavigate();
	
	return (
		<MenuItemContainer
			size={size}
			onClick={() => navigate(`${linkUrl}`)}
		>
			<ImageContainer
				className="background-image"
				imageUrl={imageUrl}
			></ImageContainer>
			<ContentContainer className="content">
				<ContentTitle>{title.toUpperCase()}</ContentTitle>
				<ContentSubtitle>SHOP NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	)
};

export default MenuItem;