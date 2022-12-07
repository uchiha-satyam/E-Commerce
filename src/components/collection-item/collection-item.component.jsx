import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { addItem } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { CollectionItemContainer, CollectionFooterContainer, ImageContainer ,CustomButtonContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({item, addItem, currentUser}) => {
	const { name, price, imageUrl } = item;
	const navigate = useNavigate();

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
			{
				currentUser?
				<CustomButtonContainer
					onClick={() => addItem(item)}
					inverted
				>
					Add To Cart
				</CustomButtonContainer>
				:
				<CustomButtonContainer
					onClick={() => navigate('/sign')}
					inverted
				>
					Sign in first
				</CustomButtonContainer>
			}
		</CollectionItemContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);