interface Props {
  color?: string
}

const Bag = ({ color = '#62636A' }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 18V9.00024C2 7.89572 2.89536 7.00031 3.99988 7.00024L7.55844 7.00003L16.4444 7L20.0001 7.00021C21.1046 7.00028 22 7.89569 22 9.00021V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18Z'
        fill='#E1E2E4'
      />
      <path
        d='M18 11L16 11.5L12.2425 12.4394C12.0833 12.4792 11.9167 12.4792 11.7575 12.4394L8 11.5L6 11'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M15 7V6C15 5.44772 14.5523 5 14 5H10C9.44772 5 9 5.44772 9 6V7'
        stroke={color}
        strokeWidth='2'
      />
    </svg>
  )
}

export default Bag
