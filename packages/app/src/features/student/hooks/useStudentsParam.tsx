import { ParsedUrlQuery } from 'querystring'
import { setParam } from '@store/studentParamSlice'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  toNumberArray,
  toStringArray,
  toString,
  toNumber,
} from '@features/student/lib/TypeConverter'
import { RootState } from '@store'

interface Props {
  query: ParsedUrlQuery
}

const useStudentsParam = ({ query }: Props) => {
  const dispatch = useDispatch()
  const { studentParam } = useSelector((state: RootState) => ({
    studentParam: state.studentParam,
  }))

  useLayoutEffect(() => {
    if (studentParam.isReady) return

    const {
      grade,
      majors,
      classNum,
      department,
      techStacks,
      formOfEmployment,
      salarySort,
      minSalary,
      maxSalary,
      stuNumSort,
      maxGsmAuthenticationScore,
      minGsmAuthenticationScore,
      gsmAuthenticationScoreSort,
    } = query

    dispatch(
      setParam({
        grade: toNumberArray(grade),
        majors: toStringArray(majors),
        classNum: toNumberArray(classNum),
        department: toStringArray(department),
        techStacks: toStringArray(techStacks),
        formOfEmployment: toStringArray(formOfEmployment),
        salarySort: toString(salarySort),
        minSalary: toNumber(minSalary),
        maxSalary: toNumber(maxSalary),
        stuNumSort: toString(stuNumSort),
        maxGsmAuthenticationScore: toNumber(maxGsmAuthenticationScore),
        minGsmAuthenticationScore: toNumber(minGsmAuthenticationScore),
        gsmAuthenticationScoreSort: toString(gsmAuthenticationScoreSort),
      })
    )
  }, [query])
}

export default useStudentsParam
