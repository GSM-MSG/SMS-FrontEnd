interface Props {
  fill?: string
}

const ArrowDown = ({ fill = 'black' }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6 9.5L12 15.5L18 9.5'
      stroke={fill}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ArrowDown
