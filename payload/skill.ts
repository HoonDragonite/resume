import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'SQL',
      level: 3,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'AWS',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Sql Server',
      level: 3,
    },
    {
      title: 'MySql',
      level: 3,
    },
    {
      title: 'Redis',
      level: 1,
    },
    {
      title: 'Firebase',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 1,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'eXERD',
    },
    {
      title: 'Trello',
    },
    {
      title: 'Ms Sql',
    },
    {
      title: 'Heidi Sql',
    },
    {
      title: 'Visual Studio',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
