interface Props {
  color?: 'black' | 'white'
}

const XMarkOutline = ({ color = 'black' }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.05066 16.9502L16.9502 7.05074M16.948 16.9515L7.04854 7.05205'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default XMarkOutline
