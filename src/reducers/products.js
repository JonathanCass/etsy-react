const InitialState = {
	items: []
}

export default function(state = InitialState, action) {
	switch(action.type) {
		case 'GET_DATA':
			return {items: action}
		default:
			return state
	}
}