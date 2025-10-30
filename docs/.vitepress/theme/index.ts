import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './custom.css';

const AUR_PREF_KEY = 'preferredAurHelper';
const AUR_HELPERS = ['paru', 'yay'] as const;
type AurHelper = typeof AUR_HELPERS[number];

function getSavedPreference(): AurHelper {
	try {
		const stored = localStorage.getItem(AUR_PREF_KEY);
		if (stored && (AUR_HELPERS as readonly string[]).includes(stored)) {
			return stored as AurHelper;
		}
	} catch {}
	return 'paru';
}

function savePreference(value: AurHelper): void {
	try {
		localStorage.setItem(AUR_PREF_KEY, value);
	} catch {}
}

function isAurTabLabel(label: string): label is AurHelper {
	const t = label.trim().toLowerCase();
	return (AUR_HELPERS as readonly string[]).includes(t);
}

function getGroupTabButtons(groupEl: Element): HTMLElement[] {
    const selectors = [
        '.tabs button',
        '.tabs .item',
        '.tabs [role="tab"]',
        '.tabs label',
        '.vp-code-group__nav button',
        '.vp-code-group__nav .item',
        '.vp-code-group__nav [role="tab"]',
        '.vp-code-group__nav label',
        '[role="tab"]'
    ];
	for (const sel of selectors) {
		const found = Array.from(groupEl.querySelectorAll<HTMLElement>(sel));
		if (found.length > 0) return found;
	}
	return Array.from(groupEl.querySelectorAll<HTMLElement>('button'));
}

function isButtonSelected(btn: HTMLElement): boolean {
	const aria = btn.getAttribute('aria-selected');
	if (aria != null) return aria === 'true';
	return btn.classList.contains('active') || btn.classList.contains('is-active');
}

function activateGroupTab(groupEl: Element, helper: AurHelper): void {
	const tabButtons = getGroupTabButtons(groupEl);
	for (const btn of tabButtons) {
		const label = (btn.textContent || '').trim().toLowerCase();
		if (label === helper) {
			if (!isButtonSelected(btn)) {
				// Temporarily override scrollIntoView to prevent auto-scroll
				const originalScrollIntoView = btn.scrollIntoView.bind(btn);
				btn.scrollIntoView = () => {}; // no-op
				
				(btn as HTMLButtonElement).click();
				
				// Restore after click is processed
				setTimeout(() => {
					btn.scrollIntoView = originalScrollIntoView;
				}, 50);
			}
			break;
		}
	}
}

function updateCheatSheet(helper: AurHelper): void {
	const allSheets = document.querySelectorAll('.aur-cheat-sheet');
	if (allSheets.length === 0) return; // Elements not loaded yet
	allSheets.forEach((sheet) => {
		const helperAttr = sheet.getAttribute('data-helper');
		if (helperAttr === helper) {
			(sheet as HTMLElement).style.display = 'block';
		} else {
			(sheet as HTMLElement).style.display = 'none';
		}
	});
}

function restoreScrollPosition(scrollX: number, scrollY: number, attempts = 10): void {
	if (attempts <= 0) return;
	const currentX = window.scrollX;
	const currentY = window.scrollY;
	// Only restore if position has actually changed
	if (Math.abs(currentX - scrollX) > 1 || Math.abs(currentY - scrollY) > 1) {
		try {
			// Try modern API first (behavior: 'instant' may not be supported everywhere)
			window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' } as ScrollToOptions);
		} catch {
			// Fallback to old API
			window.scrollTo(scrollX, scrollY);
		}
		// Try again if still not restored (in case of async scroll)
		requestAnimationFrame(() => {
			setTimeout(() => restoreScrollPosition(scrollX, scrollY, attempts - 1), 5);
		});
	}
}

function applyPreferenceToPage(helper: AurHelper): void {
	// Save scroll position before any changes
	const scrollX = window.scrollX;
	const scrollY = window.scrollY;
	
	const groups = document.querySelectorAll('.vp-code-group, [class*="code-group"]');
	// console.debug('[aur-sync] apply to page', helper, groups.length);
	groups.forEach((group) => activateGroupTab(group, helper));
	updateCheatSheet(helper);
	
	// Aggressively restore scroll position using multiple methods
	const scrollToPos = () => {
		try {
			window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' } as ScrollToOptions);
		} catch {
			window.scrollTo(scrollX, scrollY);
		}
	};
	
	// Immediately restore
	scrollToPos();
	
	// Use requestAnimationFrame for next frame
	requestAnimationFrame(() => {
		scrollToPos();
		// Double RAF for cases where DOM updates happen after first frame
		requestAnimationFrame(() => {
			scrollToPos();
			// Continue restoration attempts with delays
			restoreScrollPosition(scrollX, scrollY);
		});
	});
	
	// Also try immediate setTimeout restoration
	setTimeout(scrollToPos, 0);
}

function attachGlobalSync(): void {
    document.addEventListener('change', (ev) => {
        const target = ev.target as HTMLElement | null;
        if (!target) return;
        const input = (target as HTMLInputElement);
        if (input.tagName !== 'INPUT' || input.type !== 'radio') return;
        const group = input.closest('.vp-code-group');
        if (!group) return;
        const id = input.id;
        let labelText = '';
        if (id) {
            try {
                const labelEl = group.querySelector(`label[for="${id.replace(/"/g, '\\"')}"]`) as HTMLElement | null;
                if (labelEl) labelText = (labelEl.textContent || '').trim().toLowerCase();
            } catch {}
        }
        if (!labelText) {
            // Fallback: try aria-controls link from input to find a sibling label text
            const maybeLabel = input.nextElementSibling as HTMLElement | null;
            if (maybeLabel && maybeLabel.tagName === 'LABEL') {
                labelText = (maybeLabel.textContent || '').trim().toLowerCase();
            }
        }
        if (!isAurTabLabel(labelText)) return;
        savePreference(labelText as AurHelper);
        applyPreferenceToPage(labelText as AurHelper);
    }, true);
}

const theme: Theme = {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp?.(ctx);
		if (typeof window === 'undefined') return;

		const pref = getSavedPreference();
		const initApply = () => {
			// Use requestAnimationFrame to ensure DOM is ready
			requestAnimationFrame(() => {
				applyPreferenceToPage(pref);
			});
		};
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initApply, { once: true });
		} else {
			initApply();
		}

		attachGlobalSync();

		ctx.router.onAfterPageLoad = () => {
			const currentPref = getSavedPreference();
			requestAnimationFrame(() => {
				applyPreferenceToPage(currentPref);
			});
		};
	}
};

export default theme;
