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
        category: 'Scrollbars',
        items: [
            {
                name: 'Hide scrollbar on #chat',
                html: `<div style="height:60px;width:120px;overflow-y:scroll;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:4px 8px;font-size:0.78em;scrollbar-width:none"><div style="line-height:1.8">Line 1</div><div style="line-height:1.8">Line 2</div><div style="line-height:1.8">Line 3</div><div style="line-height:1.8">Line 4</div><div style="line-height:1.8">Line 5</div></div>`,
                css: `#chat {\n    overflow-y: scroll;\n    scrollbar-width: none; /* Firefox */\n}\n#chat::-webkit-scrollbar {\n    display: none; /* Chrome, Safari */\n}`,
            },
            {
                name: 'Thin themed scrollbar',
                html: `<div style="height:60px;width:120px;overflow-y:scroll;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:4px 8px;font-size:0.78em"><div style="line-height:1.8">Line 1</div><div style="line-height:1.8">Line 2</div><div style="line-height:1.8">Line 3</div><div style="line-height:1.8">Line 4</div><div style="line-height:1.8">Line 5</div></div>`,
                css: `::-webkit-scrollbar {\n    width: 4px;\n}\n::-webkit-scrollbar-thumb {\n    background: var(--SmartThemeBorderColor);\n    border-radius: 2px;\n}\n::-webkit-scrollbar-track {\n    background: transparent;\n}`,
            },
        ],
    },
    {
        category: 'Chat Layout',
        items: [
            {
                name: 'Wider chat area',
                html: `<div style="background:var(--black30a);border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:6px 14px;font-size:0.78em;text-align:center;width:130px">\u2190 wider chat \u2192</div>`,
                css: `#chat {\n    max-width: 900px;\n    margin: 0 auto;\n}`,
            },
            {
                name: 'Rounded message bubbles',
                html: `<div style="background:var(--black30a);border:1px solid var(--SmartThemeBorderColor);border-radius:14px;padding:6px 14px;font-size:0.78em;display:inline-block">Sample message</div>`,
                css: `.mes_text {\n    border-radius: 14px;\n    background: var(--black30a);\n    padding: 8px 14px;\n}`,
            },
        ],
    },
    {
        category: 'Moonlit Echoes Theme',
        items: [
            {
                name: 'moonlit-tip-container',
                html: `<div style="margin:4px 0;border:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);border-radius:5px;overflow:hidden;font-size:0.85em;width:220px"><div class="csc--moonlit-tip-hdr" style="padding:6px 10px;background:color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);display:flex;align-items:center;gap:8px;cursor:pointer"><i class="fa fa-info-circle"></i><span>Tip title here</span><i class="fa fa-chevron-down" style="margin-left:auto;transition:transform 0.3s;transform:rotate(180deg)"></i></div><div class="csc--moonlit-tip-body" style="max-height:1000px;overflow:hidden;transition:all 0.3s ease"><div style="padding:8px 10px">Content visible here</div></div></div>`,
                css: `.moonlit-tip-container {\n    margin: 10px 0;\n    border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);\n    border-radius: 5px;\n    overflow: hidden;\n    font-size: 0.9em !important;\n}\n.moonlit-tip-header {\n    padding: 6px 10px;\n    background: color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n.moonlit-tip-content {\n    padding: 0;\n    max-height: 0;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    /* JS toggles max-height: 1000px when expanded */\n}`,
            },
            {
                name: 'moonlit-section expanded',
                html: `<div class="csc--moonlit-sec" style="border:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 25%,transparent);border-radius:5px;overflow:hidden;width:220px"><div class="csc--moonlit-sec-hdr" style="background:color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);padding:5px 12px;border-bottom:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 25%,transparent);display:flex;justify-content:space-between;align-items:center;cursor:pointer"><span style="font-weight:600;font-size:0.9em">Section Title</span><i class="fa fa-chevron-down" style="font-size:0.85em;transform:rotate(180deg);transition:transform 0.4s"></i></div><div class="csc--moonlit-sec-body" style="padding:10px;font-size:0.82em;opacity:0.8;max-height:2000px;overflow:hidden;transition:all 0.4s cubic-bezier(0.4,0,0.2,1)">Content visible here</div></div>`,
                css: `.moonlit-section {\n    border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 25%, transparent);\n    border-radius: 5px;\n    margin-bottom: 15px;\n    overflow: hidden;\n}\n.moonlit-section-header {\n    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);\n    padding: 5px 12px;\n    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 25%, transparent);\n}\n.moonlit-section-toggle {\n    cursor: pointer;\n    user-select: none;\n}\n.moonlit-section-content {\n    max-height: 0;\n    overflow: hidden;\n    padding: 0 10px;\n    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n}\n.moonlit-section.expanded .moonlit-section-content {\n    max-height: 2000px;\n    padding: 10px;\n    opacity: 1;\n}`,
            },
            {
                name: 'moonlit-tab-buttons',
                html: `<div class="csc--moonlit-tabs" style="width:240px"><div style="display:flex;border-bottom:1px solid color-mix(in srgb,var(--SmartThemeBodyColor) 10%,transparent);margin-bottom:10px"><button class="csc--moonlit-tab-btn" data-tab="t1" style="padding:7px 10px;background:none;border:none;border-bottom:2px solid var(--SmartThemeBodyColor);cursor:pointer;color:var(--SmartThemeBodyColor);opacity:1;font-size:0.82em">Tab One</button><button class="csc--moonlit-tab-btn" data-tab="t2" style="padding:7px 10px;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;color:var(--SmartThemeBodyColor);opacity:0.6;font-size:0.82em">Tab Two</button><button class="csc--moonlit-tab-btn" data-tab="t3" style="padding:7px 10px;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;color:var(--SmartThemeBodyColor);opacity:0.6;font-size:0.82em">Tab Three</button></div><div class="csc--moonlit-tab-pane" data-tab="t1" style="font-size:0.82em;opacity:0.7;padding:2px 4px">Tab One content</div><div class="csc--moonlit-tab-pane" data-tab="t2" style="display:none;font-size:0.82em;opacity:0.7;padding:2px 4px">Tab Two content</div><div class="csc--moonlit-tab-pane" data-tab="t3" style="display:none;font-size:0.82em;opacity:0.7;padding:2px 4px">Tab Three content</div></div>`,
                css: `.moonlit-tabs {\n    margin-bottom: 20px;\n}\n.moonlit-tab-buttons {\n    display: flex;\n    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);\n    margin-bottom: 15px;\n}\n.moonlit-tab-button {\n    padding: 8px 10px;\n    background: none;\n    border: none;\n    border-bottom: 1px solid transparent;\n    cursor: pointer;\n    color: var(--SmartThemeBodyColor);\n    opacity: 0.7;\n    transition: all 0.5s ease;\n}\n.moonlit-tab-button:hover {\n    opacity: 0.9;\n}\n.moonlit-tab-button.active {\n    opacity: 1;\n    border-bottom: 1px solid var(--SmartThemeBodyColor);\n}\n.moonlit-tab-content {\n    display: none;\n}\n.moonlit-tab-content.active {\n    display: block;\n}`,
            },
        ],
    },
    {
        category: 'WorldInfoDrawer — Chips & Badges',
        items: [
            {
                name: 'Visibility Chips',
                html: `<div style="display:flex;align-items:center;gap:0.35em;flex-wrap:wrap"><span style="display:inline-flex;align-items:center;gap:0.25em;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.1em 0.35em;font-size:0.8em;background:var(--black30a)"><i class="fa-solid fa-globe" style="font-size:0.75em"></i> Global</span><span style="display:inline-flex;align-items:center;gap:0.25em;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.1em 0.35em;font-size:0.8em;background:var(--black30a)"><i class="fa-solid fa-comment" style="font-size:0.75em"></i> Chat</span></div>`,
                css: `.stwid--visibilityChips {\n    display: flex;\n    align-items: center;\n    align-content: flex-start;\n    gap: 0.35em;\n    flex-wrap: wrap;\n    flex: 1 1 auto;\n    min-width: 0;\n    align-self: center;\n}`,
            },
            {
                name: 'Filter Chip',
                html: `<div style="display:inline-flex;align-items:center;gap:0.25em;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.1em 0.35em;font-size:0.85em;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 85%,black 10%)">Position: <strong>0</strong><i class="fa-solid fa-xmark" style="opacity:0.6;cursor:pointer;margin-left:2px"></i></div>`,
                css: `.stwid--filterChip {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.25em;\n    border: 1px solid var(--SmartThemeBorderColor);\n    border-radius: var(--stwid-radius-s, 4px);\n    padding: 0.1em 0.35em;\n    font-size: 0.85em;\n    background-color: color-mix(in srgb, var(--SmartThemeBlurTintColor) 85%, black 10%);\n}`,
            },
            {
                name: 'Folder Count Badge',
                html: `<span style="opacity:0.85;background:color-mix(in srgb,var(--SmartThemeBodyColor) 12%,transparent);border-radius:999px;padding:0.1em 0.45em;font-size:0.85em;line-height:1.2">12</span>`,
                css: `.stwid--folderCount {\n    opacity: 0.85;\n    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 12%, transparent);\n    border-radius: 999px;\n    padding: 0.1em 0.45em;\n    font-size: 0.85em;\n    line-height: 1.2;\n}`,
            },
        ],
    },
    {
        category: 'WorldInfoDrawer — Dropdowns',
        items: [
            {
                name: 'Multiselect Dropdown Wrapper',
                html: `<div style="position:relative;display:inline-flex;align-items:center;gap:0.35em"><button class="menu_button menu_button_icon" style="font-size:0.85em"><i class="fa-solid fa-eye"></i><span> Visibility</span><i class="fa-solid fa-caret-down" style="margin-left:4px"></i></button></div>`,
                css: `.stwid--multiselectDropdownWrap {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    gap: 0.35em;\n}`,
            },
            {
                name: 'Action List Dropdown Menu',
                html: `<div style="display:inline-flex;flex-direction:column;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 95%,black 10%);border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.5em;font-size:0.9em;min-width:120px"><div style="display:flex;align-items:center;gap:0.5em;padding:0.2em 0.4em;cursor:pointer"><i class="fa-solid fa-pen"></i><span>Rename</span></div><div style="display:flex;align-items:center;gap:0.5em;padding:0.2em 0.4em;cursor:pointer"><i class="fa-solid fa-copy"></i><span>Duplicate</span></div><div style="display:flex;align-items:center;gap:0.5em;padding:0.2em 0.4em;cursor:pointer"><i class="fa-solid fa-trash" style="opacity:0.8"></i><span>Delete</span></div></div>`,
                css: `.stwid--listDropdownMenu {\n    --stwid-menu-item-height: 2.05em;\n\n    position: fixed;\n    filter: drop-shadow(1px 1px 2px var(--black50a));\n    z-index: 30000;\n    overflow: clip auto;\n    border: 1px solid var(--SmartThemeBorderColor);\n    border-radius: var(--stwid-radius-m, 6px);\n    display: flex;\n    flex-direction: column;\n    background-color: color-mix(in srgb, var(--SmartThemeBlurTintColor) 95%, black 10%);\n    font-size: 0.9em;\n    padding: 0.5em;\n}`,
            },
        ],
    },
    {
        category: 'WorldInfoDrawer — Bulk Edit',
        items: [
            {
                name: 'Bulk Edit Container',
                html: `<div style="display:flex;align-items:center;gap:0.5em;border:1px solid var(--SmartThemeBorderColor);border-radius:4px;padding:0.35em 0.65em;position:relative"><span style="font-size:0.85em">Depth</span><input type="number" class="text_pole" value="4" style="min-height:5px;padding:0 5px;font-size:0.95em;width:3.5em"></div>`,
                css: `.stwid--bulkEditContainer {\n    display: flex;\n    align-items: center;\n    gap: 0.5em;\n    border: 1px solid var(--SmartThemeBorderColor);\n    border-radius: var(--stwid-radius-s, 4px);\n    padding: 0.35em 0.65em;\n    position: relative;\n}`,
            },
            {
                name: 'Compact Number Input',
                html: `<input type="number" class="text_pole" value="99" style="min-height:5px;padding-left:5px;padding-right:5px;font-size:0.95em;width:3.5em">`,
                css: `.stwid-compactInput {\n    min-height: 5px;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 0.95em;\n    width: 3.5em;\n}`,
            },
            {
                name: 'Recursion Checkbox Row',
                html: `<label style="display:flex;align-items:center;gap:0.4em;font-size:0.9em;cursor:pointer"><input type="checkbox" class="checkbox" style="width:0.85em;height:0.85em"><span>Prioritize</span></label>`,
                css: `.stwid--recursionRow {\n    display: flex;\n    align-items: center;\n    gap: 0.4em;\n}\n.stwid--recursionRow .checkbox {\n    width: 0.85em;\n    height: 0.85em;\n}`,
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
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

/** Escapes HTML special characters for safe rendering inside &lt;pre&gt; blocks. */
function escHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
            const active = b.dataset.tab === tabId;
            b.style.opacity = active ? '1' : '0.6';
            b.style.borderBottom = active ? '2px solid var(--SmartThemeBodyColor)' : '2px solid transparent';
        });
        group.querySelectorAll('.csc--moonlit-tab-pane').forEach(p => {
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
