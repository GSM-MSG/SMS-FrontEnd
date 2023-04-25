import '@emotion/react'

import { Typography } from '../style/typography'

declare module '@emotion/react' {
  export interface Theme extends Typography {}
}
