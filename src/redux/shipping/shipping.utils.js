export const setShippingAddress = shippingAddress => {
	const { streetAddress, postcode, city, state, country } = shippingAddress;

	return {
		streetAddress,
		postcode,
		city,
		state,
		country
	}
}