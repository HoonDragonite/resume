import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Limited Edition Assemble',
      startedAt: '2021-09',
      where: '개인 프로젝트',
      descriptions: [
        { content: 'AWS 환경의 Spring Boot 프로젝트에서 트래픽 분산처리를 학습하기 위한 프로젝트' },
        { content: 'JPA, MariaDB, CI/CD, Redis, nginx' },
      ],
    },
    {
      title: 'Windows용 품질관리 시스템 UI/UX 개발',
      startedAt: '2021-07',
      endedAt: '2021-08',
      where: '한라엔컴',
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Windows 환경의 신규 품질관리 시스템 개발 프로젝트' }],
        },
        {
          content: '기여한 것',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Menu와 Tab 기반으로 작동하는 프로그램 구조 개발' },
            { content: '버튼, 표 등의 공통 컴포넌트 개발' },
            { content: 'MVVM 패턴 적용, SQL Server 연동' },
          ],
        },
        {
          content: '기술스택',
          weight: 'MEDIUM',
          descriptions: [{ content: 'WPF Framework' }, { content: 'C#' }, { content: '닷넷 5.0' }],
        },
      ],
    },
    {
      title: 'ERP 품질관리 시스템 고도화',
      startedAt: '2020-04',
      endedAt: '2021-04',
      where: '한라엔컴',
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [{ content: 'ERP 내 품질관리 시스템을 고도화하는 프로젝트' }],
        },
        {
          content: '기여한 것',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '생산, 매출, 영업자료에 대해 다양한 기준으로 종합하는 조회,분석 프로그램 개발',
            },
            { content: '여러 곳에 공통으로 사용되는 산식, 자료를 함수와 View로 제작' },
            { content: '리포팅 툴을 이용한 ERP 보고서 개발' },
          ],
        },
        {
          content: '기술스택',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'SQL Server' },
            { content: 'K-System (ERP)' },
            { content: 'Reporting Designer 5.0' },
          ],
        },
      ],
    },
    {
      title: '모바일 출하관리 웹 개발',
      startedAt: '2020-02',
      endedAt: '2020-03',
      where: '한라엔컴',
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            { content: '모바일 환경을 중심으로 개발된 MES 관리 웹시스템을 수정, 개발한 프로젝트' },
          ],
        },
        {
          content: '기여한 것',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '복수의 DB에 존재하는 생산자료를 SQL Server로 가져와 기간별로 집계하는 화면 개발',
            },
            { content: '기존에 사용중이던 생산자료를 집계하여 조회하는 슬로우 쿼리를 개선' },
            { content: '화면 UI/UX 수정' },
          ],
        },
        {
          content: '기술스택',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java' },
            { content: 'SQL Server, Oracle, MySQL' },
            { content: 'Spring MVC 4.1.2' },
          ],
        },
      ],
    },
    {
      title: '인사평가 시스템 개발',
      startedAt: '2019-11',
      endedAt: '2020-01',
      where: '한라엔컴',
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '사내 직원을 대상으로 ERP에서 사용하는 신규 인사평가 시스템을 개발하고 도입한 프로젝트',
            },
          ],
        },
        {
          content: '기여한 것',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Top-Down 형식의 인사평가와 다면평가 비즈니스 로직, 프로그램 개발' },
            {
              content: '평가종료 후 자료를 종합하여 다양한 기준으로 결과를 시각화한 프로그램 개발',
            },
            {
              content:
                '문서로 진행하던 시스템을 전산화시키고 연 1회 300명이 사용하는 시스템을 개발한 성과',
            },
          ],
        },
        {
          content: '기술스택',
          weight: 'MEDIUM',
          descriptions: [{ content: 'SQL Server' }, { content: 'K-System (ERP)' }],
        },
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
