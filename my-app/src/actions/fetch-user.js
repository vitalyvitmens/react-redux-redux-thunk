const fetchUserDataPlaceholder = () => {
	fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((json) => console.log(json.name, json.email))
}

fetchUserDataPlaceholder()

export const fetchUserAsync = () => (dispatch) =>
	fetchUserDataPlaceholder().then((userDataFromServer) =>
		dispatch({ type: 'FETCH_USER', payload: userDataFromServer })
	)
