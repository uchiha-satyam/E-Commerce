import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, CollectionFooterContainer, ImageContainer ,CustomButtonContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<ImageContainer
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>₹{price}</PriceContainer>
			</CollectionFooterContainer>
			<CustomButtonContainer
				onClick={() => addItem(item)}
				inverted
			>
				Add To Cart
			</CustomButtonContainer>
		</CollectionItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);