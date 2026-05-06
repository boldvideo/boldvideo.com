Platform logos for /vs-* comparison pages, migration logo strips, and the
internal Logo guide at /styleguide/logos.

Naming convention per platform <slug>:
  <slug>.svg              — full-color brand wordmark (or wordmark + mark)
  <slug>-mark.svg         — icon-only mark (square-ish), brand color
  <slug>-flat-FFF.svg     — monochrome white-fill, for use on dark backgrounds
  <slug>-flat-000.svg     — monochrome black-fill, for use on light backgrounds

The `-FFF` / `-000` suffixes are the literal hex of the fill — clearer than
"light/dark" which can ambiguate between off-white and pure white. Each
"flat" file is a sibling pair: the 000 version is a clone of the FFF version
with `fill="white"` (and `fill="#fff"`) swapped to black, except inside
`<mask>` elements where white must remain white for the mask to function.

Bold's own marks live here too (bold.svg, bold-mark.svg, bold-flat-FFF.svg,
bold-flat-000.svg) so the registry can resolve every face-off the same way.

The platform list is centralized in lib/platforms.ts. Add new platforms
there. Set `logoReady: true` once real brand SVGs replace the placeholders.
