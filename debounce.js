/**
 * Creates a debounced version of a function that delays its execution until after a specified wait time has elapsed
 * since the last time the debounced function was invoked.
 * 
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} A debounced version of the provided function.
 */
function debounce(func, wait) {
    let timeout;

    return function(...args) {
        const context = this;

        // Clear the timeout if it exists
        if (timeout) {
            clearTimeout(timeout);
        }

        // Set a new timeout
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

