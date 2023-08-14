export const selectIdServer = (state) => state.userServerState.id
export const selectNameServer = (state) => state.userServerState.name
export const selectPhoneServer = (state) => state.userServerState.phone
export const selectUsernameServer = (state) => state.userServerState.username
export const selectWebsiteServer = (state) => state.userServerState.website
export const selectAddressStreetServer = (state) =>
	state.userServerState.address.street
export const selectAddressCityServer = (state) =>
	state.userServerState.address.city
export const selectAddressSuiteServer = (state) =>
	state.userServerState.address.suite
export const selectAddressZipcodeServer = (state) =>
	state.userServerState.address.zipcode
export const selectAddressGeoLatServer = (state) =>
	state.userServerState.address.geo.lat
export const selectAddressGeoLngServer = (state) =>
	state.userServerState.address.geo.lng
export const selectCompanyNameServer = (state) =>
	state.userServerState.company.name
export const selectCompanyCatchPhraseServer = (state) =>
	state.userServerState.company.catchPhrase
export const selectCompanyBsServer = (state) => state.userServerState.company.bs
