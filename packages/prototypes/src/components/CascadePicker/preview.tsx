import React from 'react'
import { CascadePicker as FormilyCascadePicker } from '@formily/antd-mobile'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const CascadePicker: DnFC<
  React.ComponentProps<typeof FormilyCascadePicker>
> = FormilyCascadePicker

CascadePicker.Behavior = createBehavior({
  name: 'Cascader',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'CascadePicker',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.CascadePicker),
  },
  designerLocales: AllLocales.CascadePicker,
})

CascadePicker.Resource = createResource({
  icon: 'CascaderSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'CascadePicker',
        'x-decorator': 'FormItem',
        'x-component': 'CascadePicker',
      },
    },
  ],
})
