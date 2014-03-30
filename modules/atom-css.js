/**
 * @author shadow
 * @filename
 */

/** @class CSS */
var MODULE = {
    manifest: {
        name: "CSS",

        appendence: ["color", "sheet"]
    },
    scope: {
        entry: function(options) {

            extendHTMLElementWithCSS();

            funcyPackage();
            /*
             * desc: extendHTMLElementWithCSS: add some api to modify DOM's style, depend on 'extendHTMLElement', only css()
             */

            function extendHTMLElementWithCSS() {

                var CSSStyleNameMap =
                {
                    background: "bg", opacity: "opa", display: "disp", width: "W", height: "H", minWidth: "mW",

                    color: "", fontSize: "fS", fontFamily: "fF", textAlign: "tA", lineHeight: "lH",

                    position: "pos", top: "t", right: "r", bottom: "b", left: "l",

                    margin: "m", marginTop: "mT",  marginRight: "mR", marginBottom: "mB",marginLeft: "mL",

                    padding: "pad", paddingTop: "pT", paddingRight: "pR", paddingBottom: "pB", paddingLeft: "pL",

                    cursor: "", overflow: "flow",

                    border: "", borderRadius: "bRa", borderLeft: "bL", borderTop: "bT", borderRight: "bR", borderBottom: "bB",
                    borderLeft: "bL", borderColor: "bC", borderStyle: "bS", borderWidth: "bW",

                    transition: "ts", animation: "am", transform: "tf"
                };

                // get HTMLElement's prototype
                var HProto = HTMLElement.prototype;

                // use for in get every styleName

                for(var styleName in CSSStyleNameMap) {

                    var shortName; // use if handy set

                    shortName = CSSStyleNameMap[styleName];

                    if(AtomConfig.handyMode !== true) {
                        shortName = "";
                    }

                    // append to HTMLElement's prototype

                    HProto[styleName] = $keeper.api.returnHTMLChanger("css", styleName);

                    // save api to keeper
                    $keeper.list.HTMLAPISet.push(styleName);

                    if(shortName !== "") {
                        HProto[shortName] = HProto[styleName];

                        // also save short case
                        $keeper.list.HTMLAPISet.push(shortName);
                    }

                }
            }
            /**
             * desc funcyPackage: The codes bring funcy and handy action to DOM :)
             */

            function funcyPackage() {

                // - css parts

                var CSSMap =
                {
                    huge: [["fontSize", "fontWeight", "fontFamily"], ["48px", "bold", "impact"]]
                };

                // only call a api
                $keeper.api.extendHTML("css", CSSMap);
            }
        }
    }
}