type TypeStyle =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'title1'
  | 'title2'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2'

export type Typography = {
  [key in TypeStyle]: string
}

export const typography: Typography = {
  headline1: 'font-weight: bold; font-size: 2.5rem; line-height: 3rem;',
  headline2: 'font-weight: bold; font-size: 2rem; line-height: 2.375rem;',
  headline3: 'font-weight: bold; font-size: 1.75rem; line-height: 2.125rem;',
  title1: 'font-weight: bold; font-size: 1.25rem; line-height: 1.5rem;',
  title2: 'font-weight: bold; font-size: 1.06rem; line-height: 1.3125rem;',
  body1: 'font-weight: normal; font-size: 0.94rem; line-height: 1.3125rem;',
  body2: 'font-weight: normal; font-size: 0.9rem; line-height: 1.25rem;',
  caption1: 'font-weight: normal; font-size: 0.8rem; line-height: 1.2rem;',
  caption2: 'font-weight: normal; font-size: 0.75rem; line-height: 1.06rem;',
} as const
