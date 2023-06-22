interface Props {
  color?: string
  background?: string
}

const ExclamationMark = ({
  color = '#62636A',
  background = '#e1e2e4',
}: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' fill={background} />
    <path
      d='M12 12.5V7.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 16.5L12 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ExclamationMark
