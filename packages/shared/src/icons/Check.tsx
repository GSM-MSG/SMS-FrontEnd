interface Props {
  color?: string
  background?: string
}

const Check = ({ color = '#62636A', background = '#E1E2E4' }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' fill={background} />
    <path
      d='M8.5 12.5L11 15L15.5 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Check
