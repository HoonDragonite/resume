import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '같이 일하고 싶은 동료이자 개발자가 되기 위해 노력하는 이승훈 입니다. 저는 커뮤니케이션을 통해 더 나은 결과를 만드는 것을 좋아하고 비즈니스 가치 창출, 업무 자동화에 관심이 많습니다.',
    'Sql Server, My Sql, Java, Spring Boot 기반의 프로젝트를 경험하였고 협업을 위한 클린코딩과 OOP에 관심이 많고 개발자로서 역량을 쌓아가고 있습니다.',
  ],
  sign: 'SeungHoon Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
