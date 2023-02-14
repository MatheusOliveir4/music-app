import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

export function MenuActionItem({ icon, fieldName }) {
  return (
    <li className={styles.content}>
      <a href="">
        <FontAwesomeIcon className={styles.icon} icon={icon} />
        {fieldName}
      </a>
    </li>
  )
}