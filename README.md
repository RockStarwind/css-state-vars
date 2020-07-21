# css-state-vars
Inspired by @propjockey's [CSS Media Vars](https://github.com/propjockey/css-media-vars), this was developed to get a feel for what the [Space Toggle Hack](https://propjockey.github.io/bcd7sdd/) can do so it's largely an experiment and was created for funsies.

## How it works
* The CSS File of css state vars adds several dozen CSS custom properties to the `html *` selector.
* The JS File of css state vars registers hundreds of properties by looping through all known properties (example: `background-color`, `border-width`) and shorthands (example: `background`, `border`) in various states (example: `is-hovered`, `is-checked`), making them non-inheritable.

This can be used to make small changes to certain properties when elements enter certain states without needing to write a new CSS Rule.

## css state vars Custom Properties
A large number of CSS custom properties are applied to all children of `html`.

* **Hovered State**
	* `--is-hovered`:  
		An element is hovered.
	* `--is-hovered-from-parent`:  
		A parent element is hovered.
	* `--is-hovered-directly-from-parent`:  
		Direct ascendant element is hovered.
	* `--is-hovered-from-sibling`:  
		A generally preceding sibling element is hovered.
	* `--is-hovered-directly-from-sibling`:  
		The previous sibling element is hovered.
* **Focused State**
	* `--is-focused`:  
		An element has received focus
	* `--is-focused-from-parent`:  
		A parent element has received focus.
	* `--is-focused-directly-from-parent`:  
		Direct ascendant element has received focus.
	* `--is-focused-from-sibling`:  
		A generally preceding sibling element has received focus.
	* `--is-focused-directly-from-sibling`:  
		The previous sibling element has received focus.
	* `--is-focused-within`:  
		A child element has received focus.
	* `--is-focused-visible`
* **Active State**
	* `--is-active`:  
		An element is in an active state.
	* `--is-active-from-parent`:  
		A parent element is in an active state.
	* `--is-active-directly-from-parent`:  
		Direct ascendant element is in an active state.
	* `--is-active-from-sibling`:  
		A generally preceding sibling element is in an active state.
	* `--is-active-directly-from-sibling`:  
		The previous sibling element is in an active state.
* **Link**
	* `--is-any-link`
	* `--is-link`
	* <del>`--is-local-link`</del>
	* `--is-visited`
* **Targeted State**
	* `--is-targeted`:  
		An element is the currently active target.
	* `--is-targeted-from-parent`:  
		A parent element is the currently active target.
	* `--is-targeted-directly-from-parent`:  
		Direct ascendant element is the currently active target.
	* `--is-targeted-from-sibling`:  
		A generally preceding sibling element is the currently active target.
	* `--is-targeted-directly-from-sibling`:  
		The previous sibling element is the currently active target.
	* <del>`--is-targeted-within`</del>:  
		A child element is the currently active target.
* **Form: Checked State**
	* `--is-checked`:  
		An element has been selected/checked.
	* `--is-checked-from-sibling`:  
		A generally preceding sibling element has been selected/checked.
	* `--is-checked-directly-from-sibling`:  
		The previous sibling element has been selected/checked.
* **Form: Indeterminate State**
	* `--is-indeterminate`:  
		A checkbox element is in an indeterminate state.
	* `--is-indeterminate-from-sibling`:  
		A generally preceding sibling checkbox element is in an indeterminate state.
	* `--is-indeterminate-directly-from-sibling`:  
		The previous sibling checkbox element is in an indeterminate state.
* **Form: General**
	* _Blank Input_
		* `--is-blank`
		* `--is-blank-from-sibling`
		* `--is-blank-directly-from-sibling`
	* _Disabled Input_
		* `--is-disabled`
		* `--is-disabled-from-sibling`
		* `--is-disabled-directly-from-sibling`
	* _Enabled Input_
		* `--is-enabled`
		* `--is-enabled-from-sibling`
		* `--is-enabled-directly-from-sibling`
	* _Input is in range_
		* `--is-in-range`
		* `--is-in-range-from-sibling`
		* `--is-in-range-directly-from-sibling`
	* _Input is out of range_
		* `--is-out-of-range`
		* `--is-out-of-range-from-sibling`
		* `--is-out-of-range-directly-from-sibling`
	* _Default option/submission button_
		* `--is-default`
		* `--is-default-from-sibling`
		* `--is-default-directly-from-sibling`
	* _Optional Input_
		* `--is-optional`
		* `--is-optional-from-sibling`
		* `--is-optional-directly-from-sibling`
	* _Required Input_
		* `--is-required`
		* `--is-required-from-sibling`
		* `--is-required-directly-from-sibling`
	* _Read Only Input_
		* `--is-read-only`
		* `--is-read-only-from-sibling`
		* `--is-read-only-directly-from-sibling`
	* _Readable Writable Input_
		* `--is-read-write`
		* `--is-read-write-from-sibling`
		* `--is-read-write-directly-from-sibling`
	* _Placeholder_
		* `--is-showing-placeholder`
	* _Invalid Form/Input_
		* `--is-invalid`
		* `--is-invalid-from-parent`
		* `--is-invalid-directly-from-parent`
		* `--is-invalid-from-sibling`
		* `--is-invalid-directly-from-sibling`
	* _Valid Form/Input_
		* `--is-valid`
		* `--is-valid-from-parent`
		* `--is-valid-directly-from-parent`
		* `--is-valid-from-sibling`
		* `--is-valid-directly-from-sibling`
* **First/Last/Only/Even/Odd Children Elements**
	* `--is-first-child`
	* `--is-last-child`
	* `--is-only-child`
	* `--is-even-child`
	* `--is-odd-child`
	* `--is-first-of-type`
	* `--is-last-of-type`
	* `--is-only-of-type`
	* `--is-even-of-type`
	* `--is-odd-of-type`
	* `--is-empty`
* **Print**
	* `--is-first-page`
	* `--is-left-page`
	* `--is-right-page`
* **Miscellaneous**
	* `--is-defined`
	* `--is-fullscreen`

## How to use it
* 
