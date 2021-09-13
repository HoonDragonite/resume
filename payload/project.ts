import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ERP/MES 고도화',
      startedAt: '2020-04',
      endedAt: '2021-09',
      where: '한라엔컴',
      descriptions: [
        {
          content: 'ERP 품질관리 시스템 고도화',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기술연구소과 협의하여 K-System(ERP) 내 품질관리 시스템 고도화' },
            {
              content: '기존 SP 수정, 신규 프로그램 SP 개발, 자료 분석/통계 화면 개발',
            },
          ],
        },
        {
          content: '신규 품질관리(QC) WPF 프로젝트 UI/UX 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: 'WPF MVVM 패턴을 적용하여 메뉴, 탭 기반 프로그램 UI/UX 개발' }],
        },
      ],
    },
    {
      title: '모바일 출하관리 웹페이지 개발',
      startedAt: '2020-02',
      endedAt: '2020-03',
      where: '한라엔컴',
      descriptions: [{ content: '기존 Spring MVC 프로젝트에 기간별 생산자료 집계 화면 개발' }],
    },
    {
      title: '인사평가 시스템 개발',
      startedAt: '2019-11',
      endedAt: '2020-01',
      where: '한라엔컴',
      descriptions: [
        { content: '인사팀과 협업하여 인사평가 시스템 설계/개발 후 ERP 도입' },
        { content: '추가로 인사평가 진행 후 평가 결과를 집계/조회하는 화면 개발' },
        { content: '매년 약 250명 전직원 대상으로 시스템 운영' },
      ],
    },
    {
      title: 'Limited Edition Assemble',
      startedAt: '2021-08',
      where: '개인 프로젝트',
      descriptions: [
        { content: 'AWS EC2, RDS 환경에서 Spring Boot를 학습하기 위한 프로젝트' },
        { content: 'JPA, MySql, CI/CD, Redis 사용' },
      ],
    },
    {
      title: '너의 생각은',
      startedAt: '2019-02',
      endedAt: '2019-08',
      where: '팀 프로젝트(졸업 프로젝트)',
      descriptions: [
        { content: '도서관 정보나루 API를 이용한 도서 랭킹 조회 기능 개발' },
        { content: 'Firebase Real-Time Db(NoSql)를 이용한 채팅 기능 개발' },
      ],
    },
    {
      title: '자리있니',
      startedAt: '2018-09',
      endedAt: '2018-10',
      where: '개인 프로젝트',
      descriptions: [
        {
          content:
            '교내 열람실 좌석 정보를 크롤링하여 Java 기반의 안드로이드 앱 제작 후 배포(설치수 100++)',
        },
      ],
    },
  ],
};

export default project;
