import { OptionsType } from '@sms/shared'

const MajorList = [
  'Frontend',
  'Backend',
  'Android',
  'iOS',
  'Game',
  'Cyber Security',
  'Design',
  'AI',
  'IoT',
].reduce((pre, cur) => {
  pre[cur] = cur
  return pre
}, {} as OptionsType)

export default MajorList
