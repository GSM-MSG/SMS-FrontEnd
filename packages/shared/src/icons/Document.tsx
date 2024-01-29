interface Props {
  color?: string
}

const Document = ({ color = '#62636A' }: Props) => (
  <svg
    width='18'
    height='22'
    viewBox='0 0 18 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.5' y='0.75' width='17' height='20.5' rx='4' fill='#E1E2E4' />
    <rect x='4.5' y='5.75' width='9' height='1.5' rx='0.75' fill={color} />
    <rect x='4.5' y='10.25' width='9' height='1.5' rx='0.75' fill={color} />
    <rect x='4.5' y='14.75' width='9' height='1.5' rx='0.75' fill={color} />
  </svg>
)

export default Document
