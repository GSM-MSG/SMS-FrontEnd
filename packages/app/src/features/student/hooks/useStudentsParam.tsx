import { setParam } from '@store/studentParamSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  toNumberArray,
  toStringArray,
  toString,
  toNumber,
} from '@features/student/lib/TypeConverter'

const useStudentsParam = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!router.query.grade) return

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
    } = router.query

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
  }, [router.query])
}

export default useStudentsParam
