import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export type ErrorsType =
  | Merge<
      FieldError,
      (
        | Merge<
            FieldError,
            FieldErrorsImpl<{
              languageCertificateName: string
              score: string
            }>
          >
        | undefined
      )[]
    >
  | undefined
