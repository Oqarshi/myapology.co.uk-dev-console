// ==UserScript==
// @name         Don't mess with my dev tools
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  To use press 'Ctrl + Shift + C + V' allow opening the Developer Console on restricted sites like https://myapology.co.uk/
// @author       Omed Qarshi
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Listen for keydown event
    document.addEventListener('keydown', function(e) {
        // Check for Ctrl + Shift + C + V
        if (e.ctrlKey && e.shiftKey && e.key === 'C' && e.key === 'V') {
            // Prevent default action
            e.preventDefault();
            // Open the console
            console.log('Developer Console is now open.');
            debugger;
        }
    });
})();
