import { InputColumn, FormWrapper } from '@features/register/atoms'
import { Input, Select } from '@sms/shared'
import { PortfolioList } from '@features/register/data'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  watch: UseFormWatch<RegisterFormType>
}

const PortfolioInputs = ({ register, control, watch }: Props) => {
  return (
    <FormWrapper title='포트폴리오'>
      <InputColumn comment='포트폴리오 형식'>
        <Select
          name='portfolioType'
          control={control}
          register={register}
          options={PortfolioList}
          value={watch('portfolioType')}
        />
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
            placeholder='https://'
          />
        </InputColumn>
      )}
      {watch('portfolioType') === 'PDF' && (
        <InputColumn comment='PDF파일'>
          <Input name='portfolioFile' />
        </InputColumn>
      )}
    </FormWrapper>
  )
}

export default PortfolioInputs
