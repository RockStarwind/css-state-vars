/**
  * css-state-vars
  * BSD 2-Clause License
  * Copyright (c) Rock Starwind, 2020
*/

// The following code loops through every known property and registers the "--<property>__is-<pseudo-class>" custom CSS property to be non-inheritable.
// Example: --background-color__is-hovered
(function() {
	let htmlEl = document.querySelector("html");
	let properties = window.getComputedStyle(htmlEl);
	let states = [
		"is-hovered",
		"is-hovered-from-parent",
		"is-hovered-directly-from-parent",
		"is-hovered-from-sibling",
		"is-hovered-directly-from-sibling",
		
		"is-focused",
		"is-focused-within",
		"is-focused-visible",
		"is-focused-from-parent",
		"is-focused-directly-from-parent",
		"is-focused-from-sibling",
		"is-focused-directly-from-sibling",
		
		"is-active",
		"is-active-from-parent",
		"is-active-directly-from-parent",
		"is-active-from-sibling",
		"is-active-directly-from-sibling",
		
		"is-any-link",
		"is-link",
		"is-local-link",
		"is-visited",
		
		"is-targeted",
		"is-targeted-from-parent",
		"is-targeted-directly-from-parent",
		"is-targeted-from-sibling",
		"is-targeted-directly-from-sibling",
		"is-targeted-within",
		
		"is-checked",
		"is-checked-from-sibling",
		"is-checked-directly-from-sibling",
		"is-indeterminate",
		"is-indeterminate-from-sibling",
		"is-indeterminate-directly-from-sibling",
		
		"is-blank",
		"is-blank-from-sibling",
		"is-blank-directly-from-sibling",
		"is-disabled",
		"is-disabled-from-sibling",
		"is-disabled-directly-from-sibling",
		"is-enabled",
		"is-enabled-from-sibling",
		"is-enabled-directly-from-sibling",
		"is-in-range",
		"is-in-range-from-sibling",
		"is-in-range-directly-from-sibling",
		"is-out-of-range",
		"is-out-of-range-from-sibling",
		"is-out-of-range-directly-from-sibling",
		"is-default",
		"is-default-from-sibling",
		"is-default-directly-from-sibling",
		"is-optional",
		"is-optional-from-sibling",
		"is-optional-directly-from-sibling",
		"is-required",
		"is-required-from-sibling",
		"is-required-directly-from-sibling",
		"is-read-only",
		"is-read-only-from-sibling",
		"is-read-only-directly-from-sibling",
		"is-read-write",
		"is-read-write-from-sibling",
		"is-read-write-directly-from-sibling",
		
		"is-invalid",
		"is-invalid-from-parent",
		"is-invalid-directly-from-parent",
		"is-invalid-from-sibling",
		"is-invalid-directly-from-sibling",
		"is-valid",
		"is-valid-from-parent",
		"is-valid-directly-from-parent",
		"is-valid-from-sibling",
		"is-valid-directly-from-sibling",
		
		"is-showing-placeholder",
		
		"is-empty",
		"is-first-child",
		"is-last-child",
		"is-first-of-type",
		"is-last-of-type",
		"is-only-child",
		"is-only-of-type",
		"is-even-child",
		"is-even-of-type",
		"is-odd-child",
		"is-odd-of-type",
		
		"is-first-page",
		"is-left-page",
		"is-right-page",
		
		"is-defined",
		"is-fullscreen",
	]
	for (let i = 0; i < properties.length; i++) {
		let property = properties[i];
		for (let j = 0; j < states.length; j++) {
			let state = states[j];
			CSS.registerProperty({
				name: `--${property}__${state}`,
				inherits: false,
			});
		}
	}
})()
