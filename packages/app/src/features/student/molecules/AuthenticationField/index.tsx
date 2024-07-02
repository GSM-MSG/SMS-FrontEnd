import { Controller, useFormContext } from 'react-hook-form'
import { CertificationForm } from '@sms/shared'
import BooleanInput from '@features/student/atoms/BooleanInput'
import FileUpload from '@features/student/atoms/FileUpload'
import TextInput from '@features/student/atoms/TextInput'
import NumberInput from '@features/student/atoms/NumberInput'
import SelectInput from '@features/student/atoms/SelectInput'
import { Group } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  group: Group
  sectionName: string
  sectionIndex: number
  contentIndex: number
  groupIndex: number
}

const AuthenticationField = ({
  group,
  sectionName,
  sectionIndex,
  contentIndex,
  groupIndex,
}: Props) => {
  const { control } = useFormContext()

  return (
    <CertificationForm.Field label={sectionName}>
      {group.fields.map((field, fieldIndex) => {
        const name = `contents.${contentIndex}.sections.${sectionIndex}.groups.${groupIndex}.fields.0.${fieldIndex}`

        if (field.fieldType === 'BOOLEAN')
          return (
            <BooleanInput
              key={field.fieldId}
              field={field}
              name={`${name}.selectId`}
            />
          )

        if (field.fieldType === 'NUMBER')
          return (
            <NumberInput
              key={field.fieldId}
              field={field}
              name={`${name}.value`}
            />
          )

        if (field.fieldType === 'TEXT')
          return (
            <TextInput
              key={field.fieldId}
              field={field}
              name={`${name}.value`}
            />
          )

        if (field.fieldType === 'SELECT')
          return (
            <SelectInput
              key={field.fieldId}
              field={field}
              name={`${name}.selectId`}
            />
          )

        if (field.fieldType === 'FILE')
          return (
            <Controller
              name={`${name}.value`}
              control={control}
              key={field.fieldId}
              render={({ field: { name, onChange, onBlur } }) => (
                <FileUpload
                  name={name}
                  field={field}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          )

        return null
      })}
    </CertificationForm.Field>
  )
}

export default AuthenticationField
