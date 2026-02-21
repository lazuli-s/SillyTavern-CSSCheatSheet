// CSS Cheat Sheet extension for SillyTavern
// Adds a top-bar icon that opens a full-screen reference overlay
// showing ST's CSS components and CSS variables.

const EXTENSION_ID = 'css_cheatsheet';

// ── Component catalog ──────────────────────────────────────────────────────
const COMPONENTS = [
    {
        category: 'Buttons',
        items: [
{
                name: '.menu_button',
                html: '<div class="menu_button">Click me</div>',
            },
            {
                name: '.menu_button (disabled)',
                html: '<div class="menu_button disabled">Disabled</div>',
            },
            {
                name: '.menu_button (icon only)',
                html: '<div class="menu_button fa-solid fa-star" title="Icon button"></div>',
            },
            {
                name: '.menu_button.toggleEnabled.interactable (icon, active color)',
                html: '<div class="menu_button fa-solid fa-star toggleEnabled interactable" title="Active button"></div>',
            },
            {
                name: '.menu_button (icon + label)',
                html: '<div class="menu_button menu_button_icon"><i class="fa-solid fa-star"></i><span>Starred</span></div>',
            },
            {
                name: 'button.menu_button.menu_button_icon.interactable',
                html: '<button class="menu_button menu_button_icon interactable"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Generate</span></button>',
            },
            {
                name: 'div.popup-button-ok.menu_button.menu_button_default.interactable',
                html: '<div class="popup-button-ok menu_button menu_button_default interactable">OK</div>',
            },
            {
                name: '.right_menu_button.fa-solid.interactable',
                html: '<div class="right_menu_button fa-solid fa-star interactable" title="Button title" tabindex="0" role="button"></div>',
            },
            {
                name: '.mes_button.fa-regular.interactable',
                html: '<div class="mes_button fa-regular fa-star interactable" title="Button action" tabindex="0" role="button"></div>',
            },
        ],
    },
    {
        category: 'Text Inputs',
        items: [
            {
                name: 'input.text_pole',
                html: '<input type="text" class="text_pole" placeholder="Type here…">',
            },
            {
                name: 'input.text_pole[type=number]',
                html: '<input type="number" class="text_pole" value="42" style="width:80px">',
            },
            {
                name: 'textarea.text_pole',
                html: '<textarea class="text_pole" rows="3" placeholder="Multi-line text…"></textarea>',
            },
        ],
    },
    {
        category: 'Select / Dropdown',
        items: [
            {
                name: 'select.text_pole',
                html: '<select class="text_pole"><option>Option one</option><option>Option two</option><option>Option three</option></select>',
            },
{
                name: '.select2_choice_clickable_buttonstyle',
                html: `<span class="select2_choice_clickable_buttonstyle" hidden></span><span class="select2-container select2-container--default" style="width:220px">
                    <span class="selection">
                        <span class="select2-selection select2-selection--multiple">
                            <ul class="select2-selection__rendered">
                                <li class="select2-selection__choice" title="Worldbuilding">
                                    <button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item"><span aria-hidden="true">×</span></button>
                                    <span class="select2-selection__choice__display interactable" tabindex="0">Worldbuilding</span>
                                </li>
                                <li class="select2-selection__choice" title="Main Characters">
                                    <button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item"><span aria-hidden="true">×</span></button>
                                    <span class="select2-selection__choice__display interactable" tabindex="0">Main Characters</span>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>`,
            },
            {
                name: '.select2-results',
                html: `<div class="select2-container select2-container--default select2-container--open" style="width:220px">
                    <div class="select2-dropdown select2-dropdown--below">
                        <div class="select2-search select2-search--dropdown">
                            <input class="select2-search__field" type="search" placeholder="Search…" tabindex="-1">
                        </div>
                        <div class="select2-results">
                            <ul class="select2-results__options" role="listbox">
                                <li class="select2-results__option select2-results__option--selectable select2-results__option--selected" role="option">001 Main Characters</li>
                                <li class="select2-results__option select2-results__option--selectable select2-results__option--highlighted" role="option">002 Worldbuilding</li>
                                <li class="select2-results__option select2-results__option--selectable" role="option">003 Narrative Arcs</li>
                            </ul>
                        </div>
                    </div>
                </div>`,
            },
        ],
    },
    {
        category: 'Toggles & Checkboxes',
        items: [
            {
                name: 'input[type=checkbox] (checked)',
                html: '<input type="checkbox" checked>',
            },
            {
                name: 'input[type=checkbox] (unchecked)',
                html: '<input type="checkbox">',
            },
            {
                name: 'input[type=range]',
                html: '<input type="range" min="0" max="100" value="60" style="width:140px">',
            },
        ],
    },
    {
        category: 'Inline Elements',
        items: [
            {
                name: '.note-link-span',
                html: '<span class="fa-solid fa-circle-question note-link-span"></span>',
            },
            {
                name: '.fa-solid.fa-circle-info.opacity50p',
                html: '<div class="fa-solid fa-circle-info opacity50p" title="Info tooltip"></div>',
            },
            {
                name: '.fa-solid.fa-circle-question',
                html: '<div class="fa-solid fa-circle-question"></div>',
            },
        ],
    },
    {
        category: 'Typography',
        items: [
            {
                name: 'h1',
                html: '<h1>Heading 1</h1>',
            },
            {
                name: 'h2',
                html: '<h2>Heading 2</h2>',
            },
            {
                name: 'h3',
                html: '<h3>Heading 3</h3>',
            },
            {
                name: 'h4',
                html: '<h4>Heading 4</h4>',
            },
            {
                name: 'h5',
                html: '<h5>Heading 5</h5>',
            },
            {
                name: 'h6',
                html: '<h6>Heading 6</h6>',
            },
            {
                name: '.standoutHeader',
                html: '<div class="standoutHeader" style="width:180px">Section header</div>',
            },
        ],
    },
    {
        category: 'Drawers',
        items: [
            {
                name: '.inline-drawer',
                html: `<div class="inline-drawer" style="width:220px;min-width:0">
                    <div class="inline-drawer-toggle inline-drawer-header">
                        <b>Panel title</b>
                        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                    </div>
                    <div class="inline-drawer-content" style="display:none">
                        <p style="margin:6px 0">Panel content here</p>
                    </div>
                </div>`,
            },
            {
                name: '.standoutHeader.inline-drawer-header',
                html: `<div class="inline-drawer" style="width:220px;min-width:0">
                    <div class="inline-drawer-toggle inline-drawer-header standoutHeader">
                        <b>Drawer header</b>
                        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                    </div>
                    <div class="inline-drawer-content" style="display:none">
                        <p style="margin:6px 0">Panel content here</p>
                    </div>
                </div>`,
            },
        ],
    },
    {
        category: 'Menus & Popups',
        items: [
            {
                name: '#options .options-content',
                html: `<div class="options-content" role="list" style="width:200px">
                    <a class="interactable" tabindex="0">
                        <i class="fa-lg fa-solid fa-star"></i>
                        <span>Action one</span>
                    </a>
                    <a class="interactable" tabindex="0">
                        <i class="fa-lg fa-solid fa-bookmark"></i>
                        <span>Action two</span>
                    </a>
                    <a class="interactable" tabindex="0">
                        <i class="fa-lg fa-solid fa-bell"></i>
                        <span>Action three</span>
                    </a>
                    <hr>
                    <a class="interactable" tabindex="0">
                        <i class="fa-lg fa-solid fa-trash-can"></i>
                        <span>Remove</span>
                    </a>
                    <a class="interactable" tabindex="0">
                        <i class="fa-lg fa-solid fa-rotate-right"></i>
                        <span>Reset</span>
                    </a>
                </div>`,
            },
            {
                name: 'Popup.show.text()',
                code: `const { Popup } = await import('/scripts/popup.js');\nawait Popup.show.text('Title', 'Message here');`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="text">Open text popup</button>`,
            },
            {
                name: 'Popup.show.confirm()',
                code: `const { Popup } = await import('/scripts/popup.js');\nconst result = await Popup.show.confirm('Are you sure?', 'This action cannot be undone.');`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="confirm">Open confirm popup</button>`,
            },
            {
                name: 'Popup.show.input()',
                code: `const { Popup } = await import('/scripts/popup.js');\nconst value = await Popup.show.input('Enter value', 'Describe the field:', 'default');`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="input">Open input popup</button>`,
            },
            {
                name: 'new Popup(html, POPUP_TYPE.DISPLAY)',
                code: `const { Popup, POPUP_TYPE } = await import('/scripts/popup.js');\nconst popup = new Popup('<p>Custom HTML content</p>', POPUP_TYPE.DISPLAY);\nawait popup.show();`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="display">Open display popup</button>`,
            },
            {
                name: 'Popup — .wide_dialogue_popup',
                code: `const { Popup } = await import('/scripts/popup.js');\nawait Popup.show.text('Wide Popup', 'Content here', { wide: true });`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="wide">Open wide popup</button>`,
            },
            {
                name: 'Popup — .wider_dialogue_popup',
                code: `const { Popup } = await import('/scripts/popup.js');\nawait Popup.show.text('Wider Popup', 'Content here', { wider: true });`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="wider">Open wider popup</button>`,
            },
            {
                name: 'Popup — .large_dialogue_popup',
                code: `const { Popup } = await import('/scripts/popup.js');\nawait Popup.show.text('Large Popup', 'Content here', { large: true });`,
                html: `<button class="menu_button csc--popup-trigger" data-popup-type="large">Open large popup</button>`,
            },
        ],
    },
];

// ── CSS variable catalog ───────────────────────────────────────────────────
const CSS_VAR_GROUPS = [
    {
        category: 'Smart Theme – Text',
        vars: [
            '--SmartThemeBodyColor',
            '--SmartThemeEmColor',
            '--SmartThemeUnderlineColor',
            '--SmartThemeQuoteColor',
        ],
    },
    {
        category: 'Smart Theme – Backgrounds & Borders',
        vars: [
            '--SmartThemeBlurTintColor',
            '--SmartThemeChatTintColor',
            '--SmartThemeShadowColor',
            '--SmartThemeBorderColor',
        ],
    },
    {
        category: 'Opacity Colors',
        vars: [
            '--black30a',
            '--black50a',
            '--black60a',
            '--black70a',
            '--black90a',
            '--white20a',
            '--white30a',
            '--white50a',
            '--white70a',
            '--grey30a',
        ],
    },
    {
        category: 'Solid Colors',
        vars: [
            '--golden',
            '--active',
            '--preferred',
            '--fullred',
            '--warning',
            '--grey10',
            '--grey30',
            '--grey50',
            '--grey70',
        ],
    },
    {
        category: 'Layout & Typography',
        vars: [
            '--mainFontSize',
            '--mainFontFamily',
            '--monoFontFamily',
            '--blurStrength',
            '--shadowWidth',
            '--animation-duration',
            '--topBarIconSize',
            '--bottomFormIconSize',
        ],
    },
];

// ── Custom CSS catalog ─────────────────────────────────────────────────────
const CUSTOM_CSS = [
    {
        category: 'Menus & Context Menus',
        items: [
            {
                name: 'compact-options',
                html: `<div class="options-content compact-options" role="list" style="width:150px;font-size:var(--mainFontSize);border-radius:6px"><a tabindex="0" style="padding:3px 6px;column-gap:6px"><i class="fa-solid fa-star" style="width:14px;height:14px;font-size:inherit"></i><span>Action one</span></a><a tabindex="0" style="padding:3px 6px;column-gap:6px"><i class="fa-solid fa-bookmark" style="width:14px;height:14px;font-size:inherit"></i><span>Action two</span></a><a tabindex="0" style="padding:3px 6px;column-gap:6px"><i class="fa-solid fa-bell" style="width:14px;height:14px;font-size:inherit"></i><span>Action three</span></a><hr><a tabindex="0" style="padding:3px 6px;column-gap:6px"><i class="fa-solid fa-trash-can" style="width:14px;height:14px;font-size:inherit"></i><span>Remove</span></a></div>`,
                css: `.compact-options {
    display: block;
    overflow: hidden;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
    background-color: var(--SmartThemeBlurTintColor);
    backdrop-filter: blur(var(--SmartThemeBlurStrength));
    -webkit-backdrop-filter: blur(var(--SmartThemeBlurStrength));
}

.compact-options a {
    color: var(--SmartThemeBodyColor);
    padding: 3px 6px;
    text-decoration: none;
    display: flex;
    column-gap: 6px;
    cursor: pointer;
    align-items: center;
    opacity: 0.5;
    transition: opacity var(--animation-duration);
}

.compact-options a:hover {
    opacity: 1;
}

.compact-options i {
    width: 14px;
    height: 14px;
    font-size: calc(var(--mainFontSize) * 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    flex-shrink: 0;
}

.compact-options hr {
    margin: 0;
    padding: 0;
    border: none;
    border-top: 1px solid var(--SmartThemeBorderColor);
}`,
            },
        ],
    },
    {
        category: 'Moonlit Echoes Theme',
        items: [
            {
                name: 'collapsible-tip',
                html: `<div style="margin:4px 0;border:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);border-radius:5px;overflow:hidden;font-size:0.85em;width:220px"><div class="csc--moonlit-tip-hdr" style="padding:6px 10px;background:color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);display:flex;align-items:center;gap:8px;cursor:pointer"><i class="fa fa-info-circle"></i><span>Tip title here</span><i class="fa fa-chevron-down" style="margin-left:auto;transition:transform 0.3s;transform:rotate(180deg)"></i></div><div class="csc--moonlit-tip-body" style="max-height:1000px;overflow:hidden;transition:all 0.3s ease"><div style="padding:8px 10px">Content visible here</div></div></div>`,
                css: `.collapsible-tip {
    margin: 10px 0;
    border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
    border-radius: 5px;
    overflow: hidden;
    font-size: 0.9em !important;
}
.collapsible-tip-header {
    padding: 6px 10px;
    background: color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
    cursor: pointer;
    display: flex;
    align-items: center;
}
.collapsible-tip-content {
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    /* JS toggles max-height: 1000px when expanded */
}`,
            },
            {
                name: 'collapsible-section',
                html: `<div class="csc--moonlit-sec" style="border:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 25%,transparent);border-radius:5px;overflow:hidden;width:220px"><div class="csc--moonlit-sec-hdr" style="background:color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);padding:5px 12px;border-bottom:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 25%,transparent);display:flex;justify-content:space-between;align-items:center;cursor:pointer"><span style="font-weight:600;font-size:0.9em">Section Title</span><i class="fa fa-chevron-down" style="font-size:0.85em;transform:rotate(180deg);transition:transform 0.4s"></i></div><div class="csc--moonlit-sec-body" style="padding:10px;font-size:0.82em;opacity:0.8;max-height:2000px;overflow:hidden;transition:all 0.4s cubic-bezier(0.4,0,0.2,1)">Content visible here</div></div>`,
                css: `.collapsible-section {
    border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 25%, transparent);
    border-radius: 5px;
    margin-bottom: 15px;
    overflow: hidden;
}
.collapsible-section-header {
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
    padding: 5px 12px;
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 25%, transparent);
}
.collapsible-section-toggle {
    cursor: pointer;
    user-select: none;
}
.collapsible-section-content {
    max-height: 0;
    overflow: hidden;
    padding: 0 10px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
}
.collapsible-section.expanded .collapsible-section-content {
    max-height: 2000px;
    padding: 10px;
    opacity: 1;
}`,
            },
        ],
    },
    {
        category: 'WorldInfoDrawer — Chips & Badges',
        items: [
            {
                name: 'round-chip',
                html: `<span style="display:inline-flex;align-items:center;gap:0.6em;border:1px solid var(--SmartThemeBorderColor);border-radius:999px;padding:0.25em 0.7em;font-size:0.8em;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 85%,black 10%)"><i class="fa-solid fa-globe" style="color:var(--SmartThemeQuoteColor)"></i> Global</span><span style="display:inline-flex;align-items:center;gap:0.6em;border:1px solid var(--SmartThemeBorderColor);border-radius:999px;padding:0.25em 0.7em;font-size:0.8em;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 85%,black 10%)"><i class="fa-solid fa-comment" style="color:var(--SmartThemeQuoteColor)"></i> Chat</span>`,
                css: `.round-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.6em;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 999px;
    padding: 0.25em 0.7em;
    font-size: 0.8em;
    background-color: color-mix(in srgb, var(--SmartThemeBlurTintColor) 85%, black 10%);
}

.round-chip .chip-icon {
    color: var(--SmartThemeQuoteColor);
}`,
            },
            {
                name: 'round-chip-removable',
                html: `<span style="display:inline-flex;align-items:center;gap:0.6em;border:1px solid var(--SmartThemeBorderColor);border-radius:999px;padding:0.25em 0.45em 0.25em 0.7em;font-size:0.8em;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 85%,black 10%)"><i class="fa-solid fa-globe" style="color:var(--SmartThemeQuoteColor)"></i><span>Global</span><button style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;margin:0 0 0 0.15em;padding:0;cursor:pointer;color:var(--SmartThemeQuoteColor);line-height:1;font-size:0.95em"><i class="fa-solid fa-xmark" style="display:block;line-height:1"></i></button></span>`,
                css: `.round-chip-removable {
    display: inline-flex;
    align-items: center;
    gap: 0.6em;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 999px;
    padding: 0.25em 0.45em 0.25em 0.7em;
    font-size: 0.8em;
    background-color: color-mix(in srgb, var(--SmartThemeBlurTintColor) 85%, black 10%);
}

.round-chip-removable .chip-icon {
    color: var(--SmartThemeQuoteColor);
}

.round-chip-removable .round-chip-remove {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin: 0 0 0 0.15em;
    padding: 0;
    cursor: pointer;
    color: var(--SmartThemeQuoteColor);
    line-height: 1;
    font-size: 0.95em;
}

.round-chip-removable .round-chip-remove .fa-xmark {
    display: block;
    line-height: 1;
}

.round-chip-removable .round-chip-remove:hover {
    color: color-mix(in srgb, var(--SmartThemeQuoteColor) 80%, var(--SmartThemeBodyColor) 20%);
}`,
            },
            {
                name: 'round-chip-removable-prefixed',
                html: `<span style="display:inline-flex;align-items:center;gap:0.6em;border:1px solid var(--SmartThemeBorderColor);border-radius:999px;padding:0.25em 0.45em 0.25em 0.7em;font-size:0.8em;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 85%,black 10%)"><i class="fa-solid fa-globe" style="color:var(--SmartThemeQuoteColor)"></i><span style="color:var(--SmartThemeQuoteColor)">WI</span><span>Global</span><button style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;margin:0 0 0 0.15em;padding:0;cursor:pointer;color:var(--SmartThemeQuoteColor);line-height:1;font-size:0.95em"><i class="fa-solid fa-xmark" style="display:block;line-height:1"></i></button></span>`,
                css: `.round-chip-removable-prefixed {
    display: inline-flex;
    align-items: center;
    gap: 0.6em;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 999px;
    padding: 0.25em 0.45em 0.25em 0.7em;
    font-size: 0.8em;
    background-color: color-mix(in srgb, var(--SmartThemeBlurTintColor) 85%, black 10%);
}

.round-chip-removable-prefixed .chip-icon,
.round-chip-removable-prefixed .chip-prefix {
    color: var(--SmartThemeQuoteColor);
}

.round-chip-removable-prefixed .round-chip-remove {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin: 0 0 0 0.15em;
    padding: 0;
    cursor: pointer;
    color: var(--SmartThemeQuoteColor);
    line-height: 1;
    font-size: 0.95em;
}

.round-chip-removable-prefixed .round-chip-remove .fa-xmark {
    display: block;
    line-height: 1;
}

.round-chip-removable-prefixed .round-chip-remove:hover {
    color: color-mix(in srgb, var(--SmartThemeQuoteColor) 80%, var(--SmartThemeBodyColor) 20%);
}`,
            },
            {
                name: 'count-badge',
                html: `<span style="opacity:0.85;background:color-mix(in srgb,var(--SmartThemeBodyColor) 12%,transparent);border-radius:999px;padding:0.1em 0.45em;font-size:0.85em;line-height:1.2">12</span>`,
                css: `.count-badge {
    opacity: 0.85;
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 12%, transparent);
    border-radius: 999px;
    padding: 0.1em 0.45em;
    font-size: 0.85em;
    line-height: 1.2;
}`,
            },
        ],
    },
    {
        category: 'WorldInfoDrawer — Dropdowns',
        items: [
            {
                name: 'compact-context-multiselect',
                html: `<div class="options-content compact-options compact-context-multiselect" role="listbox" aria-multiselectable="true" style="width:170px;font-size:var(--mainFontSize);border-radius:6px"><a tabindex="0" data-selected="true" style="padding:3px 6px;column-gap:6px"><i class="fa-solid fa-square-check multiselect-check" style="width:14px;height:14px;font-size:inherit;color:var(--SmartThemeEmColor)"></i><i class="fa-solid fa-layer-group" style="width:14px;height:14px;font-size:inherit"></i><span>All active</span></a><a tabindex="0" data-selected="false" style="padding:3px 6px;column-gap:6px"><i class="fa-regular fa-square multiselect-check" style="width:14px;height:14px;font-size:inherit;color:var(--SmartThemeEmColor)"></i><i class="fa-solid fa-globe" style="width:14px;height:14px;font-size:inherit"></i><span>Global</span></a><a tabindex="0" data-selected="true" style="padding:3px 6px;column-gap:6px"><i class="fa-solid fa-square-check multiselect-check" style="width:14px;height:14px;font-size:inherit;color:var(--SmartThemeEmColor)"></i><i class="fa-solid fa-comments" style="width:14px;height:14px;font-size:inherit"></i><span>Chat</span></a></div>`,
                css: `.compact-context-multiselect {
    display: block;
    overflow: hidden;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
    background-color: var(--SmartThemeBlurTintColor);
    backdrop-filter: blur(var(--SmartThemeBlurStrength));
    -webkit-backdrop-filter: blur(var(--SmartThemeBlurStrength));
}

.compact-context-multiselect a {
    color: var(--SmartThemeBodyColor);
    padding: 3px 6px;
    text-decoration: none;
    display: flex;
    column-gap: 6px;
    cursor: pointer;
    align-items: center;
    opacity: 0.5;
    transition: opacity var(--animation-duration);
}

.compact-context-multiselect a:hover,
.compact-context-multiselect a[data-selected="true"] {
    opacity: 1;
}

.compact-context-multiselect i {
    width: 14px;
    height: 14px;
    font-size: calc(var(--mainFontSize) * 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    flex-shrink: 0;
}

.compact-context-multiselect .multiselect-check {
    color: var(--SmartThemeEmColor);
}

.compact-context-multiselect a[data-selected="true"] .multiselect-check {
    color: var(--SmartThemeEmColor);
}`,
            },
            {
                name: 'compact-context-multiselect-ultra',
                html: `<div class="options-content compact-options compact-context-multiselect-ultra" role="listbox" aria-multiselectable="true" style="width:130px;font-size:0.85em;border-radius:6px"><a tabindex="0" data-selected="true" style="padding:2px 4px;column-gap:4px"><i class="fa-solid fa-square-check multiselect-check" style="width:12px;height:12px;font-size:inherit;color:var(--SmartThemeQuoteColor)"></i><span>All active</span></a><a tabindex="0" data-selected="false" style="padding:2px 4px;column-gap:4px"><i class="fa-regular fa-square multiselect-check" style="width:12px;height:12px;font-size:inherit;color:var(--SmartThemeEmColor)"></i><span>Global</span></a><a tabindex="0" data-selected="true" style="padding:2px 4px;column-gap:4px"><i class="fa-solid fa-square-check multiselect-check" style="width:12px;height:12px;font-size:inherit;color:var(--SmartThemeQuoteColor)"></i><span>Chat</span></a></div>`,
                css: `.compact-context-multiselect-ultra {
    display: block;
    overflow: hidden;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
    background-color: var(--SmartThemeBlurTintColor);
    backdrop-filter: blur(var(--SmartThemeBlurStrength));
    -webkit-backdrop-filter: blur(var(--SmartThemeBlurStrength));
}

.compact-context-multiselect-ultra a {
    color: var(--SmartThemeBodyColor);
    padding: 2px 4px;
    text-decoration: none;
    display: flex;
    column-gap: 4px;
    cursor: pointer;
    justify-content: center;
    opacity: 0.5;
    transition: opacity var(--animation-duration);
}

.compact-context-multiselect-ultra a:hover,
.compact-context-multiselect-ultra a[data-selected="true"] {
    opacity: 1;
}

.compact-context-multiselect-ultra i {
    width: 12px;
    height: 12px;
    font-size: 0.85em;
    display: flex;
    justify-content: center;
    pointer-events: none;
    flex-shrink: 0;
}

.compact-context-multiselect-ultra .multiselect-check {
    color: var(--SmartThemeEmColor);
}

.compact-context-multiselect-ultra a[data-selected="true"] .multiselect-check {
    color: var(--SmartThemeQuoteColor);
}`,
            },
            {
                name: 'action-list-dropdown',
                html: `<div style="display:inline-flex;flex-direction:column;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 95%,black 10%);filter:drop-shadow(1px 1px 2px var(--black50a));border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.5em;font-size:0.9em;min-width:140px"><div style="min-height:2.05em;height:2.05em;display:flex;flex-direction:row;gap:0.35em;align-items:center;box-sizing:border-box;padding:3px;border-radius:4px;cursor:pointer;transition:background-color 200ms,color 200ms"><i class="fa-solid fa-pen" style="flex:0 0 auto;width:1.05em;text-align:center"></i><span style="flex:1 1 auto;white-space:nowrap">Rename</span></div><div style="min-height:2.05em;height:2.05em;display:flex;flex-direction:row;gap:0.35em;align-items:center;box-sizing:border-box;padding:3px;border-radius:4px;cursor:pointer;transition:background-color 200ms,color 200ms"><i class="fa-solid fa-copy" style="flex:0 0 auto;width:1.05em;text-align:center"></i><span style="flex:1 1 auto;white-space:nowrap">Duplicate</span></div><div style="min-height:2.05em;height:2.05em;display:flex;flex-direction:row;gap:0.35em;align-items:center;box-sizing:border-box;padding:3px;border-radius:4px;cursor:pointer;transition:background-color 200ms,color 200ms"><i class="fa-solid fa-trash" style="flex:0 0 auto;width:1.05em;text-align:center;opacity:0.8"></i><span style="flex:1 1 auto;white-space:nowrap">Delete</span></div></div>`,
                css: `.action-list-dropdown {
    --action-list-item-height: 2.05em;

    position: fixed;
    filter: drop-shadow(1px 1px 2px var(--black50a));
    z-index: 30000;
    overflow: clip auto;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    background-color: color-mix(in srgb, var(--SmartThemeBlurTintColor) 95%, black 10%);
    font-size: 0.9em;
    padding: 0.5em;
}

.action-list-dropdown-item {
    min-height: var(--action-list-item-height);
    height: var(--action-list-item-height);
    color: var(--SmartThemeBodyColor);
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    transition: background-color 200ms, color 200ms, opacity 200ms;
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    box-sizing: border-box;
    padding: 3px;
    border-radius: 6px;
}

.action-list-dropdown-item:hover {
    background-color: color-mix(in srgb, var(--customThemeColor) 85%, black 15%);
}

.action-list-dropdown-item .action-list-dropdown-icon {
    flex: 0 0 auto;
    width: 1.05em;
    text-align: center;
}

.action-list-dropdown-item .action-list-dropdown-label {
    flex: 1 1 auto;
    min-width: fit-content;
}`,
            },
        ],
    },
    {
        category: 'WorldInfoDrawer — Bulk Edit',
        items: [
            {
                name: 'thin-container',
                html: `<div style="display:flex;align-items:center;gap:0.5em;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.35em 0.65em;position:relative;margin-top:0.75em"><span style="position:absolute;top:-0.6em;left:0.4em;font-size:0.7em;padding:0 0.25em;color:var(--SmartThemeEmColor);line-height:1;white-space:nowrap;display:inline-flex;align-items:center;gap:0.35em">Label<i class="fa-solid fa-fw fa-circle-question" style="opacity:0.6;cursor:pointer" title="Help tooltip"></i></span><input type="number" class="text_pole" value="4" style="min-height:5px;padding:0 5px;font-size:0.95em;width:3.5em"></div>`,
                css: `.thin-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 4px;
    padding: 0.35em 0.65em;
    position: relative;
}

.thin-container-label {
    position: absolute;
    top: -0.6em;
    left: 0.4em;
    font-size: 0.7em;
    padding: 0 0.25em;
    color: var(--SmartThemeEmColor);
    line-height: 1;
    white-space: nowrap;
}

i.fa-solid.fa-fw.fa-circle-question.thin-container-label-hint {
    padding-left: 0.5em;
}

.thin-container.is-disabled {
    opacity: 0.4;
    pointer-events: none;
}`,
            },
            {
                name: 'compact-input',
                html: `<input type="number" class="text_pole" value="99" style="min-height:5px;padding-left:5px;padding-right:5px;font-size:0.95em;width:3.5em">`,
                css: `.compact-input {
    min-height: 5px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 0.95em;
    width: 3.5em;
}`,
            },
            {
                name: 'compact-checkbox-row',
                html: `<label style="display:flex;align-items:center;gap:0.4em;font-size:0.9em;cursor:pointer"><input type="checkbox" class="checkbox" style="width:0.85em;height:0.85em"><span>Prioritize</span></label>`,
                css: `.compact-checkbox-row {
    display: flex;
    align-items: center;
    gap: 0.4em;
}

/* override: FA icon checkbox defaults are too large for this compact row */
.compact-checkbox-row .checkbox {
    width: 0.85em;
    height: 0.85em;
}`,
            },
        ],
    },
    {
        category: 'Tab Patterns',
        items: [
            {
                name: 'boxed-tab',
                html: `<div class="csc--boxed-tabs" style="width:240px"><div style="display:flex"><button class="csc--boxed-tab-btn csc--active" data-tab="bx1" style="padding:5px 12px;border-radius:4px 4px 0 0;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.82em;margin-bottom:-1px;position:relative">Tab One</button><button class="csc--boxed-tab-btn" data-tab="bx2" style="padding:5px 12px;border-radius:4px 4px 0 0;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.82em">Tab Two</button><button class="csc--boxed-tab-btn" data-tab="bx3" style="padding:5px 12px;border-radius:4px 4px 0 0;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.82em">Tab Three</button></div><div style="border:1px solid var(--SmartThemeBorderColor);border-radius:0 4px 4px 4px;padding:8px"><div class="csc--boxed-tab-pane" data-tab="bx1" style="font-size:0.82em;opacity:0.7">Tab One content</div><div class="csc--boxed-tab-pane" data-tab="bx2" style="display:none;font-size:0.82em;opacity:0.7">Tab Two content</div><div class="csc--boxed-tab-pane" data-tab="bx3" style="display:none;font-size:0.82em;opacity:0.7">Tab Three content</div></div></div>`,
                css: `.boxed-tab {
    margin-bottom: 20px;
}
.boxed-tab-bar {
    display: flex;
    align-items: flex-end;
}
.boxed-tab-button {
    padding: 5px 12px;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    color: var(--SmartThemeBodyColor);
    opacity: 0.55;
    background: transparent;
    margin-bottom: -1px;
    position: relative;
    font-size: inherit;
    transition: opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}
.boxed-tab-button:hover {
    opacity: 0.8;
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 5%, transparent);
    border-color: color-mix(in srgb, var(--SmartThemeBorderColor) 60%, transparent);
}
.boxed-tab-button.active {
    background-color: var(--SmartThemeBlurTintColor);
    opacity: 1;
    border-color: var(--SmartThemeBorderColor);
    border-bottom-color: var(--SmartThemeBlurTintColor);
    z-index: 1;
}
.boxed-tab-panel {
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 0 4px 4px 4px;
    padding: 10px;
}
.boxed-tab-content {
    display: none;
}
.boxed-tab-content.active {
    display: block;
}`,
            },
            {
                name: 'icon-tab',
                html: `<div class="csc--icon-tabs" style="width:240px"><div style="display:flex;border-bottom:1px solid var(--SmartThemeBorderColor);margin-bottom:8px"><button class="csc--icon-tab-btn csc--active" data-tab="ic1" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 8px;margin-bottom:-1px;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.78em"><i class="fa-solid fa-house"></i><span>Home</span></button><button class="csc--icon-tab-btn" data-tab="ic2" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 8px;margin-bottom:-1px;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.78em"><i class="fa-solid fa-gear"></i><span>Settings</span></button><button class="csc--icon-tab-btn" data-tab="ic3" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 8px;margin-bottom:-1px;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.78em"><i class="fa-solid fa-user"></i><span>Profile</span></button></div><div class="csc--icon-tab-pane" data-tab="ic1" style="font-size:0.82em;opacity:0.7;padding:2px 4px">Home content</div><div class="csc--icon-tab-pane" data-tab="ic2" style="display:none;font-size:0.82em;opacity:0.7;padding:2px 4px">Settings content</div><div class="csc--icon-tab-pane" data-tab="ic3" style="display:none;font-size:0.82em;opacity:0.7;padding:2px 4px">Profile content</div></div>`,
                css: `.icon-tab {
    margin-bottom: 20px;
}
.icon-tab-bar {
    display: flex;
    border-bottom: 1px solid var(--SmartThemeBorderColor);
    margin-bottom: 15px;
}
.icon-tab-button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 6px 8px;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    background: none;
    cursor: pointer;
    color: var(--SmartThemeBodyColor);
    opacity: 0.55;
    font-size: inherit;
    transition: opacity 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.icon-tab-button:hover {
    opacity: 0.8;
}
.icon-tab-button.active {
    opacity: 1;
    border-bottom-color: var(--SmartThemeBodyColor);
}
.icon-tab-content {
    display: none;
}
.icon-tab-content.active {
    display: block;
}`,
            },
            {
                name: 'underline-tab',
                html: `<div class="csc--moonlit-tabs" style="width:240px"><div style="display:flex;border-bottom:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);margin-bottom:10px"><button class="csc--moonlit-tab-btn csc--active" data-tab="t1" style="padding:7px 10px;margin-bottom:-1px;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.82em">Tab One</button><button class="csc--moonlit-tab-btn" data-tab="t2" style="padding:7px 10px;margin-bottom:-1px;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.82em">Tab Two</button><button class="csc--moonlit-tab-btn" data-tab="t3" style="padding:7px 10px;margin-bottom:-1px;cursor:pointer;color:var(--SmartThemeBodyColor);font-size:0.82em">Tab Three</button></div><div class="csc--moonlit-tab-pane" data-tab="t1" style="font-size:0.82em;opacity:0.7;padding:2px 4px">Tab One content</div><div class="csc--moonlit-tab-pane" data-tab="t2" style="display:none;font-size:0.82em;opacity:0.7;padding:2px 4px">Tab Two content</div><div class="csc--moonlit-tab-pane" data-tab="t3" style="display:none;font-size:0.82em;opacity:0.7;padding:2px 4px">Tab Three content</div></div>`,
                css: `.underline-tab {
    margin-bottom: 20px;
}
.underline-tab-bar {
    display: flex;
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
    margin-bottom: 15px;
}
.underline-tab-button {
    padding: 8px 10px;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    cursor: pointer;
    color: var(--SmartThemeBodyColor);
    opacity: 0.6;
    transition: opacity 0.2s ease, border-color 0.2s ease;
}
.underline-tab-button:hover {
    opacity: 0.85;
}
.underline-tab-button.active {
    opacity: 1;
    border-bottom-color: var(--SmartThemeBodyColor);
}
.underline-tab-content {
    display: none;
}
.underline-tab-content.active {
    display: block;
}`,
            },
        ],
    },
];

// ── Helpers ────────────────────────────────────────────────────────────────

/** Copies text to clipboard; falls back to execCommand if the Clipboard API fails. */
function copyText(text) {
    function execFallback() {
        const el = document.createElement('textarea');
        el.value = text;
        el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
        document.body.appendChild(el);
        el.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(el);
    }
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(execFallback);
    } else {
        execFallback();
    }
}

/** Returns true if the CSS value looks like a color. */
function isColorValue(value) {
    return /^(rgb|rgba|hsl|hsla|#[0-9a-f]{3,8}|oklch|color\()/i.test(value.trim());
}

/** Escapes HTML special characters for safe embedding in attribute values. */
function escAttr(str) {
    return str.replace(/&/g, '&').replace(/"/g, '"');
}

/** Escapes HTML special characters for safe rendering inside <pre> blocks. */
function escHtml(str) {
    return str.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
}

// ── Build overlay HTML ─────────────────────────────────────────────────────

function buildComponentSections() {
    return COMPONENTS.map(({ category, items }) => {
        const cards = items.map(({ name, html, code }) => `
            <div class="csc--card">
                <div class="csc--card-preview">${html}</div>
                <div class="csc--card-name" data-copy="${escAttr(code || name)}" title="Click to copy: ${escAttr(name)}"><i class="fa-regular fa-copy csc--copy-icon"></i> ${name}</div>
            </div>`).join('');
        return `
            <section class="csc--section">
                <h3 class="csc--section-title">${category}</h3>
                <div class="csc--grid">${cards}</div>
            </section>`;
    }).join('');
}

function buildVarSections() {
    return CSS_VAR_GROUPS.map(({ category, vars }) => {
        const cards = vars.map(name => `
            <div class="csc--var-card" data-varname="${escAttr(name)}">
                <span class="csc--var-swatch-slot"></span>
                <span class="csc--var-name" data-copy="${escAttr(name)}" title="Click to copy: ${escAttr(name)}">${name}</span>
                <i class="fa-regular fa-copy csc--copy-icon"></i>
            </div>`).join('');
        return `
            <section class="csc--section">
                <h3 class="csc--section-title">${category}</h3>
                <div class="csc--var-grid">${cards}</div>
            </section>`;
    }).join('');
}

function buildCustomCssSections() {
    return CUSTOM_CSS.map(({ category, items }) => {
        const cards = items.map(({ name, html, css }) => `
            <div class="csc--card csc--css-card">
                <div class="csc--card-preview">${html}</div>
                <div class="csc--css-actions">
                    <button class="csc--css-copy-btn" data-copy="${escAttr(css)}" title="Copy CSS code for: ${escAttr(name)}">
                        <i class="fa-regular fa-copy"></i><span> Copy code</span>
                    </button>
                    <button class="csc--css-toggle-btn" aria-expanded="false" title="Show/hide code">
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div class="csc--css-block" hidden>
                    <pre class="csc--css-pre">${escHtml(css)}</pre>
                </div>
                <div class="csc--card-name" data-copy="${escAttr(name)}" title="Click to copy: ${escAttr(name)}">
                    <i class="fa-regular fa-copy csc--copy-icon"></i> ${name}
                </div>
            </div>`).join('');
        return `
            <section class="csc--section">
                <h3 class="csc--section-title">${category}</h3>
                <div class="csc--grid">${cards}</div>
            </section>`;
    }).join('');
}

function buildOverlayHtml() {
    return `
<div id="${EXTENSION_ID}_overlay" class="csc--overlay">
    <div class="csc--panel">
        <div class="csc--header">
            <i class="fa-solid fa-palette csc--header-icon"></i>
            <span class="csc--header-title">CSS Cheat Sheet</span>
            <div class="csc--tabs">
                <button class="menu_button csc--tab csc--tab-active" data-tab="components">Components</button>
                <button class="menu_button csc--tab" data-tab="vars">CSS Variables</button>
                <button class="menu_button csc--tab" data-tab="customcss">Custom CSS</button>
            </div>
        </div>
        <div class="csc--content">
            <div class="csc--pane" data-pane="components">
                ${buildComponentSections()}
            </div>
            <div class="csc--pane csc--pane-hidden" data-pane="vars">
                ${buildVarSections()}
            </div>
            <div class="csc--pane csc--pane-hidden" data-pane="customcss">
                ${buildCustomCssSections()}
            </div>
        </div>
    </div>
</div>`;
}

// ── Open / close ───────────────────────────────────────────────────────────
let isOpen = false;

function openCheatSheet() {
    isOpen = true;
    const overlay = document.getElementById(`${EXTENSION_ID}_overlay`);
    overlay.classList.add('csc--visible');
    document.getElementById(`${EXTENSION_ID}_btn`).classList.replace('closedIcon', 'openIcon');
    populateVarSwatches();
}

function closeCheatSheet() {
    isOpen = false;
    const overlay = document.getElementById(`${EXTENSION_ID}_overlay`);
    overlay.classList.remove('csc--visible');
    const btn = document.getElementById(`${EXTENSION_ID}_btn`);
    btn.classList.replace('openIcon', 'closedIcon');
}

function toggleCheatSheet() {
    if (isOpen) closeCheatSheet();
    else openCheatSheet();
}

// ── Populate CSS variable swatches ─────────────────────────────────────────
function populateVarSwatches() {
    const computed = getComputedStyle(document.documentElement);
    document.querySelectorAll('.csc--var-card').forEach(card => {
        const varName = card.dataset.varname;
        const value = computed.getPropertyValue(varName).trim();
        const slot = card.querySelector('.csc--var-swatch-slot');
        if (!slot) return;
        if (isColorValue(value)) {
            slot.innerHTML = `<span class="csc--swatch" style="background:${value}" title="${escAttr(value)}"></span>`;
        } else if (value) {
            slot.innerHTML = `<span class="csc--var-value">${value}</span>`;
        } else {
            slot.innerHTML = `<span class="csc--var-value csc--var-missing">—</span>`;
        }
    });
}

// ── Copy feedback ──────────────────────────────────────────────────────────
function flashCopied(el) {
    el.classList.add('csc--copied');
    setTimeout(() => el.classList.remove('csc--copied'), 700);
}

// ── Bootstrap ─────────────────────────────────────────────────────────────
jQuery(async () => {
    // Inject overlay into body
    document.body.insertAdjacentHTML('beforeend', buildOverlayHtml());

    // Add top-bar icon — wrapped in .drawer so it gets the same vertical
    // centering (align-items: center) as every other native top-bar icon.
    const drawer = document.createElement('div');
    drawer.className = 'drawer';
    const btn = document.createElement('div');
    btn.id = `${EXTENSION_ID}_btn`;
    btn.className = 'drawer-icon fa-solid fa-palette fa-fw closedIcon';
    btn.title = 'CSS Cheat Sheet';
    btn.setAttribute('aria-label', 'CSS Cheat Sheet');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCheatSheet();
    });
    drawer.appendChild(btn);
    document.getElementById('top-settings-holder')?.prepend(drawer);

    // Close on overlay backdrop click (outside the panel)
    document.getElementById(`${EXTENSION_ID}_overlay`).addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeCheatSheet();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) closeCheatSheet();
    });

    // Copy component class name on card-name click
    document.addEventListener('click', (e) => {
        if (e.target.closest('select')) return; // let the dropdown open normally
        const nameEl = e.target.closest('.csc--card-name');
        if (!nameEl) return;
        const text = nameEl.dataset.copy;
        if (!text) return;
        copyText(text);
        flashCopied(nameEl);
    });

    // Copy CSS variable name on var-name click
    document.addEventListener('click', (e) => {
        const nameEl = e.target.closest('.csc--var-name');
        if (!nameEl) return;
        const text = nameEl.dataset.copy;
        if (!text) return;
        copyText(text);
        flashCopied(nameEl);
    });

    // Tab switching
    document.addEventListener('click', (e) => {
        const tab = e.target.closest('.csc--tab');
        if (!tab) return;
        const pane = tab.dataset.tab;
        document.querySelectorAll('.csc--tab').forEach(t => t.classList.remove('csc--tab-active'));
        tab.classList.add('csc--tab-active');
        document.querySelectorAll('.csc--pane').forEach(p => {
            p.classList.toggle('csc--pane-hidden', p.dataset.pane !== pane);
        });
    });

    // Copy CSS code on "Copy code" button click
    document.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.csc--css-copy-btn');
        if (!copyBtn) return;
        const text = copyBtn.dataset.copy;
        if (!text) return;
        copyText(text);
        flashCopied(copyBtn);
    });

    // Expand/collapse CSS code block via the chevron toggle
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.csc--css-toggle-btn');
        if (!btn) return;
        const card = btn.closest('.csc--css-card');
        const block = card?.querySelector('.csc--css-block');
        if (!block) return;
        const willExpand = block.hidden;
        block.hidden = !willExpand;
        btn.setAttribute('aria-expanded', String(willExpand));
    });

    // Wire up inline-drawer toggles inside component previews
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.csc--card-preview .inline-drawer-toggle');
        if (!toggle) return;
        e.stopPropagation(); // don't copy to clipboard
        const drawer = toggle.closest('.inline-drawer');
        const content = drawer?.querySelector('.inline-drawer-content');
        const icon = toggle.querySelector('.inline-drawer-icon');
        if (!content) return;
        const isHidden = content.style.display === 'none';
        content.style.display = isHidden ? '' : 'none';
        icon?.classList.toggle('up', isHidden);
        icon?.classList.toggle('down', !isHidden);
        icon?.classList.toggle('fa-circle-chevron-up', isHidden);
        icon?.classList.toggle('fa-circle-chevron-down', !isHidden);
    });

    // Toggle moonlit-tip-container preview
    document.addEventListener('click', (e) => {
        const hdr = e.target.closest('.csc--moonlit-tip-hdr');
        if (!hdr) return;
        e.stopPropagation();
        const body = hdr.nextElementSibling;
        const chevron = hdr.querySelector('.fa-chevron-down');
        const isOpen = body.style.maxHeight === '1000px';
        body.style.maxHeight = isOpen ? '0' : '1000px';
        if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });

    // Toggle moonlit-section expanded preview
    document.addEventListener('click', (e) => {
        const hdr = e.target.closest('.csc--moonlit-sec-hdr');
        if (!hdr) return;
        e.stopPropagation();
        const body = hdr.nextElementSibling;
        const chevron = hdr.querySelector('.fa-chevron-down');
        const isOpen = body.style.maxHeight !== '0' && body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
        body.style.maxHeight = isOpen ? '0' : '2000px';
        body.style.opacity = isOpen ? '0' : '0.8';
        body.style.padding = isOpen ? '0 10px' : '10px';
        if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });

    // Switch tabs in moonlit-tab-buttons preview
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.csc--moonlit-tab-btn');
        if (!btn) return;
        e.stopPropagation();
        const tabId = btn.dataset.tab;
        const group = btn.closest('.csc--moonlit-tabs');
        group.querySelectorAll('.csc--moonlit-tab-btn').forEach(b => {
            b.classList.toggle('csc--active', b.dataset.tab === tabId);
        });
        group.querySelectorAll('.csc--moonlit-tab-pane').forEach(p => {
            p.style.display = p.dataset.tab === tabId ? 'block' : 'none';
        });
    });

    // Switch tabs in boxed-tab-buttons preview
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.csc--boxed-tab-btn');
        if (!btn) return;
        e.stopPropagation();
        const tabId = btn.dataset.tab;
        const group = btn.closest('.csc--boxed-tabs');
        group.querySelectorAll('.csc--boxed-tab-btn').forEach(b => {
            b.classList.toggle('csc--active', b.dataset.tab === tabId);
        });
        group.querySelectorAll('.csc--boxed-tab-pane').forEach(p => {
            p.style.display = p.dataset.tab === tabId ? 'block' : 'none';
        });
    });

    // Switch tabs in icon-tab-buttons preview
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.csc--icon-tab-btn');
        if (!btn) return;
        e.stopPropagation();
        const tabId = btn.dataset.tab;
        const group = btn.closest('.csc--icon-tabs');
        group.querySelectorAll('.csc--icon-tab-btn').forEach(b => {
            b.classList.toggle('csc--active', b.dataset.tab === tabId);
        });
        group.querySelectorAll('.csc--icon-tab-pane').forEach(p => {
            p.style.display = p.dataset.tab === tabId ? 'block' : 'none';
        });
    });

    // Open ST popup demos — dynamically import Popup only when first needed
    document.addEventListener('click', async (e) => {
        const trigger = e.target.closest('.csc--card-preview .csc--popup-trigger');
        if (!trigger) return;
        e.stopPropagation(); // don't copy to clipboard
        const { Popup, POPUP_TYPE } = await import('/scripts/popup.js');
        const type = trigger.dataset.popupType;
        if (type === 'text') {
            await Popup.show.text('Text Popup', 'This is a <b>text popup</b>. It displays content with a single OK button.');
        } else if (type === 'confirm') {
            await Popup.show.confirm('Confirm Popup', 'This is a <b>confirm popup</b>. It offers Yes and No buttons and returns the user\'s choice.');
        } else if (type === 'input') {
            await Popup.show.input('Input Popup', 'This is an <b>input popup</b>. It shows a text field and returns the entered value.', 'default value');
        } else if (type === 'display') {
            const content = document.createElement('div');
            content.innerHTML = '<p>This is a <b>display popup</b>. It shows arbitrary HTML with no action buttons — just a close button.</p>';
            await new Popup(content, POPUP_TYPE.DISPLAY).show();
        } else if (type === 'wide') {
            await Popup.show.text('Wide Popup', 'This popup uses <code>wide: true</code>, which adds <b>.wide_dialogue_popup</b>. It expands to a roughly square (1:1) aspect ratio.', { wide: true });
        } else if (type === 'wider') {
            await Popup.show.text('Wider Popup', 'This popup uses <code>wider: true</code>, which adds <b>.wider_dialogue_popup</b>. It is wider than default but does not scale the height.', { wider: true });
        } else if (type === 'large') {
            await Popup.show.text('Large Popup', 'This popup uses <code>large: true</code>, which adds <b>.large_dialogue_popup</b>. It fills about 90% of the screen.', { large: true });
        }
    });
});