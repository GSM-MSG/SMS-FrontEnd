import styled from '@emotion/styled'

export const Input = styled.input`
  ${({ theme }) => theme.body1}
  background: transparent;
  border: none;
  width: 100%;
  position: relative;
  padding: 0.75rem;
  background: var(--N10);
  color: var(--N30);
  border-radius: 0.5rem;
  outline: none;

  :not(.has-value)::before {
    color: var(--N30);
    content: attr(placeholder);
  }

  ::after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    background: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_6128_6868)"><path d="M21 8.72222V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8.72222M21 8.72222V7C21 5.34314 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7V8.72222M21 8.72222H3M15.6 15.3333V17.2222H17.4V15.3333H15.6Z" stroke="%2362636A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3V4" stroke="%2362636A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 3V4" stroke="%2362636A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_6128_6868"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>');
  }

  :not(.has-value)::-webkit-datetime-edit-month-field {
    -webkit-appearance: none;
    display: none;
  }
  :not(.has-value)::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: none;
  }
  :not(.has-value)::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
