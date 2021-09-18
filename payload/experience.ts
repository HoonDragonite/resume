import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '한라엔컴',
      position: '전산팀',
      startedAt: '2019-08',
      endedAt: '2021-09',
      descriptions: [
        'ERP/MES 고도화, Troubleshooting',
        '전산 장비(PC, 서버), 홈페이지/그룹웨어 관리',
        '전산 라이센스 관리',
      ],
      skillKeywords: ['Sql Server', 'MySql', 'Java', 'Spring MVC', 'HTML/CSS'],
    },
  ],
};

export default experience;
