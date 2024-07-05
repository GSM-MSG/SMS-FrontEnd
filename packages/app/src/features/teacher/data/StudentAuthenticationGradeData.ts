import { StudentAuthenticationInfoResDto } from '@features/teacher/dtos/res/StudentAuthenticationInfoResDto'

export const StudentAuthenticationGradeData: StudentAuthenticationInfoResDto = {
  markingBoardId: 1,
  title: '이현빈 1304',
  content: [
    {
      areaId: 1,
      areaTitle: '수상경력',
      sections: [
        {
          sectionId: 1,
          sectionName: '교외',
          maxCount: 10,
          groups: [
            {
              groupId: 1,
              maxScore: 100,
              fields: [
                {
                  setId: 1,
                  values: [
                    {
                      fieldId: 1,
                      value: '전공분야 대회',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 2,
                  values: [
                    {
                      fieldId: 1,
                      value: '대화 개별 참여',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          sectionId: 1,
          sectionName: '교내',
          maxCount: 10,
          groups: [
            {
              groupId: 2,
              maxScore: 100,
              fields: [
                {
                  setId: 3,
                  values: [
                    {
                      fieldId: 2,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 4,
                  values: [
                    {
                      fieldId: 2,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 5,
                  values: [
                    {
                      fieldId: 2,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 6,
                  values: [
                    {
                      fieldId: 2,
                      value: '교내 해커톤',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 7,
                  values: [
                    {
                      fieldId: 2,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                    {
                      fieldId: 3,
                      value: '참여',
                      fieldType: 'BOOLEAN', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
              ],
            },
            {
              groupId: 3,
              maxScore: 100,
              fields: [
                {
                  setId: 8,
                  values: [
                    {
                      fieldId: 3,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 9,
                  values: [
                    {
                      fieldId: 3,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 10,
                  values: [
                    {
                      fieldId: 3,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 11,
                  values: [
                    {
                      fieldId: 3,
                      value: '교내 해커톤',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
                {
                  setId: 12,
                  values: [
                    {
                      fieldId: 3,
                      value: 'GSM Festival',
                      fieldType: 'TEXT', //SELECT, BOOLEAN 등등
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
