
const navList = document.querySelectorAll('.nav > * > *');

const navMapping = {
  'prizes-nav'  : '#prizes-section',
  'sponsors-nav': '#sponsors-section',
  'schedule-nav': '#schedule-section',
  'team-nav'    : '#team-section',
  'faq-nav'     : '#faq-section',
};

navList.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    e.preventDefault();
    const target = navMapping[navItem.getAttribute('id')];
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

