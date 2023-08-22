interface Props {
  color?: string
}

const ArrowUpRight = ({ color = 'black' }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14 4H20M20 4V10M20 4L12 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ArrowUpRight
