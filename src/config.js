module.exports = {
  siteTitle: 'Д.Бат-Оргил | Web Developer',
  siteDescription:
    'Д.Бат-Оргил веб хөгжүүлэгч ба Улаанбаатар хотод байршилтай. Би web developer бөгөөд back-end талдаа илүү сонирхолтой. Үүгээрээч судалгаа хийнэ өөрийгөө хөгжүүлж байгаа.',
  siteKeywords:
    'Д.Бат-Оргил, batorgil, davaajantsan, daornit2, web developer, back-end developer, web developer, fullstack developer, javascript',
  siteUrl: 'http://batorgil.tech',
  siteLanguage: 'mn_MN',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Даваажанцан Бат-Оргил',
  location:  'Улаанбаатар, MN',
  email: 'batorgil.it@gmail.com',
  github: 'https://github.com/batorgil.it',
  twitterHandle: '@batorgil.it',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Daornit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/batorgil.it',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/bat.orgil.kok',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/batorgil.it',
    },
  ],

  navLinks: [
    {
      name: 'Миний тухай',
      url: '/#about',
    },
    {
      name: 'Туршлага',
      url: '/#jobs',
    },
    {
      name: 'Ажил',
      url: '/#projects',
    },
    {
      name: 'Холбоо барих',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
