# ARCHITECTURE.md — CSS Cheat Sheet Extension

A SillyTavern frontend extension that adds a reference overlay (below the top bar) showing ST's reusable CSS components and CSS variables. Intended as a developer tool for people building other ST extensions.

---

## Files

| File | Role |
| --- | --- |
| `index.js` | All extension logic (see sections below) |
| `style.css` | CSS for the overlay shell and card layout. ST's `.menu_button` class is used for tab buttons; all other card and layout styles are custom (no suitable ST class exists for the two-zone card or section header patterns). |
| `manifest.json` | Extension metadata (name, version, entry points) |

---

## index.js — Sections

The file is organized into labeled sections in this order:

| Section | What it contains |
| --- | --- |
| **Component catalog** | `COMPONENTS` array — each entry has a category name and a list of items, each with a CSS class name and an HTML snippet to render as a live preview |
| **CSS variable catalog** | `CSS_VAR_GROUPS` array — each entry has a category name and a list of CSS variable names to display with their live computed values |
| **Helpers** | Small utility functions reused elsewhere (`isColorValue`, `escAttr`) |
| **Build overlay HTML** | Functions that turn the two catalogs into HTML strings (`buildComponentSections`, `buildVarSections`, `buildOverlayHtml`) |
| **Open / close** | `openCheatSheet`, `closeCheatSheet`, `toggleCheatSheet` — manage overlay visibility and button icon state |
| **Populate CSS variable swatches** | `populateVarSwatches` — reads live CSS variable values from the browser and injects color swatches or text values into the rendered var cards |
| **Copy feedback** | `flashCopied` — briefly highlights a card green when the user copies its name |
| **Bootstrap** | `jQuery(async () => { ... })` — runs once on page load: injects the overlay HTML, adds the top-bar icon button, and wires up all event listeners |

---

## How the overlay is built and injected

1. At load time, `buildOverlayHtml()` renders the full overlay as an HTML string from the two catalogs.
2. The string is injected into `document.body` via `insertAdjacentHTML('beforeend', ...)`.
3. A top-bar icon button is created and prepended to `#top-settings-holder`.
4. All interaction (open/close, copy, tabs, inline-drawer toggles) is handled by delegated `click` listeners on `document`.
5. Component card preview areas have `pointer-events: auto`, so every widget inside (buttons, inputs, checkboxes, sliders, etc.) is fully interactive for live demonstration.

---

## Click-to-copy behaviour

- Copying is triggered by clicking the **label bar** (`.csc--card-name`) at the bottom of a component card, or the **variable name** (`.csc--var-name`) in a CSS variable card. The preview area itself is not a copy target.
- Clicking the label/name calls `navigator.clipboard?.writeText()` (optional chaining guards against environments where the Clipboard API is unavailable) and triggers `flashCopied`, which briefly highlights the element green.
- A `fa-regular fa-copy` icon is shown in the label bar and var-card row as a visual affordance. The icon brightens on card hover via a CSS transition.

---

## CSS variable swatches

Swatch slots are empty in the initial HTML. When the overlay is opened, `populateVarSwatches()` reads each variable's computed value from the browser and fills in either a color swatch or a plain text value. This is done on open (not on load) so values reflect the current theme.

---

## Vendor submodules (reference only)

| Path | Purpose |
| --- | --- |
| `vendor/SillyTavern-WorldInfoDrawer/` | Reference for patterns used in a sibling ST extension |
| `vendor/SillyTavern-WorldInfoDrawer/vendor/SillyTavern/` | Full vanilla SillyTavern source — use to look up existing CSS classes and JS APIs before adding new code |

**Do not modify anything under `vendor/`.**
