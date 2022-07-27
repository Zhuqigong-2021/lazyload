const loadimgs = document.querySelectorAll("img[data-src]");

//call back function has to pass two values one is array like entries ,
//the other is observer
const imgload = function (entries, observer) {
  const [entry] = entries;
  // safe guard
  if (!entry.isIntersecting) return null;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener(
    "load",
    entry.target.classList.remove("overlay")
  );
  observer.unobserve(entry.target);
};

//new a observer with callback and option object
const imgObserver = new IntersectionObserver(imgload, {
  root: null,
  threshold: 0,
});
//audit every image
loadimgs.forEach((img) => imgObserver.observe(img));
