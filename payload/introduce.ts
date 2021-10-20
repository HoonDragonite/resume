import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 더 나은 사람이 되기 위해 노력하는 이승훈 입니다.',
    '저는 제조업 회사의 전산팀으로 2년간 근무하여 ERP 프로그램과 웹 개발, Troubleshooting, 전산 시스템 관리 업무를 담당했고, 업무 프로세스 개선과 업무 자동화를 통해 업무 효율을 증가시키는 성과를 냈습니다.',
    '관심 있는 기술은 Spring과 RDBMS로, 특히 웹 서비스 개발이 재미있어 꾸준히 개인 프로젝트를 진행하여 학습하고 있고, 작은 서비스를 만들어 직접 운영하는 것을 목표로 하고 있습니다. 저의 목표는 동료들에게 신뢰받고 전문성을 가진 개발자로 성장하는 것입니다.',
    '',
    '👇 저의 핵심 역량입니다.',
    '- Spring Framework 웹 프로젝트 개발 (Mybatis, JPA)',
    '- SQL Server를 이용한 ERP 프로그램 개발 (Procedure, Function, View)',
    '- 자료 분석, 통계 프로그램 개발, 리포팅 툴을 이용한 데이터 시각화',
    '- ERWin, Excel을 사용한 ERD 작성',
    '- SQL Server Profiler를 이용한 DB Trouble Shooting',
  ],
  sign: 'SeungHoon Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
