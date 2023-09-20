import { Checkbox, SkeletonText } from '@sms/shared'
import CheckboxSection from '@features/student/atoms/CheckboxSection'
import useMajorAutoComplete from '@features/register/hooks/useMajorAutoComplete'
import { UseFormWatch } from 'react-hook-form'

interface Props {
  onClickMajor(major: string): void
  watch: UseFormWatch<StudentParam>
}

const MajorListSection = ({ onClickMajor, watch }: Props) => {
  const { majorList, isLoading } = useMajorAutoComplete()

  return (
    <CheckboxSection isShow={true} title='분야'>
      {isLoading &&
        Array(...Array(10)).map((_, i) => (
          <Checkbox key={i}>
            <SkeletonText width={`${i + 1}0%`} />
          </Checkbox>
        ))}

      {!isLoading &&
        [...(majorList || []), '기타']?.map((major) => (
          <Checkbox
            key={major}
            value={major}
            onClick={() => onClickMajor(major)}
            checked={watch('majors')?.includes(major)}
            readOnly
          >
            {major}
          </Checkbox>
        ))}
    </CheckboxSection>
  )
}

export default MajorListSection
