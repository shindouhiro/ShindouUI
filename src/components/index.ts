import type { App } from 'vue'
import SButton, { Button } from './Button'

export {
  Button
}

const components = [SButton]

export default {
  version: '1.1.1',
  install(app: App) {
    components.forEach(component => app.use(component))
  }
}
