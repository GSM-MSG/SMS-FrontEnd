import { CertificationForm, Chip } from '@sms/shared'
import { Group } from '@features/student/dtos/res/AuthenticationFromResDto'
import { useFieldArray, useFormContext, Controller } from 'react-hook-form'
import TextInput from '@features/student/atoms/TextInput'
import ArrayController from '@features/student/atoms/ArrayController'
import { Fragment } from 'react'
import BooleanInput from '@features/student/atoms/BooleanInput'
import NumberInput from '@features/student/atoms/NumberInput'
import SelectInput from '@features/student/atoms/SelectInput'
import FileUpload from '@features/student/atoms/FileUpload'
import { Field } from '@features/student/dtos/form/AuthenticationFormDto'

interface Props {
  group: Group
  maxCount: number
  sectionName: string
  sectionIndex: number
  contentIndex: number
  groupIndex: number
}

const AuthenticationArrayField = ({
  group,
  maxCount,
  sectionName,
  sectionIndex,
  contentIndex,
  groupIndex,
}: Props) => {
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `contents.${contentIndex}.sections.${sectionIndex}.groups.${groupIndex}.fields`,
  })

  const arrayDefaultValue: Field[][] = [
    group.fields.map((field) => ({
      fieldId: field.fieldId,
      fieldType: field.fieldType,
      selectId: '',
      value: '',
    })),
  ]

  return (
    <CertificationForm.Field label={sectionName}>
      {fields.map((arrayField, arrayIndex) => (
        <Fragment key={arrayField.id}>
          {group.fields.map((field, fieldIndex) => {
            const name = `contents.${contentIndex}.sections.${sectionIndex}.groups.${groupIndex}.fields.${arrayIndex}.${fieldIndex}`

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
                  name={`${name}.value`}
                  field={field}
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
          <ArrayController
            disableAdd={maxCount <= fields.length}
            onAddClick={() => append(arrayDefaultValue)}
            onRemoveClick={() => remove(arrayIndex)}
          />
        </Fragment>
      ))}

      {fields.length <= 0 && (
        <Chip onClick={() => append(arrayDefaultValue)}>추가</Chip>
      )}
    </CertificationForm.Field>
  )
}

export default AuthenticationArrayField
