# Accessing the Developer Console on MyApology.co.uk

You can easily access the Developer Console on [myapology.co.uk](https://myapology.co.uk/) by using the following Tampermonkey script.

## Tampermonkey Script

1. **Install Tampermonkey**: Ensure you have the Tampermonkey extension installed in your browser.

2. **Create a New Script**:
   - Click on the Tampermonkey icon in your browser and select **Create a new script**.

3. **Paste the Following Code**:

```javascript
// ==UserScript==
// @name         Don't mess with my dev tools
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  To use press 'Ctrl + Shift + C' allow opening the Developer Console on restricted sites like https://myapology.co.uk/
// @author       Omed Qarshi
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Listen for keydown event
    document.addEventListener('keydown', function(e) {
        // Check for Ctrl + Shift + C + V
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            // Prevent default action
            e.preventDefault();
            // Open the console
            console.log('Developer Console is now open.');
            debugger;
        }
    });
})();

