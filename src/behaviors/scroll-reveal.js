export function observeReveals(root) {
  const nodes = root.querySelectorAll("[data-reveal]");
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
