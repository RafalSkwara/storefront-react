export const viewReducer = (state = {
	viewName: 'home',
	activeProductId: 1,
	langDropdown: 'en',
	currencyDropdown: 'usd'
}, action) => {
	switch (action.type) {
		case 'SHOW_PRODUCT':
			return {
				...state,
				viewName: 'product',
				activeProductId: action.payload
			}
		case 'SHOW_HOMEPAGE':
			return {
				...state,
				viewName: 'home'
			}
		default:
			return state;
	}
}