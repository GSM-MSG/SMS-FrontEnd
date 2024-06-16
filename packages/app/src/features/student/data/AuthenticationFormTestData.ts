import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'

export const AuthenticationFormTestData: AuthenticationFormResDto = {
  files: [
    {
      name: '독후감 파일',
      url: 'https://sms-bucket-104.s3.ap-northeast-2.amazonaws.com/sms-main-server/1.hwp',
    },
    {
      name: '토익 점수표',
      url: 'https://sms-bucket-104.s3.ap-northeast-2.amazonaws.com/sms-main-server/1A00E31F-7B57-4F79-86D3-E7EFAB7F408A_1_102_o.jpeg',
    },
  ],
  contents: [
    {
      title: '전공 영역',
      sections: [
        {
          sectionId: '3ef0c164-jjiowfjeofoiweegoir430b-4afa-9785-8f5ca7b1decf',
          sectionName: 'TOPCIT',
          maxCount: 1,
          fields: [
            {
              fieldId: 'iopuj;e1b05d28-7caa-416a-9c6e-d6ad1b2bb887',
              fieldType: 'TEXT',
              scoreDescription: '취득 점수 * 3.3',
              values: null,
              example: '200점',
            },
          ],
        },
        {
          sectionId: '7gjeroigod9bffc8-caa0-4b65-9465-7f79da375e48',
          sectionName: '교내 대회 및 교육 참가',
          maxCount: 4,
          fields: [
            {
              fieldId: '3a73757b-jltylr35cb-45de-875b-78da8b41970c',
              fieldType: 'FILE',
              scoreDescription:
                'GSM Festival, 교내해커톤 대회, 전공동아리 발표 대회',
              values: null,
              example: '1회당 50점',
            },
            {
              fieldId: '89990ad2-0jljijed1-4f0f-8e6d-fa33bb4e4b5b',
              fieldType: 'FILE',
              scoreDescription: '전공특강(방과후)',
              values: null,
              example: '1회당 5점 최대 4회',
            },
            {
              fieldId: 'oirjd18a109a-377f-4392-ad32-4d3823c8974c',
              fieldType: 'FILE',
              scoreDescription: '전공 관련 방과 후 학교 이수',
              values: null,
              example: '1회당 15점 최대 2회',
            },
          ],
        },
        {
          sectionId: 'a272304aijgoe0o98-6832-485f-b6ea-e7fa964fe075',
          sectionName: '교육 대회 및 교육 참가',
          maxCount: 8,
          fields: [
            {
              fieldId: 'eweuor523b1c3-3887-4206-a05f-8a8456aed5b6',
              fieldType: 'FILE',
              scoreDescription:
                '공문을 통한 전공분야 대회, 전공 분야 대회 개별 참여, 연합해커톤, 전공 관련 교육프로그램(특강,연수,세미나)',
              values: null,
              example: '1회당 25점 최대 8회 참여',
            },
          ],
        },
        {
          sectionId: 'ahrpjokib4a7327-0d95-4ed5-af03-c9da3fa98f68',
          sectionName: '자격증',
          maxCount: 6,
          fields: [
            {
              fieldId: 'lili7ad9e408-d7ca-49a4-a1d7-a2c599c27bd0',
              fieldType: 'TEXT',
              scoreDescription: '자격증 1개당 50점',
              values: null,
              example: '리눅스 마스터 2급',
            },
          ],
        },
        {
          sectionId: 'aba2519djhoitrorij-370d-4f89-a007-8f0a0f0f90a8',
          sectionName: '수상경력',
          maxCount: 6,
          fields: [
            {
              fieldId: 'Ne02li536e1-e575-4176-928d-a116327e9f21',
              fieldType: 'TEXT',
              scoreDescription: '1개당 50점',
              values: null,
              example: 'GSM Festival 우수상',
            },
          ],
        },
        {
          sectionId: 'fjoighejoigjroe08dee6-2374-4df6-b67a-cc2ea2faa3cb',
          sectionName: '동아리',
          maxCount: 2,
          fields: [
            {
              fieldId: 'jljoic8098cdb-4345-43b0-84c0-cdf64c986369',
              fieldType: 'BOOLEAN',
              scoreDescription: '1학기',
              values: [
                {
                  selectId: '6dda88a2-08b8-44e3-8d01-9e5508bda8a7',
                  value: '참여하지않음',
                },
                {
                  selectId: '7bb94d18-272a-4129-9606-74d7ff40d227',
                  value: '참여',
                },
              ],
              example: '맛소금',
            },
            {
              fieldId: 'ej;opij2263b02-d5c2-46ec-a887-c076f9f62790',
              fieldType: 'BOOLEAN',
              scoreDescription: '2학기',
              values: [
                {
                  selectId: 'd04e1af6-3ad3-40d4-9008-cfa71ad87b91',
                  value: '참여하지않음',
                },
                {
                  selectId: 'f86ad107-ae88-4d73-bb60-3a805b4f836d',
                  value: '참여',
                },
              ],
              example: '깨소금',
            },
          ],
        },
      ],
    },
    {
      title: '외국어 영역',
      sections: [
        {
          sectionId:
            'fjgeorigjeroigj3b206bf-iojerogijeoe062-46ec-b785-a9ce0b19d947',
          sectionName: '공인인증시험',
          maxCount: 1,
          fields: [
            {
              fieldId: '0sdfsdf333a0c0-a53c-429b-8629-dbe7e34f877a',
              fieldType: 'BOOLEAN',
              scoreDescription: '토익사관학교 참여 100점',
              values: [
                {
                  selectId: '5f358c88-a860-4788-80aa-c87ea31fd4c1',
                  value: '참여하지않음',
                },
                {
                  selectId: 'caf031fe-4cc9-4928-9171-e424dc68e906',
                  value: '참여',
                },
              ],
              example: '100점',
            },
            {
              fieldId: 'sdfsdf93ee5b0f-e8c7-437a-86fd-41c8457dcad8',
              fieldType: 'SELECT',
              scoreDescription: '0~500점',
              values: [
                {
                  selectId: '3d8113a7-1d0b-4201-962b-a276692770a7',
                  value: 'TOEFL',
                },
                {
                  selectId: '49eb4833-37ca-45f8-a3c1-e3f47cec407e',
                  value: 'TOEIC',
                },
                {
                  selectId: '55a48ade-21c1-4bd1-8ec1-19d3e9146694',
                  value: 'TEPS',
                },
                {
                  selectId: '9b95f751-6e18-4c76-b56a-d2fb8312d2de',
                  value: 'HSK',
                },
                {
                  selectId: 'cc60b9fa-9b4e-4360-b47d-bf542d53dc08',
                  value: 'TOEIC Speaking',
                },
                {
                  selectId: 'e01b3378-89da-458d-98c4-bac2deeec8f1',
                  value: 'CPT',
                },
                {
                  selectId: 'e9503f83-67d0-4e6b-b663-a3198b9eb727',
                  value: 'OPIC',
                },
                {
                  selectId: 'eed46c8b-3c65-4d6d-9cf1-024ba20d7f64',
                  value: 'JPT',
                },
              ],
              example: '최대 500점 세부기준 참고',
            },
          ],
        },
      ],
    },
    {
      title: '인문 인성 영역',
      sections: [
        {
          sectionId: '4jgoerigjeorgjo4187e96-1799-4f1c-b25b-b7bfbba21595',
          sectionName: '봉사',
          maxCount: 2,
          fields: [
            {
              fieldId: '2c7bsdfscdff-c6c3-460d-9b8f-db6a3fe930ce',
              fieldType: 'TEXT',
              scoreDescription: '봉사동아리(에너지지킴이 등)',
              values: null,
              example: '학기당 50점 최대 100점',
            },
            {
              fieldId: '7sdf0745be2-019c-4e08-afda-f526b7f27611',
              fieldType: 'TEXT',
              scoreDescription: '봉사활동(교육과정의 봉사활동 제외)',
              values: null,
              example: '20시간',
            },
          ],
        },
        {
          sectionId: '4jgoegreojgeoi4671bc2-eebe-414c-8af7-ded0693cbb88',
          sectionName: '수상경력',
          maxCount: 4,
          fields: [
            {
              fieldId: 'b4f75a9d-d52e-497e-855b-b9667b3631b8',
              fieldType: 'TEXT',
              scoreDescription: '1회당 50점 최대 4회',
              values: null,
              example: '인성영역관련수상',
            },
          ],
        },
        {
          sectionId: 'joghoioiehi62e73871-0181-4f0f-9f9f-49043f40316b',
          sectionName: '독서활동',
          maxCount: 1,
          fields: [
            {
              fieldId: '918a9a70-f18a-4asd87-b2cf-f8a8201296e4',
              fieldType: 'SELECT',
              scoreDescription: '1회당 50점 최대 4회',
              values: [
                {
                  selectId: '6c7389be-99da-438a-8cab-36619d04728b',
                  value: '거북이코스',
                },
                {
                  selectId: 'd60f8879-a438-43f3-a7e1-8cddf053a26c',
                  value: '악어코스',
                },
                {
                  selectId: 'f126df8d-4bd4-4231-8b0f-4fa164bd3a03',
                  value: '토끼코스 이상',
                },
              ],
              example: '인성영역관련수상',
            },
            {
              fieldId: 'd2dcec48-49b7-4f22-bebe-2253ecab5aa2',
              fieldType: 'FILE',
              scoreDescription: '전공서적 및 일반서적(양식작성 후 등록)',
              values: null,
              example: '학교지정도서 권장',
            },
          ],
        },
        {
          sectionId: '9gjieooirj026fb9e-3fce-4b52-ba4b-7a51ae9f2619',
          sectionName: '활동영역',
          maxCount: 8,
          fields: [
            {
              fieldId: 'fsdf7399ad3-b282-4af7-8a34-18424cdc83e3',
              fieldType: 'TEXT',
              scoreDescription:
                '회사정보 탐색 및 취업준비를 위한 자기주도적 활동,단축 마라톤, 교내스포츠리그, 교육감배 학교 스포츠 클럽 대회 참여 등 체육활동, 기타 문화혜술 관련 활동 등에 참여하고 활동일지를 작성한 경우 1회당 25점 최대 8회',
              values: null,
              example: '회사정보 탐색 및 취업준비를 위한 자기주도적 활동',
            },
          ],
        },
        {
          sectionId: '9gjieooirj026fb9numbere-3fce-4b52-ba4b-7a51ae9f2619',
          sectionName: '일단 숫자 넣으셈',
          maxCount: 8,
          fields: [
            {
              fieldId: 'fsdf7399awfoijwo3-b282-4af7-8a34-18424cdc83e3',
              fieldType: 'NUMBER',
              scoreDescription: '일단 숫자 넣으셈',
              values: null,
              example: '숫자숫자숫자',
            },
          ],
        },
        {
          sectionId: '93483dacsjoigejoeigr-b668-415b-b775-383a9b84f7cf',
          sectionName: '자격증 취득',
          maxCount: 1,
          fields: [
            {
              fieldId: '1sdfefb77f0-ea89-4de3-8a7b-c12f725066f7',
              fieldType: 'BOOLEAN',
              scoreDescription: '한자 자격증 4급 이상',
              values: [
                {
                  selectId: '92d7e0b6-2cdd-4c22-a244-1b44659ab0ea',
                  value: '4급 이하',
                },
                {
                  selectId: 'c3d9dbda-c79d-45b3-b44a-ef815c952f63',
                  value: '4급 이상',
                },
              ],
              example: '4급 이상 50점',
            },
            {
              fieldId: '3e10f3c2-sdf6902-44e4-9f13-75bc9c7fe75c',
              fieldType: 'BOOLEAN',
              scoreDescription: '한국사 3급 이상 50점',
              values: [
                {
                  selectId: '0eacd79d-013d-4542-8e85-8926ae979628',
                  value: '3급 이상',
                },
                {
                  selectId: 'de71246e-ba7a-4ed6-ae2e-7e0ee2a537fb',
                  value: '3급 이하',
                },
              ],
              example: '3급 이상 50점',
            },
          ],
        },
      ],
    },
  ],
}
