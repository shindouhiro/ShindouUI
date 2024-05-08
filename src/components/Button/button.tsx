import { computed, defineComponent } from 'vue'
import type { ButtonProps } from './button-type'
import { buttonProps } from './button-type'
import './button.scss'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      const { disabled, round, type, size, plain } = props

      const classes = computed(() => {
        return [
          {
            'btn': true,
            [`btn-${size}`]: size,
            [`btn-${type}`]: type,
            'btn-round': round,
            'btn-plain': plain,
          },
        ]
      })

      const btnAttr = {
        disabled,
        class: [classes.value],
      }

      return (
        <button
          {...btnAttr}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  },
})
