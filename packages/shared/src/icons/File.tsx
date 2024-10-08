interface Props {
  fill?: string
}

const File = ({ fill = '#62636A' }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 4C4 2.89543 4.89543 2 6 2H13.5858C14.1162 2 14.6249 2.21071 15 2.58579L19.4142 7C19.7893 7.37507 20 7.88378 20 8.41421V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM13 4H6V20H18V9H15C13.8954 9 13 8.10457 13 7V4ZM15 5.41421V7H16.5858L15 5.41421ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13ZM8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z'
        fill={fill}
      />
    </svg>
  )
}

export default File
