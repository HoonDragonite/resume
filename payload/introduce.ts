import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '같이 일하고 싶은 동료이자 믿음직한 엔지니어가 되기 위해 노력하는 이승훈 입니다. 저는 같은 목적을 갖고 커뮤니케이션을 통해 더 나은 결과를 만드는 것을 좋아하고 비즈니스 가치 창출, 업무 자동화에 관심이 많습니다.',
    'Sql Server, My Sql, Java, Spring Boot 기반의 프로젝트를 경험하였고 현재는 클라우드, SQL 튜닝, DB 운영/관리에 관심을 갖고 있습니다. 유연한 사고를 가진 데이터 엔지니어가 되는 것을 목표로 역량을 쌓아가고 있습니다.',
  ],
  sign: 'SeungHoon Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
