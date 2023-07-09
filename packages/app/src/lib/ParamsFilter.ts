type Any = any

const FilterValue: Record<string, number | string> = {
  minGsmAuthenticationScore: 0,
  maxGsmAuthenticationScore: 990,
  maxSalary: 9999,
  minSalary: 0,
  salarySort: 'ASCENDING',
  stuNumSort: 'ASCENDING',
  gsmAuthenticationScoreSort: 'ASCENDING',
}

/**
 * query string에 들어갈 params들 중에 빈값을 걸러내는 함수입니다
 */
const ParamsFilter = (params: Record<string, Any>) => {
  return Object.keys(params).reduce((pre, cur) => {
    if (FilterValue[cur] === params[cur]) return pre

    if (typeof params[cur] === 'string' || typeof params[cur] === 'number')
      pre[cur] = params[cur]
    else if (Array.isArray(params[cur]))
      pre[cur] = params[cur].filter((i: Any) => i)

    return pre
  }, {} as Record<string, Any>)
}

export default ParamsFilter
