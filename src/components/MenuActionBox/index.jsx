import styles from './styles.module.css'

export function MenuActionBox({children, title}) {
  return (
    <nav className={styles.content}>
      <h3>{title}</h3>

      <ul>
        {children}
      </ul>
    </nav>
  )
}