interface Props {
  color?: string
}

const Person = ({ color = '#62636A' }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5Z'
      fill={color}
    />
    <path
      d='M3 18C3 15.2386 5.23858 13 8 13H16C18.7614 13 21 15.2386 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18Z'
      fill='#E1E2E4'
    />
  </svg>
)

export default Person
