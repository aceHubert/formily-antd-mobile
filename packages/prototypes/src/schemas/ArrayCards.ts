import { ISchema } from '@formily/react'
import { Card } from './Card'

export const ArrayCards = Card

const Addition: ISchema = {
  type: 'object',
  properties: {
    method: {
      type: 'string',
      enum: ['push', 'unshift'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'push',
        optionType: 'button',
      },
    },
    defaultValue: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
    },
  },
}

ArrayCards.Addition = Addition
