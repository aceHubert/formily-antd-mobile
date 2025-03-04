import { ISchema } from '@formily/react'

export const Switch: ISchema = {
  type: 'object',
  properties: {
    defaultChecked: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    disabled: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    loading: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    checkedText: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    uncheckedText: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
