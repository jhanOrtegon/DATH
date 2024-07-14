import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItem: [
    {
      path: '#home',
      label: 'Incio',
    },
    {
      path: '/',
      label: 'Sobre nosotros',
    },
    {
      path: '/',
      label: 'Servicios',
    },
    {
      path: '/',
      label: 'Estructura',
    },
  ],
  socialProfile: [
    {
      id: 1,
      name: 'facebook',
      path: '#',
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      name: 'twitter',
      path: '#',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      name: 'instagram',
      path: '#',
      icon: <FaInstagram />,
    },
  ],
};
