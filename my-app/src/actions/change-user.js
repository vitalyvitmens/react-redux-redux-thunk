const fetchUserDataMock = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: 'Егор',
				age: 13,
			})
		}, 500)
	})
}

export const changeUserAsync = (dispatch) =>
	fetchUserDataMock().then((userDataFromServer) =>
		dispatch({ type: 'CHANGE_USER', payload: userDataFromServer })
	)
