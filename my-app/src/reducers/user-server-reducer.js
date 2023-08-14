export const initialUserServerState = {
	id: 0,
	name: '',
	phone: '',
	username: '',
	website: '',
	address: {
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		geo: {
			lat: '',
			lng: '',
		},
	},
	company: {
		name: '',
		catchPhrase: '',
		bs: '',
	},
}

export const userServerReducer = (
	state = initialUserServerState,
	{ type, payload }
) => {
	switch (type) {
		case 'FETCH_USER_SERVER': {
			return {
				...state,
				id: payload.id,
				name: payload.name,
				phone: payload.phone,
				username: payload.username,
				website: payload.website,
				address: {
					...state.address,
					street: payload.address.city,
					city: payload.address.street,
					suite: payload.address.suite,
					zipcode: payload.address.zipcode,
					geo: {
						...state.address.geo,
						lat: payload.address.geo.lat,
						lng: payload.address.geo.lng,
					},
				},
				company: {
					...state.company,
					name: payload.company.name,
					catchPhrase: payload.company.catchPhrase,
					bs: payload.company.bs,
				},
			}
		}

		case 'RESET_USER_SERVER': {
			return {
				...state,
				id: initialUserServerState.id,
				name: initialUserServerState.name,
				phone: initialUserServerState.phone,
				username: initialUserServerState.username,
				website: initialUserServerState.website,
				address: {
					...state.address,
					street: initialUserServerState.address.city,
					city: initialUserServerState.address.street,
					suite: initialUserServerState.address.suite,
					zipcode: initialUserServerState.address.zipcode,
					geo: {
						...state.address.geo,
						lat: initialUserServerState.address.geo.lat,
						lng: initialUserServerState.address.geo.lng,
					},
				},
				company: {
					...state.company,
					name: initialUserServerState.company.name,
					catchPhrase: initialUserServerState.company.catchPhrase,
					bs: initialUserServerState.company.bs,
				},
			}
		}

		default:
			return state
	}
}
