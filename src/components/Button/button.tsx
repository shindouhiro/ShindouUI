import { defineComponent } from 'vue'
import type { ButtonProps } from './button-type'
import { buttonProps } from './button-type'
import './button.scss'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      const { disabled, round, type, size, plain } = props
      const styleCss: Record<string, boolean> = {
        'btn-round': round,
        'btn-plain': plain,
      }
      const renderCss: string[] = Object.keys(styleCss).filter(key => styleCss[key])
      return (
        <button class={`btn btn-${type} btn-${size} ${renderCss}`} disabled={disabled}>
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  },
})
