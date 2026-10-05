export function observeNavigation(header) {
  if (!header || !("IntersectionObserver" in window)) return;
  if (window.location.pathname !== "/") {
    header
      .querySelectorAll('a[href="/#case-studies"]')
      .forEach((link) => link.setAttribute("aria-current", "location"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (
          !entry.isIntersecting ||
          !header.querySelector(`a[href="/#${entry.target.id}"], a[href="#${entry.target.id}"]`)
        )
          continue;
        header.querySelectorAll('a[href^="/#"], a[href^="#"]').forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}

