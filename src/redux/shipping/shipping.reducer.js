import { ShippingActionTypes } from './shipping.types';
import { setShippingAddress } from './shipping.utils';

const INITIAL_STATE = {
	streetAddress: '',
	postcode: '',
	city: '',
	state: '',
	country: ''
}

const shippingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShippingActionTypes.SET_SHIPPING_ADDRESS:
			return setShippingAddress(action.payload);
		default:
			return state;
	}
}

export default shippingReducer;