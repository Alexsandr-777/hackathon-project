// import './styles.css'
// import { DeathScreenModule } from './modules/daeathScreenModule/deathScreenModule.js'
// menu.add(new DeathScreenModule())
import './styles.css'
import { CustomMenu }        from './menu.js'
import { DeathScreenModule }  from './modules/daeathScreenModule/deathScreenModule.js'
import { ClicksModule }       from './modules/clicks.module.js'
import { ShapeModule }        from './modules/shape.module.js'

const menu = new CustomMenu('#menu')

menu.add(new DeathScreenModule())


