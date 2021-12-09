import React, { useRef, useState } from 'react'
import moment from 'moment'
import cls from 'classnames'
import { connect, mapReadPretty } from '@formily/react'
import { DatePicker as AntdDatePicker, VirtualInput } from 'antd-mobile'
import { DatePickerProps as AntdDatePickerProps } from 'antd-mobile/es/components/date-picker'
import { VirtualInputRef } from 'antd-mobile/es/components/virtual-input'
import { PreviewText } from '../preview-text'
import { formatMomentValue, momentable, usePrefixCls } from '../__builtins__'
import { CloseCircleFill } from 'antd-mobile-icons'

type DateValue = string | Date | moment.Moment | moment.Moment[]

type PickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year'

export type IDatePickerProps<PickerProps> = Exclude<
  PickerProps,
  'value' | 'onChange'
> & {
  placeholder?: string
  clearable?: boolean
  picker?: PickerMode
  format?:
    | string
    | ((value: moment.Moment) => string)
    | (string | ((value: moment.Moment) => string)[])
  showTime?: boolean
  value: DateValue
  onChange: (value: DateValue) => void
}

export type RangePickerProps = {}

type ComposedDatePicker = React.FC<AntdDatePickerProps> & {
  RangePicker?: React.FC<RangePickerProps>
}

const mapDateFormat = function <T>() {
  const getDefaultFormat = (props: IDatePickerProps<T>) => {
    const picker = props.picker
    if (picker === 'month') {
      return 'YYYY-MM'
    } else if (picker === 'quarter') {
      return 'YYYY-\\QQ'
    } else if (picker === 'year') {
      return 'YYYY'
    } else if (picker === 'week') {
      return 'gggg-wo'
    }
    return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
  }
  return (props: any): IDatePickerProps<T> => {
    const format = props['format'] || getDefaultFormat(props)
    const onChange = props.onChange
    return {
      ...props,
      format: format,
      value: momentable(props.value, format === 'gggg-wo' ? 'gggg-ww' : format),
      onChange: (value: DateValue) => {
        if (onChange) {
          onChange(formatMomentValue(value, format))
        }
      },
    } as IDatePickerProps<T>
  }
}

export const BaseDatePicker: React.FC<IDatePickerProps<AntdDatePickerProps>> = (
  props
) => {
  const prefix = usePrefixCls('formily-date-picker')
  const {
    onChange,
    placeholder,
    value,
    format,
    clearable,
    style,
    ...dateProps
  } = mapDateFormat<AntdDatePickerProps>()(props)
  const inputRef = useRef<VirtualInputRef>()
  const [visible, setVisible] = useState(false)

  const onDateChange = (value) => {
    onChange?.(value)
  }
  const val = formatMomentValue(value, format, '')

  return (
    <div className={cls(prefix)}>
      <VirtualInput
        placeholder={placeholder}
        value={Array.isArray(val) ? val.join('~') : val}
        ref={inputRef}
        style={{ '--caret-width': '1px', '--caret-color': '#666666', ...style }}
        onClick={() => {
          setVisible(true)
        }}
      />
      {clearable && value && (
        <div className={`${prefix}-clear`} onClick={() => onChange?.('')}>
          <CloseCircleFill />
        </div>
      )}
      <AntdDatePicker
        {...dateProps}
        getContainer={null}
        value={(value as moment.Moment)?.toDate()}
        visible={visible}
        onClose={() => {
          setVisible(false)
          inputRef.current.focus()
        }}
        onConfirm={onDateChange}
      />
    </div>
  )
}

export const DatePicker: ComposedDatePicker = connect(
  BaseDatePicker,
  mapReadPretty(PreviewText.DatePicker)
)

/*
 DatePicker.RangePicker = connect(
 AntdDatePicker.RangePicker,
 mapProps(mapDateFormat()),
 mapReadPretty(PreviewText.DateRangePicker)
 )
 */

export default DatePicker
