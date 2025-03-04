import { ISchema } from '@formily/react'

const CommonDatePickerAPI = {
  precision: {
    type: 'string',
    enum: [
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
      'week',
      'week-day',
    ],
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-component-props': {
      defaultValue: 'day',
    },
  },
  placeholder: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  format: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      placeholder: 'YYYY-MM-DD',
    },
  },
  min: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'DatePicker',
  },
  max: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'DatePicker',
  },
  confirmText: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      placeholder: '确定',
    },
  },
  cancelText: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      placeholder: '取消',
    },
  },
  title: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  visible: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  closeOnMaskClick: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
    'x-component-props': {
      defaultChecked: true,
    },
  },
}

export const DatePicker: ISchema = {
  type: 'object',
  properties: {
    ...CommonDatePickerAPI,
    mouseWheel: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    filter: {
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    renderLabel: {
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
  },
}
