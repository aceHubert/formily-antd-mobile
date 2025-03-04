import React from 'react'
// import { Upload as FormilyUpload } from '@formily/antd-mobile'
import { ImageUploader as AntdImageUploader } from 'antd-mobile'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const ImageUploador: DnFC<
  React.ComponentProps<typeof AntdImageUploader>
> = AntdImageUploader

ImageUploador.Behavior = createBehavior({
  name: 'Upload',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'ImageUploador',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.ImageUploadoder),
  },
  designerLocales: AllLocales.ImageUploador,
})

ImageUploador.Resource = createResource({
  icon: 'UploadSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'Array<object>',
        title: 'ImageUploador',
        'x-decorator': 'FormItem',
        'x-component': 'ImageUploador',
        'x-component-props': {
          textContent: 'ImageUploador',
        },
      },
    },
  ],
})
