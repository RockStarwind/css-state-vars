/**
  * css-state-vars
  * BSD 2-Clause License
  * Copyright (c) Rock Starwind, 2020
*/

// The following code loops through every known property and registers the "--<property>__<pseudo-class>" custom CSS property to be non-inheritable.
// Example: --background-color__is-hovered
(function() {
	let htmlEl = document.querySelector("html");
	let properties = window.getComputedStyle(htmlEl);
	let states = [
		"hovered",
		"hovered-from-parent",
		"hovered-directly-from-parent",
		"hovered-from-sibling",
		"hovered-directly-from-sibling",
		
		"focused",
		"focused-within",
		"focused-visible",
		"focused-from-parent",
		"focused-directly-from-parent",
		"focused-from-sibling",
		"focused-directly-from-sibling",
		
		"active",
		"active-from-parent",
		"active-directly-from-parent",
		"active-from-sibling",
		"active-directly-from-sibling",
		
		"any-link",
		"link",
		"local-link",
		"visited",
		
		"targeted",
		"targeted-from-parent",
		"targeted-directly-from-parent",
		"targeted-from-sibling",
		"targeted-directly-from-sibling",
		"targeted-within",
		
		"checked",
		"checked-from-sibling",
		"checked-directly-from-sibling",
		"indeterminate",
		"indeterminate-from-sibling",
		"indeterminate-directly-from-sibling",
		
		"blank",
		"blank-from-sibling",
		"blank-directly-from-sibling",
		"disabled",
		"disabled-from-sibling",
		"disabled-directly-from-sibling",
		"enabled",
		"enabled-from-sibling",
		"enabled-directly-from-sibling",
		"in-range",
		"in-range-from-sibling",
		"in-range-directly-from-sibling",
		"out-of-range",
		"out-of-range-from-sibling",
		"out-of-range-directly-from-sibling",
		"default",
		"default-from-sibling",
		"default-directly-from-sibling",
		"optional",
		"optional-from-sibling",
		"optional-directly-from-sibling",
		"required",
		"required-from-sibling",
		"required-directly-from-sibling",
		"read-only",
		"read-only-from-sibling",
		"read-only-directly-from-sibling",
		"read-write",
		"read-write-from-sibling",
		"read-write-directly-from-sibling",
		
		"invalid",
		"invalid-from-parent",
		"invalid-directly-from-parent",
		"invalid-from-sibling",
		"invalid-directly-from-sibling",
		"valid",
		"valid-from-parent",
		"valid-directly-from-parent",
		"valid-from-sibling",
		"valid-directly-from-sibling",
		
		"showing-placeholder",
		
		"empty",
		"first-child",
		"last-child",
		"first-of-type",
		"last-of-type",
		"only-child",
		"only-of-type",
		"even-child",
		"even-of-type",
		"odd-child",
		"odd-of-type",
		
		"first-page",
		"left-page",
		"right-page",
		
		"defined",
		"fullscreen",
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
