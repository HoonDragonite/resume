import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
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
      title: 'https://github.com/KingPiggy',
      link: 'https://github.com/KingPiggy',
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
    title: 'No pain, no gain.',
    icon: faComment,
  },
};

export default profile;
