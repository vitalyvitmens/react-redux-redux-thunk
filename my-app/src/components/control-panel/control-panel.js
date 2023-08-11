import { useDispatch } from 'react-redux'
import {
	RESET_AGE,
	changeUserAsync,
	increaseAge,
	reduceAge,
  fetchUserAsync,
} from '../../actions'
import styles from './control-panel.module.css'
export const ControlPanel = () => {
	const dispatch = useDispatch()

	const onAgeIncrease = () => {
		dispatch(increaseAge(5))
	}

	const onAgeReduce = () => {
		dispatch(reduceAge(1))
	}

	const onAgeReset = () => {
		dispatch(RESET_AGE)
	}

	const onUserChange = () => {
		dispatch(changeUserAsync)
	}

	const onUserFetch = () => {
		dispatch(fetchUserAsync)
	}

	return (
		<>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={onAgeIncrease}>
					Увеличить возраст
				</button>
				<button className={styles.button} onClick={onAgeReduce}>
					Уменьшить возраст
				</button>
				<button className={styles.button} onClick={onAgeReset}>
					Сбросить возраст
				</button>
				<button className={styles.button} onClick={onUserChange}>
					Сменить пользователя
				</button>
			</div>
      <p></p>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={onUserFetch}>
					Загрузить пользователя
				</button>
			</div>
		</>
	)
}
