type ParamType = Record<string, string | number | string[] | number[]>

const toQueryString = (param: ParamType) => {
  const keys = Object.keys(param)

  const queryString = keys
    .map((key) => {
      const value = param[key]

      if (Array.isArray(value)) {
        if (value.length <= 0) return
        if (value.length === 1) return `${key}=${value[0]}`
        return `${key}=${value.join(`&${key}=`)}`
      }

      return `${key}=${value}`
    })
    .filter((value) => value)

  return `?${queryString.join('&')}`
}

export default toQueryString
