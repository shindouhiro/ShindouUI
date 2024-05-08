import type { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'info'
export type IButtonSize = 'large' | 'default' | 'small'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'default',
  },
  round: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
