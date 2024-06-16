import { CertificationForm } from '@sms/shared'
import { Section } from '@features/student/dtos/res/AuthenticationFromResDto'
import { useFieldArray, useFormContext } from 'react-hook-form'
import TextInput from '@features/student/atoms/TextInput'
import ArrayController from '@features/student/atoms/ArrayController'
import { Fragment } from 'react'
import BooleanInput from '@features/student/atoms/BooleanInput'
import NumberInput from '@features/student/atoms/NumberInput'
import SelectInput from '@features/student/atoms/SelectInput'
import FileUpload from '@features/student/atoms/FileUpload'

interface Props {
  section: Section
  sectionIndex: number
  contentIndex: number
}

const AuthenticationArrayField = ({
  section,
  sectionIndex,
  contentIndex,
}: Props) => {
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `contents.${contentIndex}.sections.${sectionIndex}.fields`,
  })

  const arrayDefaultValue = [
    section.fields.map((field) => ({
      fieldId: field.fieldId,
      fieldType: field.fieldType,
      value: '',
      selectId: undefined,
    })),
  ]

  return (
    <CertificationForm.Field label={section.sectionName}>
      {fields.map((arrayField, arrayIndex) => (
        <Fragment key={arrayField.id}>
          {section.fields.map((field, fieldIndex) => {
            const name = `contents.${contentIndex}.sections.${sectionIndex}.fields.${arrayIndex}.${fieldIndex}`

            if (field.fieldType === 'BOOLEAN')
              return (
                <BooleanInput
                  key={field.fieldId}
                  field={field}
                  name={`${name}.value`}
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
              return <FileUpload key={field.fieldId} />

            return null
          })}
          <ArrayController
            onAddClick={() => append(arrayDefaultValue)}
            onRemoveClick={() => remove(arrayIndex)}
          />
        </Fragment>
      ))}
    </CertificationForm.Field>
  )
}

export default AuthenticationArrayField
