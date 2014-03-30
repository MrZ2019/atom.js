/**
* @filename atom-config.js
* The file contains atom.js 's configuration, use it before ATOM work
*
* 2004 1.7  -I created the file
* */

/* use JSON Notation declare an Configuartion Object */

var AtomConfig =
{
    debugMode: true, // The field indicate atom.js not finished now, then include DEBUG module,
    moduleMode: true,
    handyMode: true,

    useRequest: false,

    version: "0.1 beta",
    appCode: "aqua", // in web world, there has 16 color names, 'auqa' is first name
    author: "shadow" // hi, my world, I AM SHADOW!
};

/*
config: seed
 */

var SeedConfig =
{
    moduleNamePrefix: "atom-",
    atomModulesFolder: "./module/",
    userModulesFolder: "./userModules/",

    exportModule: true
};
/**
 * @desc a map save atom's module
 */
AtomModulesMap =
{
    "core": "atom-core.js",
    "runtime": "atom-runtime.js",
    "event": "atom-event.js",
    "browser": "atom-browser.js",
    "script": "atom-script.js",
    "iterator": "atom-iterator.js",
    "data": "atom-data.js",
    "namespace": "atom-namespace.js",
    "question": "atom-question.js",

    "number": "atom-number.js",
    "string": "atom-string.js",
    "object": "atom-object.js",
    "function": "atom-function.js",
    "array": "atom-array.js",

    "math": "atom-math.js",
    "random": "atom-random.js",
    "keyboard": "atom-keyboard.js",
    "element": "atom-element.js",

    "css": "atom-css.js",
    "sheet": "atom-sheet.js",
    "color": "atom-color.js",
    "htmlcreator": "atom-htmlcreator.js",
    "json": "atom-json.js"
};

/** @desc options map
 * */
AtomModulesOption =
{
    "keyboard": {
        dependence: ["RUNTIME"]
    }
};