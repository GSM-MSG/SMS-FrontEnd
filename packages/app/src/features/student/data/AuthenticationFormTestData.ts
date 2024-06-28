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
          sectionId: '87e93344-51cc-4bdb-b8d7-2fa98825a0dc',
          sectionName: '동아리',
          maxCount: 2,
          groups: [
            {
              groupId: '13ba9e66-3c2b-4d3e-8866-a5276625913b',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: '010c1aea-e068-4a16-b0d6-88bb9fefd0ba',
                  fieldType: 'BOOLEAN',
                  scoreDescription: '1학기',
                  values: [
                    {
                      selectId: '62fbfa75-a7a0-4630-9b58-5c723a14aefd',
                      value: '참여',
                    },
                    {
                      selectId: 'f8c1c2c2-6ac8-4d8b-bb43-975de4a2cc50',
                      value: '참여하지않음',
                    },
                  ],
                  example: '맛소금',
                },
              ],
            },
            {
              groupId: 'cf21c2d5-1b45-4e00-b2e3-2b09db5e321b',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: '6f8c4973-e39a-454a-83f5-5f9c56b68613',
                  fieldType: 'BOOLEAN',
                  scoreDescription: '2학기',
                  values: [
                    {
                      selectId: '6653c84d-a0d1-485a-bc8e-72dc9b178aef',
                      value: '참여하지않음',
                    },
                    {
                      selectId: 'a6bb42a3-3b5e-4a6b-99d1-a8408c25c22e',
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
          sectionId: '98f77a90-bcc4-4281-958f-006bf52fbd88',
          sectionName: '교육 대회 및 교육 참가',
          maxCount: 8,
          groups: [
            {
              groupId: 'ae7b7554-f7bd-4d92-a220-d20b0aecf16b',
              maxScore: 200.0,
              fields: [
                {
                  fieldId: '0fce58f3-02d8-430e-9043-f6119a7fef73',
                  fieldType: 'FILE',
                  scoreDescription:
                    '공문을 통한 전공분야 대회, 전공 분야 대회 개별 참여, 연합해커톤, 전공 관련 교육프로그램(특강,연수,세미나)',
                  values: null,
                  example: '1회당 25점 최대 8회 참여',
                },
              ],
            },
          ],
        },
        {
          sectionId: '9e071a51-f1b5-4950-a823-9dbeedba54e9',
          sectionName: '교내 대회 및 교육 참가',
          maxCount: 4,
          groups: [
            {
              groupId: '5bda6f63-766a-46ff-89d9-1da3114e759a',
              maxScore: 200.0,
              fields: [
                {
                  fieldId: 'a777e365-7094-473f-9458-2c9b3b13d41a',
                  fieldType: 'FILE',
                  scoreDescription:
                    'GSM Festival, 교내해커톤 대회, 전공동아리 발표 대회',
                  values: null,
                  example: '1회당 50점',
                },
              ],
            },
            {
              groupId: 'd35d5cbd-d78d-45de-ad1e-4c37c5b7c768',
              maxScore: 30.0,
              fields: [
                {
                  fieldId: '9820a048-972a-4eb4-ad2b-e970226e118f',
                  fieldType: 'FILE',
                  scoreDescription: '전공 관련 방과 후 학교 이수',
                  values: null,
                  example: '1회당 15점 최대 2회',
                },
              ],
            },
            {
              groupId: 'e4c45a4e-ba28-45c0-8308-07a4816b3804',
              maxScore: 20.0,
              fields: [
                {
                  fieldId: '2ac5ce90-baf6-45b2-87b7-1ae75b24f6be',
                  fieldType: 'FILE',
                  scoreDescription: '전공특강(방과후)',
                  values: null,
                  example: '1회당 5점 최대 4회',
                },
              ],
            },
          ],
        },
        {
          sectionId: 'cbb711b5-92c0-4da0-882c-4003df25fc63',
          sectionName: '수상경력',
          maxCount: 6,
          groups: [
            {
              groupId: 'b4fae8ef-1ccb-42ef-a210-8c424ab72328',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: '95188dd9-3ef1-41d7-96c6-398a15a73321',
                  fieldType: 'TEXT',
                  scoreDescription: '1개당 50점',
                  values: null,
                  example: 'GSM Festival 우수상',
                },
              ],
            },
          ],
        },
        {
          sectionId: 'cf8554a8-2fbe-42f2-9339-9197787ba3d9',
          sectionName: '자격증',
          maxCount: 6,
          groups: [
            {
              groupId: 'deaf5910-a7eb-4760-9c34-6649472dc43a',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: '3b88aead-da5f-4adc-b14f-c4e1db88c8e5',
                  fieldType: 'TEXT',
                  scoreDescription: '자격증 1개당 50점',
                  values: null,
                  example: '리눅스 마스터 2급',
                },
              ],
            },
          ],
        },
        {
          sectionId: 'd6fe861b-587d-49ba-8c80-1c977c05c049',
          sectionName: 'TOPCIT',
          maxCount: 1,
          groups: [
            {
              groupId: 'dc64118b-6daf-418b-ad1c-c9d8be56d3af',
              maxScore: 660.0,
              fields: [
                {
                  fieldId: '061be17d-2ae0-485d-8154-e1918eb2409d',
                  fieldType: 'TEXT',
                  scoreDescription: '취득 점수 * 3.3',
                  values: null,
                  example: '200점',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '외국어 영역',
      sections: [
        {
          sectionId: 'ff7c0bf6-e111-4fbf-a66f-a3a054874a40',
          sectionName: '공인인증시험',
          maxCount: 1,
          groups: [
            {
              groupId: 'a8d19d36-a101-4901-a37f-6ca0cb5f4767',
              maxScore: 500.0,
              fields: [
                {
                  fieldId: '8b223858-a5be-4a2e-8142-49d83c6ca564',
                  fieldType: 'SELECT',
                  scoreDescription: '0~500점',
                  values: [
                    {
                      selectId: '2dd49b56-c17e-4e90-87b5-f51ae618cfaf',
                      value: 'TOEIC Speaking',
                    },
                    {
                      selectId: '3bb9d285-4a52-47c8-b351-deefcee112ed',
                      value: 'CPT',
                    },
                    {
                      selectId: '40a36338-7414-49b0-9d7b-bb3b40db2e79',
                      value: 'TOEFL',
                    },
                    {
                      selectId: '46d42d25-9621-431c-806e-3bafbc161947',
                      value: 'JPT',
                    },
                    {
                      selectId: '9fe5b3d7-6b55-4ae8-b0c4-1bb10620f5d9',
                      value: 'TOEIC',
                    },
                    {
                      selectId: 'b665e806-9e53-46ac-8467-ba6ec3488956',
                      value: 'OPIC',
                    },
                    {
                      selectId: 'c568d195-150f-47e5-9637-aee901d52e88',
                      value: 'HSK',
                    },
                    {
                      selectId: 'd4470ade-5b56-4481-bd34-62268c61cecb',
                      value: 'TEPS',
                    },
                  ],
                  example: '최대 500점 세부기준 참고',
                },
              ],
            },
            {
              groupId: 'd3317a85-e255-407e-aac4-7779b3670ed7',
              maxScore: 100.0,
              fields: [
                {
                  fieldId: '6f3b39eb-84ed-408b-bc46-5a209e530447',
                  fieldType: 'BOOLEAN',
                  scoreDescription: '토익사관학교 참여 100점',
                  values: [
                    {
                      selectId: '4c86f938-53df-4179-a9f4-070af29e9c07',
                      value: '참여',
                    },
                    {
                      selectId: 'b2223a89-c40e-4e47-9535-ec072656bfbe',
                      value: '참여하지않음',
                    },
                  ],
                  example: '100점',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '인문 인성 영역',
      sections: [
        {
          sectionId: '1f2ee616-3c68-4218-81ac-a7af785e3c05',
          sectionName: '수상경력',
          maxCount: 4,
          groups: [
            {
              groupId: 'bc5d431d-1a8b-4952-a78a-84c49b1dbf7f',
              maxScore: 200.0,
              fields: [
                {
                  fieldId: '6e0c94ce-a972-4439-b438-c282bd0eda95',
                  fieldType: 'TEXT',
                  scoreDescription: '1회당 50점 최대 4회',
                  values: null,
                  example: '인성영역관련수상',
                },
              ],
            },
          ],
        },
        {
          sectionId: '372c5004-6f5f-40ec-a073-606bb19055cf',
          sectionName: '활동영역',
          maxCount: 8,
          groups: [
            {
              groupId: '6ed67f03-b631-4702-85c9-310061116b87',
              maxScore: 200.0,
              fields: [
                {
                  fieldId: 'baa1a927-5116-48e7-b56e-d57aa7a12ae9',
                  fieldType: 'TEXT',
                  scoreDescription:
                    '회사정보 탐색 및 취업준비를 위한 자기주도적 활동, 단축 마라톤, 교내스포츠리그, 교육감배 학교 스포츠 클럽 대회 참여 등 체육활동, 기타 문화예술 관련 활동 등에 참여하고 활동일지를 작성한 경우 1회당 25점 최대 8회',
                  values: null,
                  example: '회사정보 탐색 및 취업준비를 위한 자기주도적 활동',
                },
              ],
            },
          ],
        },
        {
          sectionId: '4e6ac752-abf8-4e61-bd64-4e76809df003',
          sectionName: '독서활동',
          maxCount: 1,
          groups: [
            {
              groupId: '7476d434-11ee-4ca6-9318-1226ca594709',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: 'b49fe75e-f59d-45c8-8a78-2c75cb7b2e3b',
                  fieldType: 'FILE',
                  scoreDescription: '전공서적 및 일반서적(양식작성 후 등록)',
                  values: null,
                  example: '학교지정도서 권장',
                },
              ],
            },
            {
              groupId: 'f77045e8-79e0-46cb-b0da-546e23014cb2',
              maxScore: 200.0,
              fields: [
                {
                  fieldId: 'd4db405b-b5ca-4d54-a344-292a8882b453',
                  fieldType: 'SELECT',
                  scoreDescription: '1회당 50점 최대 4회',
                  values: [
                    {
                      selectId: '8e4854a3-3344-4496-b723-170b6a7097ed',
                      value: '거북이코스',
                    },
                    {
                      selectId: '9fb468f3-93b2-45a8-82ed-02e7e08ee108',
                      value: '토끼코스 이상',
                    },
                    {
                      selectId: 'fa449433-d9ef-43ed-9a67-87a84eb10a81',
                      value: '악어코스',
                    },
                  ],
                  example: '인성영역관련수상',
                },
              ],
            },
          ],
        },
        {
          sectionId: '81e7be8c-9143-44e4-965e-1c9e379252d0',
          sectionName: '봉사',
          maxCount: 2,
          groups: [
            {
              groupId: '16facd35-9d2e-4190-a70e-a1f5c37c4f3b',
              maxScore: 100.0,
              fields: [
                {
                  fieldId: 'a77765d1-b5ff-4f70-95b3-505a9ea82276',
                  fieldType: 'TEXT',
                  scoreDescription: '봉사동아리(에너지지킴이 등)',
                  values: null,
                  example: '학기당 50점 최대 100점',
                },
              ],
            },
            {
              groupId: 'c49fc7e8-97f3-4810-a997-935ed7d59297',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: 'aab4e19c-7faf-4146-9a94-8b74d6a85fc0',
                  fieldType: 'TEXT',
                  scoreDescription: '봉사활동(교육과정의 봉사활동 제외)',
                  values: null,
                  example: '20시간',
                },
              ],
            },
          ],
        },
        {
          sectionId: 'ce28247a-e315-431a-b0c3-a5cf8802978e',
          sectionName: '자격증 취득',
          maxCount: 1,
          groups: [
            {
              groupId: '2382f1f8-881e-4c80-b5ef-ae7596484b8d',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: '6d183697-7e6e-40ed-8266-0ae843632a10',
                  fieldType: 'BOOLEAN',
                  scoreDescription: '한자 자격증 4급 이상',
                  values: [
                    {
                      selectId: '080fd8e5-ab3a-47c3-8921-0f28ff6723c8',
                      value: '4급 이상',
                    },
                    {
                      selectId: 'aecb6d1a-b5d7-4054-a19b-d6765dbdd0a2',
                      value: '4급 이하',
                    },
                  ],
                  example: '4급 이상 50점',
                },
              ],
            },
            {
              groupId: '92c28e46-b331-4935-8456-2f782b0a49a9',
              maxScore: 50.0,
              fields: [
                {
                  fieldId: '9c0c9592-33e2-40c5-9cf4-795aad6037d8',
                  fieldType: 'BOOLEAN',
                  scoreDescription: '한국사 3급 이상 50점',
                  values: [
                    {
                      selectId: '982a731a-ec47-4561-8084-ee5711aca97a',
                      value: '3급 이하',
                    },
                    {
                      selectId: 'e646880c-8c4d-4aec-b88c-d04b5845cd81',
                      value: '3급 이상',
                    },
                  ],
                  example: '3급 이상 50점',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
