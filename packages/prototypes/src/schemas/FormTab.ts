import { ISchema } from '@formily/react'

export const FormTab: ISchema & { TabPane?: ISchema } = {
  type: 'object',
  properties: {
    activeKey: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    activeLineMode: {
      type: 'string',
      enum: ['auto', 'full', 'fixed'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'auto',
      },
    },
    stretch: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
}

FormTab.TabPane = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    disabled: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
