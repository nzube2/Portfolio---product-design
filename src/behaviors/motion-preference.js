export function observeMotionPreference(root) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pause = () => {
    if (preference.matches)
      root.querySelectorAll("video").forEach((video) => video.pause());
  };
  const onPlay = (event) => {
    if (
      preference.matches &&
      event.target instanceof HTMLVideoElement &&
      event.target.getAttribute("aria-hidden") === "true"
    )
      event.target.pause();
  };
  const observer = new MutationObserver(pause);
  observer.observe(root, { childList: true, subtree: true });
  preference.addEventListener("change", pause);
  root.addEventListener("play", onPlay, true);
  pause();
  return () => {
    observer.disconnect();
    preference.removeEventListener("change", pause);
    root.removeEventListener("play", onPlay, true);
  };
}
