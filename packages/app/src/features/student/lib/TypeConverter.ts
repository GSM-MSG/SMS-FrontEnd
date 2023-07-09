type ValueType = string | string[] | undefined

export const toNumberArray = (value: ValueType) => {
  if (!value) return []
  else if (typeof value === 'string') return [+value]
  return value.map((i) => +i)
}

export const toNumber = (value: ValueType) => {
  if (!value) return
  else if (typeof value === 'string') return +value
  return +value[0]
}

export const toStringArray = <T>(value: ValueType): T[] => {
  if (!value) return []
  else if (typeof value === 'string') return [value as T]
  return value as T[]
}

export const toString = <T>(value: ValueType): T | undefined => {
  if (!value) return
  else if (typeof value === 'string') return value as T
  return value[0] as T
}
