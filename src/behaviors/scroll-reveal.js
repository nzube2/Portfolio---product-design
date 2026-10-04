export function observeReveals(root) {
  const nodes = root.querySelectorAll("[data-reveal], .about-top-row, .skills-heading-pill, .skills-row-1, .skills-row-2, .tools-section, .process-panel, .exp-heading-pill, .exp-card, .more-works-pill, .more-works-media, .contact-content, .contact-footer-bar");
  nodes.forEach((node) => node.setAttribute('data-reveal', ''));
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  )
    return;
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  nodes.forEach((node) => {
    node.classList.add("reveal-pending");
    observer.observe(node);
  });
  return () => {
    observer.disconnect();
    nodes.forEach((node) => node.classList.remove("reveal-pending"));
  };
}

