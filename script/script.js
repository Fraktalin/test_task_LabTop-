const animItems = document.querySelectorAll(".anim-item");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnscroll);
  function animOnscroll() {
    let i = 0;
    const animItemsLength = animItems.length;

    for (i; i < animItemsLength; i = i + 1) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemPoint > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("anim-no-hide"))
          animItem.classList.remove("_active");
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  animOnscroll();
}
