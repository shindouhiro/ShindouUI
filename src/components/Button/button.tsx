import { defineComponent } from 'vue'
import type { ButtonProps } from './button-type'
import { buttonProps } from './button-type'
import './button.scss'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      const { disabled, round, type, size } = props
      const btnShape = round ? 'btn-round' : ''
      return (
        <button class={`btn btn-${type} btn-${size} ${btnShape}`} disabled={disabled}>
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  },
})
