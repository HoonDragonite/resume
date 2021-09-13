import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이승훈',
    small: '',
  },
  contact: [
    {
      title: 'lsoonnoon@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    /*
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    */
    {
      title: 'https://github.com/HoonDragonite',
      link: 'https://github.com/HoonDragonite',
      icon: faGithub,
    },
    {
      title: 'https://kingpiggylab.tistory.com',
      link: 'https://kingpiggylab.tistory.com',
      icon: faBlog,
    },
    /*
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
      // icon: faRss,
      icon: faYoutube,
    },
    */
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
