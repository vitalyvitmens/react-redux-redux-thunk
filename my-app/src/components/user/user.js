import { useSelector } from 'react-redux'
import { selectAge, selectName } from '../../selectors'
import styles from './user.module.css'

export const User = () => {
	const name = useSelector(selectName)
	const age = useSelector(selectAge)
	const nameFetch = useSelector(selectName)
	const emailFetch = useSelector(selectAge)

	return (
		<>
			<div className={styles.user}>
				<div>Пользователь:</div>
				<div className={styles.data}>
					<div>Имя: {name}</div>
					<div>Возраст: {age}</div>
				</div>
			</div>
			<div className={styles.user}>
				<div>Пользователь:</div>
				<div className={styles.data}>
					<div>Имя: {nameFetch}</div>
					<div>Возраст: {emailFetch}</div>
				</div>
			</div>
		</>
	)
}
