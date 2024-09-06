### NobleUtils - `debounce` Utility

### Function:
- `debounce(func, wait)`

### Parameters:

- **`func`** (`Function`): The function to debounce. This function will be delayed and executed after the specified wait time.

- **`wait`** (`number`): The number of milliseconds to delay the execution of `func` after the last invocation. This defines the debounce delay.

### Description:

The `debounce` function from NobleUtils creates a debounced version of a given function, which delays its execution until after a specified wait time has passed since the last time the debounced function was invoked. This utility is ideal for optimizing performance, especially for high-frequency events like resizing or scrolling.

### How It Works:

1. **Setup Timeout**:
   - The debounced function sets up a timeout to delay the execution of `func` by the specified `wait` time.

2. **Clear Timeout**:
   - If the debounced function is called again before the timeout completes, the existing timeout is cleared, and a new one is set. This ensures that `func` executes only after the `wait` duration has passed without further calls.

3. **Execute Function**:
   - After the `wait` time has elapsed, `func` is executed with the latest arguments and context.

### Examples

**Debouncing a Resize Event Handler:**
```javascript
import { debounce } from 'noble-utils';

function handleResize() {
    console.log('Resize event handler executed.');
}

const debouncedResize = debounce(handleResize, 200);

window.addEventListener('resize', debouncedResize);
```

**Debouncing a Search Input Field:**
```javascript
import { debounce } from 'noble-utils';

function search(query) {
    console.log('Searching for:', query);
}

const debouncedSearch = debounce((e) => search(e.target.value), 300);

document.getElementById('searchInput').addEventListener('input', debouncedSearch);
```

**Debouncing a Button Click Event:**
```javascript
import { debounce } from 'noble-utils';

function handleClick() {
    console.log('Button clicked.');
}

const debouncedClick = debounce(handleClick, 500);

document.getElementById('myButton').addEventListener('click', debouncedClick);
```

**Debouncing Scroll Event with `scrollToSection`:**
```javascript
import { debounce } from 'noble-utils';
import { scrollToSection } from 'noble-utils';

// Function to handle scrolling to sections
function handleScroll() {
    console.log('Scroll event handler executed.');
    scrollToSection(['section1', 'section2', 'section3'], '.scroll-link', 50);
}

// Create a debounced version of the scroll handler
const debouncedScroll = debounce(handleScroll, 300);

window.addEventListener('scroll', debouncedScroll);
```

**HTML:**
```html
<a class="scroll-link" data-target="section1">Go to Section 1</a>
<a class="scroll-link" data-target="section2">Go to Section 2</a>
<a class="scroll-link" data-target="section3">Go to Section 3</a>

<div id="section1">Section 1 Content</div>
<div id="section2">Section 2 Content</div>
<div id="section3">Section 3 Content</div>
```

### Installation

Installation details for NobleUtils will be provided soon.
