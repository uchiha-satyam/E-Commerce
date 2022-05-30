import { ShippingActionTypes } from './shipping.types';

export const setShippingAddress = shippingAddress => ({
	type: ShippingActionTypes.SET_SHIPPING_ADDRESS,
	payload: shippingAddress
})