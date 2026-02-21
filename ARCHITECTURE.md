# ARCHITECTURE.md — CSS Cheat Sheet Extension

A SillyTavern frontend extension that adds a reference overlay (below the top bar) showing ST's reusable CSS components and CSS variables. Intended as a developer tool for people building other ST extensions.

---

## Files

| File | Role |
| --- | --- |
| `index.js` | All extension logic (see sections below) |
| `style.css` | CSS for the overlay shell and card layout, plus namespaced alias selectors for Custom CSS snippets (e.g., both `.compact-options` and `.csc-compact-options`). ST's `.menu_button` class is used for tab buttons; all other card and layout styles are custom (no suitable ST class exists for the two-zone card or section header patterns). |
| `manifest.json` | Extension metadata (name, version, entry points) |

---

## index.js — Sections

The file is organized into labeled sections in this order:

| Section | What it contains |
| --- | --- |
| **Component catalog** | `COMPONENTS` array — each entry has a category name and a list of items, each with a `name`, an `html` snippet to render as a live preview, and an optional `code` string. When `code` is present, clicking the label bar copies the `code` value instead of `name`. Categories: Buttons, Text Inputs, Select / Dropdown, Toggles & Checkboxes, Inline Elements, Typography, Drawers, Menus & Popups |
| **CSS variable catalog** | `CSS_VAR_GROUPS` array — each entry has a category name and a list of CSS variable names to display with their live computed values |
| **Custom CSS catalog** | `CUSTOM_CSS` array — each entry has a category name and a list of items, each with a `name`, a preview `html` snippet, and a `css` string containing the full copyable CSS code. Categories: Menus & Context Menus, Moonlit Echoes Theme, WorldInfoDrawer — Chips & Badges, WorldInfoDrawer — Dropdowns, WorldInfoDrawer — Bulk Edit, Tab Patterns (boxed, icon, underline) |
| **Helpers** | Small utility functions reused elsewhere (`isColorValue`, `escAttr`, `escHtml`) |
| **Build overlay HTML** | Functions that turn the three catalogs into HTML strings (`buildComponentSections`, `buildVarSections`, `buildCustomCssSections`, `buildOverlayHtml`) |
| **Open / close** | `openCheatSheet`, `closeCheatSheet`, `toggleCheatSheet` — manage overlay visibility and button icon state |
| **Populate CSS variable swatches** | `populateVarSwatches` — reads live CSS variable values from the browser and injects color swatches or text values into the rendered var cards |
| **Copy feedback** | `flashCopied` — briefly highlights a card green when the user copies its name |
| **Bootstrap** | `jQuery(async () => { ... })` — runs once on page load: injects the overlay HTML, adds the top-bar icon button, and wires up all event listeners |

---

## How the overlay is built and injected

1. At load time, `buildOverlayHtml()` renders the full overlay as an HTML string from the three catalogs.
2. The string is injected into `document.body` via `insertAdjacentHTML('beforeend', ...)`.
3. A top-bar icon button is created and prepended to `#top-settings-holder`.
4. All interaction (open/close, copy, tabs, inline-drawer toggles, popup triggers) is handled by delegated `click` listeners on `document`.
5. Component card preview areas have `pointer-events: auto`, so every widget inside (buttons, inputs, checkboxes, sliders, popup trigger buttons, etc.) is fully interactive for live demonstration.
6. **Popup demo cards** in "Menus & Popups" each contain a `.csc--popup-trigger` button. Clicking it dynamically imports `Popup` and `POPUP_TYPE` from `/scripts/popup.js` (ST's popup module) and fires the matching popup type. The import is deferred to click-time so it doesn't run at extension load. The `code` field on these items makes the label bar copy the JS snippet (including the import line) rather than just the display name.

---

## Click-to-copy behaviour

- Copying is triggered by clicking the **label bar** (`.csc--card-name`) at the bottom of a component card or Custom CSS card, or the **variable name** (`.csc--var-name`) in a CSS variable card. The preview area itself is not a copy target.
- In **Custom CSS cards**, the label bar copies only the **snippet name** (same as component cards). The full CSS code is copied via the dedicated **"Copy code" button** (`.csc--css-copy-btn`) in the action bar between the preview and the code block.
- Custom CSS cards have a **two-zone action bar** (`.csc--css-actions`) below the preview: a centered "Copy code" button on the left/center (`.csc--css-copy-btn`) that copies the full CSS snippet, and a small chevron toggle (`.csc--css-toggle-btn`) on the right that expands/collapses the `<pre>` code block. The chevron rotates 180° via CSS when `aria-expanded="true"`.
- Clicking the label/name calls `navigator.clipboard?.writeText()` (optional chaining guards against environments where the Clipboard API is unavailable) and triggers `flashCopied`, which briefly highlights the element in the theme active color (`var(--active)`).
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
| `vendor/SillyTavern-MoonlitEchoesTheme/` | Reference for the Moonlit Echoes Theme — used to document its CSS component classes in the Custom CSS catalog |

**Do not modify anything under `vendor/`.**
