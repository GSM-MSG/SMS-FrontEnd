import '@emotion/react'

import { Typograpy } from '@/theme/typograpy'

declare module '@emotion/react' {
  export interface Theme extends Typograpy {}
}
