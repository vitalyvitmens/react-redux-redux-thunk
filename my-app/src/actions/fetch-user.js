// const fetchUserDataPlaceholder = () => {
// 	fetch('https://jsonplaceholder.typicode.com/users/1')
// 		.then((response) => response.json())
// 		.then((json) => console.log(`Имя: ${json.name}\nПочта: ${json.email}`))
// }

// export const fetchUserAsync = (dispatch) =>
// 	fetchUserDataPlaceholder((userDataFromServer) => {
// 		dispatch({ type: 'FETCH_USER_SERVER', payload: userDataFromServer })
// 	})

  export const fetchUserDataPlaceholder = async (method, { id, ...payload } = {}) => {
    let url = 'https://jsonplaceholder.typicode.com/users/1'
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    }

    if (id) {
      url += `/${id}`
      options.body = JSON.stringify(payload)
    } else if (method === 'POST') {
      options.body = JSON.stringify(payload)
    }

    const response = await fetch(url, options)
    return await response.json()
  }



export const fetchUserAsync = async (dispatch) => {
	const users = await fetchUserDataPlaceholder('GET')
  console.log(users)
	dispatch({
		type: 'FETCH_USER_SERVER',
		payload: users,
	})
}
