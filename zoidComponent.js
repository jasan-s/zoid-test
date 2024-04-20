// Load the Zoid library
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/zoid/9.0.86/zoid.min.js';
document.head.appendChild(script);

// Wait for the Zoid library to load
script.onload = function() {
    // Create the Zoid component
    window.ZoidComponent = zoid.create({
        tag: 'widget-zoid',
        url: 'http://localhost:3000/widget',
        autoResize: {
            width: false,
            height: false,
        },
        dimensions: {
            width: '200px',
            height: '200px',
        },
        props: {
            onClose: {
                type: 'function',
                required: true,
            },
            // Define any additional props you want to pass to the widget
        },
    });
};