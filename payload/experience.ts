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
      descriptions: ['ERP 고도화', '전산 장비/시스템/라이센스 관리, 운영', '전산 관련 Issue 처리'],
      skillKeywords: ['Sql Server', 'ERP', 'MES', 'Java', 'Spring'],
    },
  ],
};

export default experience;
