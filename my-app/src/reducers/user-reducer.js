export const initialUserState = {
	name: 'Виталий',
	age: 45,
}

export const userReducer = (state = initialUserState, { type, payload }) => {
	switch (type) {
		case 'INCREASE_AGE': {
			return {
				...state,
				age: state.age + payload,
			}
		}

		case 'REDUCE_AGE': {
			return {
				...state,
				age: state.age - payload,
			}
		}

		case 'RESET_AGE': {
			return {
				...state,
				age: initialUserState.age,
			}
		}

		case 'CHANGE_USER': {
			return {
				...state,
				...payload,
			}
		}

		case 'FETCH_USER': {
			return {
				...state,
				name: payload.name,
				age: payload.email,
			}
		}

		default:
			return state
	}
}
