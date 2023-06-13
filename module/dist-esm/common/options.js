import { isSide, isMultipleSides, sides } from './sides.js';
const defaultSettings = {
    container: window,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};
export function getConfig(methodType, elem, userOptions) {
    if (typeof elem !== 'object' || (elem && 'nodeType' in elem && elem.nodeType !== 1)) {
        throw new Error('First argument must be an element');
    }
    let settings;
    // Settings argument may be a simple string (`top`, `right`, etc)
    if (isSide(userOptions)) {
        settings = {
            ...defaultSettings,
        };
        // Ignore all the other sides
        sides.forEach((side) => {
            if (side !== userOptions) {
                settings[side] = 'ignore';
            }
        });
    }
    else if (isMultipleSides(userOptions)) {
        settings = {
            ...defaultSettings,
        };
        // Ignore all the other sides
        sides.forEach((side) => {
            if (!userOptions.split(' ').includes(side)) {
                settings[side] = 'ignore';
            }
        });
    }
    else {
        settings = Object.assign({}, defaultSettings, userOptions);
    }
    // Build configuration from defaults and user-provided settings and metadata
    const config = Object.assign({}, defaultSettings, settings);
    // Use the window as the container if the user specified the body or a non-element
    if (config.container === document.body ||
        (config.container && 'nodeName' in config.container && config.container.nodeName === 'BODY') ||
        (config.container && 'nodeType' in config.container && config.container.nodeType !== 1)) {
        config.container = methodType === 'sync' ? window : document;
    }
    // For the asynchronous method, the container cannot be the window
    else if (methodType === 'async' && config.container === window) {
        config.container = document;
    }
    return config;
}
//# sourceMappingURL=options.js.map