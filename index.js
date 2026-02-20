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
                name: '.menu_button (icon + label)',
                html: '<div class="menu_button menu_button_icon"><i class="fa-solid fa-star"></i><span>Starred</span></div>',
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
        category: 'Panels & Layout',
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
                name: '.flex-container',
                html: '<div class="flex-container"><div class="menu_button">A</div><div class="menu_button">B</div><div class="menu_button">C</div></div>',
            },
            {
                name: '.flex-container.flexGap5',
                html: '<div class="flex-container flexGap5"><div class="menu_button">One</div><div class="menu_button">Two</div></div>',
            },
            {
                name: '.sysHR (horizontal rule)',
                html: '<hr class="sysHR">',
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

// ── Helpers ────────────────────────────────────────────────────────────────

/** Returns true if the CSS value looks like a color. */
function isColorValue(value) {
    return /^(rgb|rgba|hsl|hsla|#[0-9a-f]{3,8}|oklch|color\()/i.test(value.trim());
}

/** Escapes HTML special characters for safe embedding in attribute values. */
function escAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// ── Build overlay HTML ─────────────────────────────────────────────────────

function buildComponentSections() {
    return COMPONENTS.map(({ category, items }) => {
        const cards = items.map(({ name, html }) => `
            <div class="csc--card" data-copy="${escAttr(name)}" title="Click to copy: ${escAttr(name)}">
                <div class="csc--card-preview">${html}</div>
                <div class="csc--card-name">${name}</div>
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
            <div class="csc--var-card" data-copy="${escAttr(name)}" data-varname="${escAttr(name)}" title="Click to copy: ${escAttr(name)}">
                <span class="csc--var-swatch-slot"></span>
                <span class="csc--var-name">${name}</span>
            </div>`).join('');
        return `
            <section class="csc--section">
                <h3 class="csc--section-title">${category}</h3>
                <div class="csc--var-grid">${cards}</div>
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
            </div>
        </div>
        <div class="csc--content">
            <div class="csc--pane" data-pane="components">
                ${buildComponentSections()}
            </div>
            <div class="csc--pane csc--pane-hidden" data-pane="vars">
                ${buildVarSections()}
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

    // Add top-bar icon
    const btn = document.createElement('div');
    btn.id = `${EXTENSION_ID}_btn`;
    btn.className = 'drawer-icon fa-solid fa-palette fa-fw closedIcon';
    btn.title = 'CSS Cheat Sheet';
    btn.setAttribute('aria-label', 'CSS Cheat Sheet');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCheatSheet();
    });
    document.getElementById('top-settings-holder')?.prepend(btn);

    // Close on overlay backdrop click (outside the panel)
    document.getElementById(`${EXTENSION_ID}_overlay`).addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeCheatSheet();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) closeCheatSheet();
    });

    // Copy component class name on card click
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.csc--card');
        if (!card) return;
        const text = card.dataset.copy;
        if (!text) return;
        navigator.clipboard.writeText(text).catch(() => {});
        flashCopied(card);
    });

    // Copy CSS variable name on var-card click
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.csc--var-card');
        if (!card) return;
        const text = card.dataset.copy;
        if (!text) return;
        navigator.clipboard.writeText(text).catch(() => {});
        flashCopied(card);
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
});
