# WebDevelopment-Portfolio
## Problems Faced
#### 1. Styles not applying
- **Description-** Initially, I encountered a problem where the styles defined in my CSS file were not being applied to the HTML elements.
- **Solution-** I discovered that the issue was related to the build process or file synchronization. The solution was to save the CSS file a couple of times, triggering the build process and ensuring that the latest styles were applied to the HTML.

#### 2. Animation not triggering
- **Description-** I encountered an issue where the animation defined in my JavaScript file was not triggering when the page loaded. The animation function was not executing as expected.
- **Solution-** After investigating the issue, I realized that the JavaScript file was being invoked before the HTML was fully loaded or the DOM was created. To resolve this, I made sure to invoke the JavaScript file after the HTML was fully loaded by using the DOMContentLoaded event or placing the script tag at the end of the HTML body. This ensured that the animation function was executed only when the necessary HTML elements were available in the DOM.
## Credits
- https://tailwindcss.com/docs
- https://heroicons.com/
- https://favicon.io/favicon-generator/
