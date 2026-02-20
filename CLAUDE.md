# CLAUDE.md - AI Agent Rules for This Repository

This repository is a **SillyTavern frontend extension** that adds a full-screen CSS reference overlay to SillyTavern. It is intended as a **developer tool** — a quick reference for people building other ST extensions.

This file defines **mandatory rules and constraints** for AI agents modifying this codebase.

All instructions below MUST be followed unless explicitly overridden by the user.

## 0. User Context

The user of this repository **is not a programmer**. This shapes every interaction:

- Explain what you are about to do and why, in plain language, **before doing it**.
- Never assume familiarity with programming terms. If a technical term is unavoidable, define it immediately.
- When presenting options, describe trade-offs in practical terms ("this is faster but harder to change later"), not technical jargon.

**When in doubt, ask.** If a request is ambiguous, or could reasonably be interpreted in more than one way, stop and ask before writing any code. Do not guess and proceed silently. One clarifying question upfront saves far more time than redoing work.

## 1. Runtime Context

- This extension runs **entirely in the browser**.
- It integrates with **SillyTavern** as a standard frontend extension loaded via `manifest.json`.
- There is **no backend code** in this repository.
- There is **no build step**. No npm build, no bundler, no compilation. Changes take effect when the browser tab is reloaded. Testing is done manually by reloading and observing behavior in the browser.

## 2. Project Structure

This is a small, intentionally minimal extension. The entire implementation lives in two files:

| File | Purpose |
| --- | --- |
| `index.js` | All extension logic: component catalog, CSS variable catalog, overlay HTML builder, open/close, clipboard copy, tab switching, Bootstrap |
| `style.css` | Extension-specific CSS for the overlay wrapper and card layout |
| `manifest.json` | Extension metadata (name, version, entry points) |

## 3. Code Organization — index.js Section Structure

`index.js` is organized into clearly labeled sections using comment banners:

```
// ── Component catalog
// ── CSS variable catalog
// ── Helpers
// ── Build overlay HTML
// ── Open / close
// ── Populate CSS variable swatches
// ── Copy feedback
// ── Bootstrap
```

**Preserve this structure.** New code must go into the appropriate existing section, or add a new clearly labeled section using the same banner style. Do not dump new logic at the top or bottom without a section.

## 4. CSS Approach — Prefer ST's Own Styles

**Before adding any new CSS to `style.css`, first check whether SillyTavern already has a class that does the same job.**

The goal is to keep `style.css` as small as possible by reusing ST's built-in styles for the overlay UI wherever possible. For example:

- Use `.menu_button` instead of writing a custom button style.
- Use `.text_pole` instead of writing a custom input style.
- Use `.inline-drawer` instead of writing a custom expandable panel.

Only add new CSS to `style.css` when no suitable ST class exists.

To look up what vanilla ST classes and styles are available, use the reference submodule:

```
vendor/SillyTavern-WorldInfoDrawer/vendor/SillyTavern/public/
```

This contains the full SillyTavern source. Look in its CSS files to find existing styles before writing new ones.

## 5. Skills to Run

- **Before any UI or CSS change**, run the `style-guide` skill.
- **Before writing or reviewing any JS**, run the `st-js-best-practices` skill.

## 6. Authoritative Reference

The SillyTavern source is available **read-only** under:

```
vendor/SillyTavern-WorldInfoDrawer/vendor/SillyTavern/
```

Use it to understand how ST works, look up existing CSS classes, or find existing JS APIs.

**DO NOT modify anything under `vendor/`.** Both submodules — `vendor/SillyTavern-WorldInfoDrawer` and the nested `vendor/SillyTavern-WorldInfoDrawer/vendor/SillyTavern` — are reference-only.

## 7. Dependencies and Imports

- Do **not** add new external dependencies.
- SillyTavern's shared libraries (lodash, DOMPurify, etc.) are available via ST's `lib.js` if ever needed.
- jQuery is available globally (the Bootstrap block already uses it via `jQuery(async () => { ... })`).

## 8. Change Targeting

- Keep changes **small and targeted**.
- Avoid unnecessary rewrites.
- Preserve existing behavior unless explicitly told otherwise.
- If behavior must change:
  - Explain what changed.
  - Explain why it changed.

## 9. Explicitly Forbidden Actions

- Do NOT modify anything under `vendor/`
- Do NOT introduce frameworks (React, Vue, etc.)
- Do NOT add new external dependencies
- Do NOT use Bash `echo`, `printf`, or heredoc to write file content — always use the Write or Edit tools. Shell output on Windows can corrupt multi-byte characters (emojis, special Unicode) inside files.

## 10. Architecture Documentation

A lightweight `ARCHITECTURE.md` file should exist in the project root describing the overall structure. Update it if a feature is added, removed, or significantly changed.

## 12. Definition of Done

A task is complete when **all of the following are true**:

1. **Code is written** — all changes are saved and in their final state.
2. **Architecture docs are updated** — if the task added, removed, or moved a feature, `ARCHITECTURE.md` is updated to reflect the new state.

Do NOT consider a task done if the implementation is partial or a placeholder remains.
