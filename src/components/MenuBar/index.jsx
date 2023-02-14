import { MenuActionBox } from '../MenuActionBox'
import { MenuActionItem } from '../MenuActionItem'

import {
  faHouse,
  faMagnifyingGlass,
  faSquarePlus,
  faFileInvoice,
  faGear,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'

export function MenuBar() {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <strong className={styles.logo}>Music App</strong>
        </div>

        <div>
          <MenuActionBox title='Menu'>
            <MenuActionItem icon={faHouse} fieldName='Home'/>
            <MenuActionItem icon={faMagnifyingGlass} fieldName='Search'/>
          </MenuActionBox>

          <MenuActionBox title='Playlist'>
            <MenuActionItem icon={faSquarePlus} fieldName='Create New'/>
            <MenuActionItem icon={faFileInvoice} fieldName='Pop Punk'/>
            <MenuActionItem icon={faFileInvoice} fieldName='Rocks'/>
          </MenuActionBox>

          <MenuActionBox title='General'>
            <MenuActionItem icon={faGear} fieldName='Settings'/>
            <MenuActionItem icon={faRightFromBracket} fieldName='Log out'/>
          </MenuActionBox>
        </div>
      </div>
    </aside>
  )
}