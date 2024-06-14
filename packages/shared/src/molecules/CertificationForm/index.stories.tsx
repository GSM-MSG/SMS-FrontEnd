import React from 'react'
import { Meta } from '@storybook/react'
import { Input } from '../../atoms'
import CertificationForm from './index'

const config: Meta<typeof CertificationForm> = {
  title: 'CertificationForm',
  component: CertificationForm,
}

export default config

export const Primary = () => {
  return (
    <CertificationForm>
      <CertificationForm.Header onClose={() => {}}>
        <CertificationForm.Title>Test Form</CertificationForm.Title>
      </CertificationForm.Header>
      <CertificationForm.Field label='Test Field'>
        <Input placeholder='Text' />
      </CertificationForm.Field>
      <CertificationForm.Field label='Test Field'>
        <Input placeholder='Text' />
      </CertificationForm.Field>
      <CertificationForm.Field label='Test Field'>
        <Input placeholder='Text' />
      </CertificationForm.Field>
      <CertificationForm.Field label='Test Field'>
        <Input placeholder='Text' />
      </CertificationForm.Field>
      <CertificationForm.Field label='Test Field'>
        <Input placeholder='Text' />
      </CertificationForm.Field>
    </CertificationForm>
  )
}
