# Guide to CSS

A quick reference for some of the trickier concepts used in `style.css`. If you're new to CSS, read through this before diving into the stylesheet itself.

## Sizing units: rem, em, and px

CSS lets you size things in several different units. Here are the ones this project uses.

**rem** is relative to the root element's font-size (the `html` element, near the top of `style.css`). If `html`'s font-size is 16px, then `1rem` = 16px and `2rem` = 32px, no matter where in the page you use it. Because it's anchored to one place, `rem` is predictable, which is why this stylesheet uses it for most spacing.

**em** is relative to the *current* element's own font-size. This makes `em` nest – a parent set to `font-size: 2em` containing a child also set to `font-size: 2em` ends up 4x the root size, not 2x, since each `em` multiplies against the size it inherited. That compounding makes `em` trickier to predict than `rem`, but it's useful when you want something to scale directly with its own text, like a button's padding growing along with its label.

**px** looks like it should mean "one pixel on your screen," but it doesn't always. If you zoom in your browser, or you're on a high-resolution screen, a CSS "pixel" might not line up with an actual physical pixel. Treat `px` as just a fixed unit of measurement, not a literal dot on the screen.

There are other units too, like `%` (a percentage of the parent element's size — used in a few places in `style.css`, like `.image`'s `max-width: 90%`), but `rem`, `em`, and `px` cover most of what you'll see in this file.

## The box model: padding, border, and margin

Every element is a box shaped like this, from the inside out: content, then padding, then border, then margin.

- **padding** is space *inside* the element, between its content and its border. It takes on the element's own background color.
- **border** is a visible line drawn around the element, outside the padding.
- **margin** is space *outside* the element, between its border and neighboring elements. Margin is always transparent — it's not part of the element itself, just empty space around it.

**Shorthand:** a single value like `padding: 1em` sets all four sides at once. Two values like `margin: 0 1em` set top/bottom, then left/right. Four values like `border-width: 1px 2px 3px 4px` go clockwise: top, right, bottom, left.

## Selectors

How `style.css` picks which elements to style:

- `.foo` is a **class selector** — matches any element with `class="foo"`.
- `foo` (no dot) is an **element/type selector** — matches every `<foo>` tag.
- `.foo.bar`, two classes with no space between them, matches an element that has *both* `class="foo"` and `class="bar"` at once.
- `.foo bar`, with a space, means "descendant" — matches any `<bar>` element anywhere inside a `.foo` element, no matter how deeply nested.
- `.foo > bar` means "direct child" — matches a `<bar>` only if it's an immediate child of `.foo`, not a grandchild or deeper.
- `.foo:hover` is a **pseudo-class** — matches `.foo` only while some condition is true. `:hover` is while the mouse is over it, `:link` is an unvisited link, `:visited` is a visited link.
- `a, b`, with a comma, means "either" — one rule applies to both selectors.

## Flexbox

Used throughout `style.css` for laying things out side by side.

Setting `display: flex` on an element makes it a **flex container**: its direct children (not deeper descendants) become **flex items** and line up along one axis — by default a row, left to right — instead of stacking as normal blocks.

**Properties that go on the container** (the element with `display: flex`):

- `flex-direction` / `flex-flow`: which way items line up. `row` (default) or `column`. `flex-flow` is shorthand for `flex-direction` + `flex-wrap` together.
- `flex-wrap`: whether items must all fit on one line (default) or are allowed to wrap onto more lines when they run out of room.
- `justify-content`: aligns items along the *main* axis (horizontally, in a row) — e.g. `center`, `space-between`, `flex-start`.
- `align-items`: aligns items along the *cross* axis (vertically, in a row) — e.g. `center`, `stretch` (the default).
- `gap`: space between items, without needing margins on each one.

**Properties that go on an item** (a direct child of a flex container):

- `flex: <number>` controls how an item grows/shrinks to fill leftover space, relative to its siblings. Two items set to `flex: 1` and `flex: 2` split a row 1-part to 2-parts, so the second ends up twice as wide as the first. (This is unrelated to the `.flex` class name in `style.css` — same word, two different things: one's a CSS property, the other's a class we made up.)
- `align-self`: overrides `align-items` for just that one item.
- `flex-basis`: an item's starting size before the leftover space gets divided up between siblings.
