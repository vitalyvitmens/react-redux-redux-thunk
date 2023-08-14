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
				name: initialUserState.name,
				age: initialUserState.age,
			}
		}

		case 'CHANGE_USER': {
			return {
				...state,
				...payload,
			}
		}

		default:
			return state
	}
}
