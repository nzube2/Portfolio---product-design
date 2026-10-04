import caseStudies from "../data/caseStudies";
export function updateMetadata(path) {
  const project = caseStudies.find(
    (item) => path === `/case-studies/${item.slug}`,
  );
  const title = project
    ? `${project.slug === "portfolio" ? "Portfolio" : { markettrack: "MarketTrack", guidely: "Guidely", thermal: "Thermal" }[project.slug]} case study — Valentina Molokwu`
    : "Valentina Molokwu — Product Designer";
  const description = project
    ? project.brief
    : "Product designer with an engineering foundation. Explore shipped products, thoughtful design systems, and digital experiences. Port Harcourt, Nigeria; open to remote.";
  document.title = title;
  for (const [selector, value] of [
    ['meta[name="description"]', description],
    ['meta[property="og:title"]', title],
    ['meta[property="og:description"]', description],
  ])
    document.querySelector(selector)?.setAttribute("content", value);
}
