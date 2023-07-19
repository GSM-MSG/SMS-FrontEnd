interface Props {
  type?: 'outline'
}

const SmallPlus = ({ type }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='2'
      y='2'
      width='20'
      height='20'
      rx='5'
      fill={type === 'outline' ? 'transparent' : '#E1E2E4'}
    />
    <path
      d='M8 12L16 12M12 16L12 8'
      stroke={type === 'outline' ? 'var(--BLACK)' : '#62636A'}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export default SmallPlus
