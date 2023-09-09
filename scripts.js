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

(function scuffedComingSoonUpdateImage (){
  let allEmptyImages = document.querySelectorAll(".IMAGE-GOES-HERE");
  allEmptyImages.forEach((image) => {
    let parent = image.parentElement;
    let classes = image.classList;
    parent.removeChild(image);
    let templateElement = document.createElement("div");
    templateElement.style = "display: flex; justify-content: center; align-items: center; color: rgba(0, 0, 0, 0.35); font-style: italic;"
    templateElement.innerHTML = "Coming Soon!"
    templateElement.classList = classes;
    parent.appendChild(templateElement);
  });
})();



(function markVisibleElements() {
  const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const elementsToCheck = document.querySelectorAll('.main > * > *');
  elementsToCheck.forEach((element) => observer.observe(element));
})();



