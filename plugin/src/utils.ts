/**
 * Predefined CSS rules for styling barcode scanner components.
 * Each object in the array defines a CSS rule, with a selector and the CSS properties to apply.
 */
export const barcodeScannerCss = [
  { selector: '.scanner-container-display', css: 'display: block;' },
  {
    selector: '.scanner-dialog',
    css: 'display: none; position: fixed; z-index: 999; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);',
  },
  {
    selector: '.scanner-dialog-inner',
    css: 'background-color: #fefefe; margin: 2% auto; padding: 20px; border: 1px solid #888; width: 96%;',
  },
  { selector: '.close-button', css: 'color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;' },
  { selector: '.close-button:hover', css: 'color: #222;' },
  { selector: '.scanner-container-full-width', css: 'width: 100%;' },
];

/**
 * Dynamically applies a set of CSS rules to the document.
 * If a custom style element with a specific ID does not exist, it is created and appended to the document's head.
 * Existing rules in the style element are cleared before new ones are applied.
 * This function supports both modern and older browsers by using `CSSStyleSheet.insertRule` and `textContent` respectively.
 *
 * @param {Array<{selector: string, css: string}>} cssRules - An array of objects containing CSS selectors and styles to apply.
 */
export function applyCss(cssRules: { selector: string; css: string }[]): void {
  const styleId = 'custom-style-os-cap-barcode'; // Unique identifier for the style element.
  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;
  if (!styleElement) {
    // Create and append a new style element if it does not exist.
    styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  if (styleElement.sheet) {
    // Clear existing CSS rules.
    while (styleElement.sheet.cssRules.length) {
      styleElement.sheet.deleteRule(0);
    }
    // Insert new CSS rules.
    for (const { selector, css } of cssRules) {
      styleElement.sheet.insertRule(`${selector} { ${css} }`);
    }
  } else {
    // Fallback for older browsers using textContent.
    styleElement.textContent = '';
    for (const { selector, css } of cssRules) {
      styleElement.textContent += `${selector} { ${css} }`;
    }
  }
}
