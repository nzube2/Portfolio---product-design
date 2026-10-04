# Torn-paper portrait edit

Mode: built-in imagegen edit, with `transparent_background: true`.

Input: `src/assets/valentina-portrait.webp` (the owner's supplied portrait).

Final project asset: `C:/PORTFOLIO - Copy/src/assets/valentina-portrait-torn.webp` — 776 × 1064, WebP with alpha, 202,932 bytes. The generated PNG was optimized to WebP with transparency preserved. The original portrait is retained.

Generated source: `C:/Users/HP PC/.codex/generated_images/01a106bc-5b14-72e3-977b-76a9a2e431dd/exec-e407f80a-14c1-469d-bcef-38e35db6f5e2.png`.

## Final prompt

Edit the supplied actual portrait for a website hero. Remove the gray background entirely and create a true transparent alpha background. Preserve the SAME woman's exact face, skin tone, expression, hairstyle, black jacket, pose, photographic detail, and lighting; do not beautify, redraw, or change her identity. Isolate her full visible silhouette including the voluminous curly hair and shoulders/torso. Surround only the outer silhouette with a narrow warm off-white torn-paper border, about 12-20 pixels wide at this image size, irregular natural ragged ripped fibers and tiny uneven notches as if this portrait was physically torn out of a magazine page. The border follows the hair and body outline, NOT a rectangle, NOT a smooth sticker stroke. Tear the bottom torso edge naturally too. Leave transparent space outside all paper edges; no gray background, no rectangular card, no text, no badges, no additional objects. Keep portrait vertical, subject almost fills canvas with a little transparent margin to preserve every paper edge. Result intended to sit on a dark warm-neutral webpage; off-white torn outline must be visible against it.

## Integration and verification

Updated `Hero.jsx` to import the edited asset and its actual dimensions; removed the rectangular border/radius from the hero image styling. The existing Tested & trusted stamp remains. Full production build/prerender passed. Preview verified at 360, 768, 1024, and 1440px with no overflow or browser errors. Reduced-motion handling and CSS token checks passed. Alpha channel verified with values from 0 to 255.
