import { useSelector } from 'react-redux'
import {
	selectAge,
	selectName,
	selectIdServer,
	selectNameServer,
	selectPhoneServer,
	selectWebsiteServer,
	selectUsernameServer,
	selectAddressStreetServer,
	selectAddressCityServer,
	selectAddressSuiteServer,
	selectAddressZipcodeServer,
	selectAddressGeoLatServer,
	selectAddressGeoLngServer,
	selectCompanyNameServer,
	selectCompanyCatchPhraseServer,
	selectCompanyBsServer,
} from '../../selectors'
import styles from './user.module.css'

export const User = () => {
	const name = useSelector(selectName)
	const age = useSelector(selectAge)
	const idServer = useSelector(selectIdServer)
	const nameServer = useSelector(selectNameServer)
	const phoneServer = useSelector(selectPhoneServer)
	const username = useSelector(selectUsernameServer)
	const website = useSelector(selectWebsiteServer)
	const city = useSelector(selectAddressCityServer)
	const street = useSelector(selectAddressStreetServer)
	const suite = useSelector(selectAddressSuiteServer)
	const zipcode = useSelector(selectAddressZipcodeServer)
	const lat = useSelector(selectAddressGeoLatServer)
	const lng = useSelector(selectAddressGeoLngServer)
	const companyName = useSelector(selectCompanyNameServer)
	const catchPhrase = useSelector(selectCompanyCatchPhraseServer)
	const bs = useSelector(selectCompanyBsServer)

	return (
		<>
			<p></p>
			<div className={styles.user}>
				<h1>Пользователь:</h1>
				<div className={styles.data}>
					<div>
						Имя: <span>{name}</span>
					</div>
					<div>
						Возраст: <span>{age}</span>
					</div>
				</div>
			</div>
			<p></p>
			<div className={styles.user}>
				<h1>Пользователь с сервера:</h1>
				<div className={styles.data}>
					<h2>Данные:</h2>
					<div>
						id: <span>{idServer}</span>
					</div>
					<div>
						name: <span>{nameServer}</span>
					</div>
					<div>
						phone: <span>{phoneServer}</span>
					</div>
					<div>
						username: <span>{username}</span>
					</div>
					<div>
						website: <span>{website}</span>
					</div>
					<h2>Адрес:</h2>
					<div>
						city: <span>{city}</span>
					</div>
					<div>
						street: <span>{street}</span>
					</div>
					<div>
						suite: <span>{suite}</span>
					</div>
					<div>
						zipcode: <span>{zipcode}</span>
					</div>
					<h2>Геолокация:</h2>
					<div>
						lat: <span>{lat}</span>
					</div>
					<div>
						lng: <span>{lng}</span>
					</div>
					<h2>Компания:</h2>
					<div>
						companyName: <span>{companyName}</span>
					</div>
					<div>
						catchPhrase: <span>{catchPhrase}</span>
					</div>
					<div>
						bs: <span>{bs}</span>
					</div>
				</div>
			</div>
			<p></p>
		</>
	)
}
