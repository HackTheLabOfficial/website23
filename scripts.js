const navList = document.querySelectorAll(".nav > li > *");

const navMapping = {
  "prizes-nav": "#prizes-section",
  "sponsors-nav": "#sponsors-section",
  "schedule-nav": "#schedule-section",
  "team-nav": "#team-section",
  "faq-nav": "#faq-section",
};

navList.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    e.preventDefault();
    const target = navMapping[navItem.getAttribute("id")];
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("mousemove", updateCursorPosition);

function updateCursorPosition(e) {
  const x = e.clientX;
  const y = e.clientY;

  document.documentElement.style.setProperty("--cursor-x", x + "px");
  document.documentElement.style.setProperty("--cursor-y", y + "px");
}
