import { ChangeEvent } from 'react'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { Input, NewSelect as Select, FileInput } from '@sms/shared'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'
import usePDFUpload from '@features/register/hooks/usePDFUpload'
interface Props {
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  control: Control<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  watch: UseFormGetValues<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
}
const PortfolioInputs = ({
  register,
  errors,
  setError,
  setValue,
  watch,
  resetField,
}: Props) => {
  const { onChange: PDFUpload } = usePDFUpload({
    setError: (message) => setError('portfolioFile', { message }),
  })
  return (
    <FormWrapper title='포트폴리오'>
      <InputColumn comment='포트폴리오 형식'>
        <Select
          name='portfolioType'
          defaultOpen={false}
          defaultValue={watch('portfolioType')}
          value={watch('portfolioType')}
          onValueChange={(value) =>
            setValue(
              'portfolioType',
              value as RegisterFormType['portfolioType']
            )
          }
        >
          <Select.SelectTrigger>
            <Select.SelectValue placeholder='포트폴리오 형식' />
          </Select.SelectTrigger>
          <Select.SelectContent>
            <Select.SelectItem value='URL'>URL 형식</Select.SelectItem>
            <Select.SelectItem value='PDF'>PDF 파일</Select.SelectItem>
          </Select.SelectContent>
        </Select>
      </InputColumn>
      {watch('portfolioType') === 'URL' && (
        <InputColumn comment='URL'>
          <Input
            {...register('portfolioUrl', {
              pattern: {
                value: /^(https?:\/\/)/,
                message: 'url 형식이 올바르지 않습니다',
              },
            })}
            onReset={() => resetField('portfolioUrl')}
            placeholder='https://'
          />
        </InputColumn>
      )}
      {watch('portfolioType') === 'PDF' && (
        <InputColumn comment='PDF파일'>
          <FileInput
            {...register('portfolioFile')}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                PDFUpload(e)
                return e.target.files[0].name as string
              }
              return ''
            }}
            placeholder={
              watch('portfolioFileUrl')
                ? '포트폴리오.pdf'
                : 'PDF를 업로드해주세요.'
            }
            error={errors.portfolioFileUrl?.message}
          />
        </InputColumn>
      )}
    </FormWrapper>
  )
}

export default PortfolioInputs
