import HideableWrapper from '@features/register/atoms/HideableWrapper'
import { InputColumn } from '@features/register/atoms'
import {
  Input,
  ImageInput,
  FourImageInputs,
  SearchInput,
  MultiDateInput,
} from '@sms/shared'

import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

const ProjectsInput = () => {
  return (
    <S.Wrapper>
      <HideableWrapper title='Project' onDelete={() => {}}>
        <InputColumn comment='이름'>
          <Input placeholder='프로젝트 이름입력' />
        </InputColumn>

        <InputColumn comment='아이콘'>
          <S.IconInput>
            <ImageInput onChange={() => 'hello'} />
          </S.IconInput>
        </InputColumn>

        <InputColumn comment='미리보기 사진'>
          <FourImageInputs onChange={() => 'hello'} />
        </InputColumn>

        <InputColumn comment='내용'>
          <Input placeholder='프로젝트 내용입력' />
        </InputColumn>

        <InputColumn
          comment='사용 기술
(최대 20개)'
        >
          <SearchInput dropdownList={[]} />
        </InputColumn>

        <InputColumn comment='주요 작업'>
          <Input placeholder='주요 작업 내용서술' />
        </InputColumn>

        <InputColumn comment='진행 기간'>
          <MultiDateInput />
        </InputColumn>

        <InputColumn comment='관련 링크'>
          <S.DoubleInputs>
            <Input placeholder='이름' />
            <Input placeholder='URL' />
          </S.DoubleInputs>
        </InputColumn>
      </HideableWrapper>

      <S.Hr />

      <S.ButtonWrapper>
        <S.AddButton>
          <Icon.SmallPlus type='outline' /> 추가
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProjectsInput
