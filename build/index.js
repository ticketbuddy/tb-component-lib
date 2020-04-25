'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var crypto = _interopDefault(require('crypto'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Error$1 = styled__default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 0.8rem;\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 0.8rem;\n"])), function (props) { return props.theme.errorColor; }, function (props) { return props.theme.textFontFamily; });
var P = styled__default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 400;\n  line-height: 1.6;\n  color: ", ";\n  ", ";\n  ", ";\n  font-family: ", ";\n"], ["\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 400;\n  line-height: 1.6;\n  color: ", ";\n  ", ";\n  ", ";\n  font-family: ", ";\n"])), function (props) { return props.theme.fontColor; }, function (props) { return props.sm && "font-size: 0.8rem;"; }, function (props) { return props.muted && "opacity: 0.6;"; }, function (props) { return props.theme.textFontFamily; });
var H1 = styled__default.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 2.3rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 2.3rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"])), function (props) { return props.theme.fontColor; }, function (props) { return props.theme.headingFontFamily; });
var H2 = styled__default.h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  line-height: 1.35;\n  margin-bottom: 1rem;\n  font-size: 1.93rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  line-height: 1.35;\n  margin-bottom: 1rem;\n  font-size: 1.93rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"])), function (props) { return props.theme.fontColor; }, function (props) { return props.theme.headingFontFamily; });
var H3 = styled__default.h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 1.31rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 1.31rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"])), function (props) { return props.theme.fontColor; }, function (props) { return props.theme.headingFontFamily; });
var H4 = styled__default.h4(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 1.18rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 1.18rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"])), function (props) { return props.theme.fontColor; }, function (props) { return props.theme.headingFontFamily; });
var H5 = styled__default.h5(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  font-family: ", ";\n"])), function (props) { return props.theme.fontColor; }, function (props) { return props.theme.headingFontFamily; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

var GridContainer = styled__default.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: grid;\n  box-sizing: border-box;\n\n  grid-template-columns: repeat(12, 1fr);\n  ", "\n\n  ", "\n  ", "\n"], ["\n  display: grid;\n  box-sizing: border-box;\n\n  grid-template-columns: repeat(12, 1fr);\n  ", "\n\n  ", "\n  ", "\n"])), function (props) { return props.gap && "grid-gap: " + props.gap + "em;"; }, function (props) { return props.height && "grid-auto-rows: " + props.height + "px;"; }, function (props) { return props.allowVerticalGrow && "grid-auto-rows: minmax(" + (props.height || 0) + "px, auto);"; });
var GridItem = styled__default.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  grid-column: ", ";\n  box-sizing: border-box;\n  ", "\n  ", "\n\n  @media only screen and (min-width: 500px) {\n    grid-column: ", ";\n  }\n  @media only screen and (min-width: 720px) {\n    grid-column: ", ";\n  }\n  @media only screen and (min-width: 1280px) {\n    grid-column: ", ";\n  }\n"], ["\n  grid-column: ", ";\n  box-sizing: border-box;\n  ", "\n  ", "\n\n  @media only screen and (min-width: 500px) {\n    grid-column: ", ";\n  }\n  @media only screen and (min-width: 720px) {\n    grid-column: ", ";\n  }\n  @media only screen and (min-width: 1280px) {\n    grid-column: ", ";\n  }\n"])), function (props) { return props.xs; }, function (props) { return props.vertialAlign && "align-self: " + props.vertialAlign + ";"; }, function (props) { return props.horizontalAlign && "justify-self: " + props.horizontalAlign + ";"; }, function (props) { return props.sm || props.xs; }, function (props) { return props.md || props.sm || props.xs; }, function (props) { return props.lg || props.md || props.sm || props.xs; });
var templateObject_1$1, templateObject_2$1;
// Grid help:
// https://youtu.be/jV8B24rSN5o

var Surface = styled__default.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  ", "\n  background: ", ";\n  padding: ", "rem;\n  margin: ", "rem;\n"], ["\n  ", "\n  background: ", ";\n  padding: ", "rem;\n  margin: ", "rem;\n"])), function (props) { return props.shadow && "box-shadow: 0 0 " + props.shadow + "px rgba(0, 0, 0, 0.1);"; }, function (props) { return props.theme.surfaceColor; }, function (props) { return props.padding || 0; }, function (props) { return props.spacing || 0; });
var templateObject_1$2;

var Button = styled__default.button(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  background: ", ";\n  border: 2px solid #0facf3;\n  border-radius: 15px;\n  padding: 10px 10px;\n  ", "\n  min-width: 150px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 15px;\n  box-sizing: border-box;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.75s;\n  -moz-transition: all 0.75s;\n  -o-transition: all 0.75s;\n  -ms-transition: all 0.75s;\n  transition: all 0.75s;\n  transform: translateY(1px);\n  font-weight: 500;\n\n  font-family: ", ";\n\n  ", "\n    ", "\n  ", "\n\n  ", "\n\n  &:hover {\n    -webkit-transition: transform 0.5s;\n    -moz-transition: transform 0.5s;\n    -o-transition: transform 0.5s;\n    -ms-transition: transform 0.5s;\n    transition: transform 0.5s;\n    transform: translateY(-1px);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  background: ", ";\n  border: 2px solid #0facf3;\n  border-radius: 15px;\n  padding: 10px 10px;\n  ", "\n  min-width: 150px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 15px;\n  box-sizing: border-box;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.75s;\n  -moz-transition: all 0.75s;\n  -o-transition: all 0.75s;\n  -ms-transition: all 0.75s;\n  transition: all 0.75s;\n  transform: translateY(1px);\n  font-weight: 500;\n\n  font-family: ", ";\n\n  ",
    "\n    ",
    "\n  ",
    "\n\n  ", "\n\n  &:hover {\n    -webkit-transition: transform 0.5s;\n    -moz-transition: transform 0.5s;\n    -o-transition: transform 0.5s;\n    -ms-transition: transform 0.5s;\n    transition: transform 0.5s;\n    transform: translateY(-1px);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), function (props) { return props.theme.primaryColorLight; }, function (_a) {
    var sm = _a.sm;
    return sm && "padding: 6px 6px;";
}, function (props) { return props.theme.textFontFamily; }, function (props) { return props.secondary && styled.css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n      color: ", ";\n      background: transparent;\n      border-color: ", ";\n    "], ["\n      color: ", ";\n      background: transparent;\n      border-color: ", ";\n    "])), function (props) { return props.theme.primaryColorLight; }, function (props) { return props.theme.primaryColorLight; }); }, function (props) {
    return props.success && styled.css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n        background: ", ";\n        border-color: ", ";\n      "], ["\n        background: ", ";\n        border-color: ", ";\n      "])), function (props) { return props.theme.successColor; }, function (props) { return props.theme.successColor; });
}, function (props) {
    return props.failure && styled.css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      background: ", ";\n      border-color: ", ";\n    "], ["\n      background: ", ";\n      border-color: ", ";\n    "])), function (props) { return props.theme.errorColor; }, function (props) { return props.theme.errorColor; });
}, function (props) { return props.full && "width: 100%;"; });
var templateObject_1$3, templateObject_2$2, templateObject_3$1, templateObject_4$1;

var sharedInputStyle = styled.css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  padding: 0.9rem 1.1rem;\n  padding: ", "\n  font-size: 1.2rem;\n  line-height: 1.3;\n  border-radius: 0.375rem;\n  border: 1px solid #f2f2f2;\n  outline: none;\n  min-width: 100%;\n  box-sizing: border-box;\n  -webkit-transition: border 0.75s;\n  -moz-transition: border 0.75s;\n  -o-transition: border 0.75s;\n  -ms-transition: border 0.75s;\n  transition: border 0.75s;\n  ", ";\n  ", ";\n  font-size: 1.0625rem;\n  font-family: ", ";\n  &:focus {\n    border: 1px solid ", ";\n  }\n"], ["\n  padding: 0.9rem 1.1rem;\n  padding: ", "\n  font-size: 1.2rem;\n  line-height: 1.3;\n  border-radius: 0.375rem;\n  border: 1px solid #f2f2f2;\n  outline: none;\n  min-width: 100%;\n  box-sizing: border-box;\n  -webkit-transition: border 0.75s;\n  -moz-transition: border 0.75s;\n  -o-transition: border 0.75s;\n  -ms-transition: border 0.75s;\n  transition: border 0.75s;\n  ", ";\n  ", ";\n  font-size: 1.0625rem;\n  font-family: ", ";\n  &:focus {\n    border: 1px solid ", ";\n  }\n"])), function (props) { return props.lg && "1.2rem 1.4rem;"; }, function (props) { return (props.error && "border-color: " + props.theme.errorColor); }, function (props) { return (props.success && "border-color: " + props.theme.successColor); }, function (props) { return props.theme.textFontFamily; }, function (props) { return props.theme.primaryColorLight; });
var Input = styled__default.input(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), sharedInputStyle);
var TextArea = styled__default.textarea(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), sharedInputStyle);
var templateObject_1$4, templateObject_2$3, templateObject_3$2;

var Warning = styled__default.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  padding-bottom: 15px;\n  ", ";\n"], ["\n  padding-bottom: 15px;\n  ", ";\n"])), function (props) { return "border-bottom: 5px solid " + props.theme.primaryColorDark + ";"; });
var LegalNotice = function (props) {
    var newerVersionExists = props.userAcceptedVersion < props.latestVersion;
    var isFirstAccept = props.userAcceptedVersion === 0;
    return (React.createElement(React.Fragment, null, (isFirstAccept || newerVersionExists) && (React.createElement(Warning, { "data-test-id": "legal-notice" },
        React.createElement(Surface, null,
            React.createElement(GridContainer, { gap: 5 },
                React.createElement(GridItem, { xs: "3/7" },
                    isFirstAccept && (React.createElement(React.Fragment, null,
                        React.createElement(H4, null, "Cookie notice"),
                        React.createElement(P, { sm: true }, "By using ticketbuddy.co.uk, you consent to our cookie and terms and conditions policy."))),
                    !isFirstAccept && newerVersionExists && (React.createElement(React.Fragment, null,
                        React.createElement(H4, null, "Updated terms and conditions"),
                        React.createElement(P, { sm: true }, "Please review our latest terms and conditions and cookie policy.")))),
                React.createElement(GridItem, { xs: "7/10", horizontalAlign: "right", vertialAlign: "center" },
                    React.createElement(Button, { "data-test-id": "accept-legal-btn", sm: true, onClick: function () { return props.onAccept(); } }, "I agree"))))))));
};
var templateObject_1$5;

var isUndefined = (val) => val === undefined;

var isNullOrUndefined = (value) => value === null || isUndefined(value);

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

var isHTMLElement = (value) => isObject(value) && value.nodeType === Node.ELEMENT_NODE;

const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
};
const UNDEFINED = 'undefined';
const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};
const REGEX_IS_DEEP_PROP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const REGEX_IS_PLAIN_PROP = /^\w*$/;
const REGEX_PROP_NAME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const REGEX_ESCAPE_CHAR = /\\(\\)?/g;

function attachEventListeners({ field, handleChange, isRadioOrCheckbox, }) {
    const { ref } = field;
    if (isHTMLElement(ref) && ref.addEventListener && handleChange) {
        ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isKey = (value) => !isArray(value) &&
    (REGEX_IS_PLAIN_PROP.test(value) || !REGEX_IS_DEEP_PROP.test(value));

var stringToPath = (string) => {
    const result = [];
    string.replace(REGEX_PROP_NAME, (match, number, quote, string) => {
        result.push(quote ? string.replace(REGEX_ESCAPE_CHAR, '$1') : number || match);
    });
    return result;
};

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!isKey(key)) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var get = (obj, path, defaultValue) => {
    const result = path
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? obj[path] || defaultValue
        : result;
};

var focusErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

var isRadioInput = (element) => !!element && element.type === 'radio';

var isCheckBoxInput = (element) => !!element && element.type === 'checkbox';

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
}
function baseGet(object, path) {
    const updatePath = isKey(path) ? [path] : castPath(path);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return index == length ? object : undefined;
}
function baseSlice(array, start, end) {
    let index = -1;
    let length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start;
    const result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
function parent(object, path) {
    return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function baseUnset(object, path) {
    const updatePath = isKey(path) ? [path] : castPath(path);
    const childObject = parent(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    const result = !(childObject != null) || delete childObject[key];
    let previousObjRef = undefined;
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index) {
                if (isObject(objectRef) && isEmptyObject(objectRef)) {
                    previousObjRef ? delete previousObjRef[item] : delete object[item];
                }
                else if (isArray(objectRef) &&
                    !objectRef.filter(data => isObject(data) && !isEmptyObject(data))
                        .length) {
                    if (previousObjRef) {
                        delete previousObjRef[item];
                    }
                }
            }
            previousObjRef = objectRef;
        }
    }
    return result;
}
function unset(object, paths) {
    paths.forEach(path => {
        baseUnset(object, path);
    });
    return object;
}

function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
    if (!field) {
        return;
    }
    const { ref, ref: { name, type }, mutationWatcher, } = field;
    if (!type) {
        delete fields[name];
        return;
    }
    const fieldValue = fields[name];
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldValue) {
        const { options } = fieldValue;
        if (isArray(options) && options.length) {
            options
                .filter(Boolean)
                .forEach(({ ref, mutationWatcher }, index) => {
                if ((ref && isDetached(ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    unset(options, [`[${index}]`]);
                }
            });
            if (options && !options.filter(Boolean).length) {
                delete fields[name];
            }
        }
        else {
            delete fields[name];
        }
    }
    else if (isDetached(ref) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fields[name];
    }
}

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.filter(Boolean).reduce((previous, { ref: { checked, value } }) => checked
        ? {
            isValid: true,
            value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isFileInput = (element) => !!element && element.type === 'file';

var isMultipleSelect = (element) => !!element && element.type === 'select-multiple';

var isEmptyString = (value) => value === '';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter(({ ref: { checked } }) => checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || isEmptyString(value)
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fields, ref) {
    const { name, value } = ref;
    const field = fields[name];
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return field ? getRadioValue(field.options).value : '';
    }
    if (isMultipleSelect(ref)) {
        return getMultipleSelectValue(ref.options);
    }
    if (isCheckBoxInput(ref)) {
        return field ? getCheckboxValue(field.options).value : false;
    }
    return value;
}

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fields, search) => {
    const output = {};
    const isSearchString = isString(search);
    const isSearchArray = isArray(search);
    const isNest = search && search.nest;
    for (const name in fields) {
        if (isUndefined(search) ||
            isNest ||
            (isSearchString && name.startsWith(search)) ||
            (isSearchArray &&
                search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fields, fields[name].ref);
        }
    }
    return output;
};

var compareObject = (objectA = {}, objectB = {}) => {
    const objectAData = Object.entries(objectA);
    const objectBData = Object.keys(objectB);
    return (objectAData.length === objectBData.length &&
        objectAData.reduce((previous, [key, value]) => previous ? objectB[key] && objectB[key] === value : false, true));
};

var isSameError = (error, { type, types, message, }) => {
    return (isObject(error) &&
        error.type === type &&
        error.message === message &&
        compareObject(error.types, types));
};

function shouldUpdateWithError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isFieldValid = isEmptyObject(error);
    const isFormValid = isEmptyObject(errors);
    const currentFieldError = get(error, name);
    const existFieldError = get(errors, name);
    if ((isFieldValid && validFields.has(name)) ||
        (existFieldError && existFieldError.isManual)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => {
    const isValueMessage = (value) => isObject(value) && !isRegex(value);
    return isValueMessage(validationData)
        ? validationData
        : {
            value: validationData,
            message: '',
        };
};

var isFunction = (value) => typeof value === 'function';

var isBoolean = (value) => typeof value === 'boolean';

var isMessage = (value) => isString(value) || (isObject(value) && React.isValidElement(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        const message = isMessage(result) ? result : '';
        return {
            type,
            message,
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (!validateAllFieldCriteria) {
        return {};
    }
    const error = errors[name];
    return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value, name }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
    const fields = fieldsRef.current;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = isEmptyString(value);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
        if (!validateAllFieldCriteria) {
            return error;
        }
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox ? fields[name].options[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fields, ref);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const parseErrorSchema = (error, validateAllFieldCriteria) => isArray(error.inner)
    ? error.inner.reduce((previous, { path, message, type }) => (Object.assign(Object.assign({}, previous), (previous[path] && validateAllFieldCriteria
        ? {
            [path]: appendErrors(path, validateAllFieldCriteria, previous, type, message),
        }
        : {
            [path]: previous[path] || Object.assign({ message,
                type }, (validateAllFieldCriteria
                ? {
                    types: { [type]: message || true },
                }
                : {})),
        }))), {})
    : {
        [error.path]: { message: error.message, type: error.type },
    };
async function validateWithSchema(validationSchema, validateAllFieldCriteria, data, validationResolver, context) {
    if (validationResolver) {
        return validationResolver(data, context);
    }
    try {
        return {
            values: await validationSchema.validate(data, {
                abortEarly: false,
                context,
            }),
            errors: {},
        };
    }
    catch (e) {
        return {
            values: {},
            errors: transformToNestObject(parseErrorSchema(e, validateAllFieldCriteria)),
        };
    }
}

var getDefaultValue = (defaultValues, name, defaultValue) => isUndefined(defaultValues[name])
    ? get(defaultValues, name, defaultValue)
    : defaultValues[name];

function flatArray(list) {
    return list.reduce((a, b) => a.concat(isArray(b) ? flatArray(b) : b), []);
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

const getPath = (path, values) => {
    const getInnerPath = (value, key, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return isArray(values)
        ? values.map((value, key) => getInnerPath(value, key))
        : Object.entries(values).map(([key, value]) => getInnerPath(value, key, true));
};
var getPath$1 = (parentPath, value) => flatArray(getPath(parentPath, value));

var assignWatchFields = (fieldValues, fieldName, watchFields, combinedDefaultValues) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else if (!isUndefined(fieldValues[fieldName])) {
        value = fieldValues[fieldName];
        watchFields.add(fieldName);
    }
    else {
        value = get(transformToNestObject(fieldValues), fieldName);
        if (!isUndefined(value)) {
            getPath$1(fieldName, value).forEach(name => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isObject(combinedDefaultValues)
            ? getDefaultValue(combinedDefaultValues, fieldName)
            : combinedDefaultValues
        : value;
};

var skipValidation = ({ isOnChange, hasError, isBlurEvent, isOnSubmit, isReValidateOnSubmit, isOnBlur, isReValidateOnBlur, isSubmitted, }) => (isOnChange && isBlurEvent) ||
    (isOnSubmit && isReValidateOnSubmit) ||
    (isOnSubmit && !isSubmitted) ||
    (isOnBlur && !isBlurEvent && !hasError) ||
    (isReValidateOnBlur && !isBlurEvent && hasError) ||
    (isReValidateOnSubmit && isSubmitted);

var getFieldValueByName = (fields, name) => {
    const results = transformToNestObject(getFieldsValues(fields));
    return name ? get(results, name, results) : results;
};

function getIsFieldsDifferent(referenceArray, differenceArray) {
    let isMatch = false;
    if (!isArray(referenceArray) ||
        !isArray(differenceArray) ||
        referenceArray.length !== differenceArray.length) {
        return true;
    }
    for (let i = 0; i < referenceArray.length; i++) {
        if (isMatch) {
            break;
        }
        const dataA = referenceArray[i];
        const dataB = differenceArray[i];
        if (isUndefined(dataB) ||
            Object.keys(dataA).length !== Object.keys(dataB).length) {
            isMatch = true;
            break;
        }
        for (const key in dataA) {
            if (dataA[key] !== dataB[key]) {
                isMatch = true;
                break;
            }
        }
    }
    return isMatch;
}

const isMatchFieldArrayName = (name, searchName) => name.startsWith(`${searchName}[`);
var isNameInFieldArray = (names, name) => [...names].reduce((prev, current) => (isMatchFieldArrayName(name, current) ? true : prev), false);

var isFileListObject = (data) => typeof FileList !== UNDEFINED && data instanceof FileList;

function onDomRemove(element, onDetachCallback) {
    const observer = new MutationObserver(() => {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const { useRef, useState, useCallback, useEffect } = React;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, validationSchema, validationResolver, validationContext, defaultValues = {}, submitFocusError = true, validateCriteriaMode, } = {}) {
    const fieldsRef = useRef({});
    const validateAllFieldCriteria = validateCriteriaMode === 'all';
    const errorsRef = useRef({});
    const touchedFieldsRef = useRef({});
    const fieldArrayDefaultValues = useRef({});
    const watchFieldsRef = useRef(new Set());
    const dirtyFieldsRef = useRef(new Set());
    const fieldsWithValidationRef = useRef(new Set());
    const validFieldsRef = useRef(new Set());
    const isValidRef = useRef(true);
    const defaultRenderValuesRef = useRef({});
    const defaultValuesRef = useRef(defaultValues);
    const isUnMount = useRef(false);
    const isWatchAllRef = useRef(false);
    const isSubmittedRef = useRef(false);
    const isDirtyRef = useRef(false);
    const submitCountRef = useRef(0);
    const isSubmittingRef = useRef(false);
    const handleChangeRef = useRef();
    const resetFieldArrayFunctionRef = useRef({});
    const validationContextRef = useRef(validationContext);
    const fieldArrayNamesRef = useRef(new Set());
    const [, render] = useState();
    const { isOnBlur, isOnSubmit, isOnChange } = useRef(modeChecker(mode)).current;
    const isWindowUndefined = typeof window === UNDEFINED;
    const shouldValidateCallback = !!(validationSchema || validationResolver);
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = isWeb && 'Proxy' in window;
    const readFormStateRef = useRef({
        dirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = useRef(modeChecker(reValidateMode)).current;
    const reRender = useCallback(() => {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    const shouldRenderBaseOnError = useCallback((name, error, shouldRender, skipReRender) => {
        let shouldReRender = shouldRender ||
            shouldUpdateWithError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) ||
                shouldValidateCallback) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || get(errorsRef.current, name);
            }
            errorsRef.current = unset(errorsRef.current, [name]);
        }
        else {
            validFieldsRef.current.delete(name);
            shouldReRender = shouldReRender || !get(errorsRef.current, name);
            set(errorsRef.current, name, error[name]);
        }
        if (shouldReRender && !skipReRender) {
            reRender();
            return true;
        }
    }, [reRender, shouldValidateCallback]);
    const setFieldValue = useCallback((field, rawValue) => {
        const ref = field.ref;
        const options = field.options;
        const { type } = ref;
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref)) {
            if (isEmptyString(value) ||
                isFileListObject(value)) {
                ref.files = value;
            }
            else {
                ref.value = value;
            }
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach(selectRef => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
        return !!type;
    }, [isWeb]);
    const setDirty = (name) => {
        if (!fieldsRef.current[name] ||
            (!readFormStateRef.current.dirty && !readFormStateRef.current.dirtyFields)) {
            return false;
        }
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const previousDirtyFieldsLength = dirtyFieldsRef.current.size;
        let isDirty = defaultRenderValuesRef.current[name] !==
            getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
        if (isFieldArray) {
            const fieldArrayName = name.substring(0, name.indexOf('['));
            isDirty = getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, fieldArrayName), get(defaultValuesRef.current, fieldArrayName));
        }
        const isDirtyChanged = (isFieldArray ? isDirtyRef.current : dirtyFieldsRef.current.has(name)) !==
            isDirty;
        if (isDirty) {
            dirtyFieldsRef.current.add(name);
        }
        else {
            dirtyFieldsRef.current.delete(name);
        }
        isDirtyRef.current = isFieldArray ? isDirty : !!dirtyFieldsRef.current.size;
        return readFormStateRef.current.dirty
            ? isDirtyChanged
            : previousDirtyFieldsLength !== dirtyFieldsRef.current.size;
    };
    const setDirtyAndTouchedFields = useCallback((fieldName) => {
        if (setDirty(fieldName) ||
            (!get(touchedFieldsRef.current, fieldName) &&
                readFormStateRef.current.touched)) {
            return !!set(touchedFieldsRef.current, fieldName, true);
        }
    }, []);
    const setInternalValueBatch = useCallback((name, value, parentFieldName) => {
        const isValueArray = isArray(value);
        for (const key in value) {
            const fieldName = `${parentFieldName || name}${isValueArray ? `[${key}]` : `.${key}`}`;
            if (isObject(value[key])) {
                setInternalValueBatch(name, value[key], fieldName);
            }
            const field = fieldsRef.current[fieldName];
            if (field) {
                setFieldValue(field, value[key]);
                setDirtyAndTouchedFields(fieldName);
            }
        }
    }, [setFieldValue, setDirtyAndTouchedFields]);
    const setInternalValue = useCallback((name, value) => {
        const field = fieldsRef.current[name];
        if (field) {
            setFieldValue(field, value);
            const output = setDirtyAndTouchedFields(name);
            if (isBoolean(output)) {
                return output;
            }
        }
        else if (!isPrimitive(value)) {
            setInternalValueBatch(name, value);
        }
    }, [setDirtyAndTouchedFields, setFieldValue, setInternalValueBatch]);
    const executeValidation = useCallback(async (name, skipReRender) => {
        const field = fieldsRef.current[name];
        if (!field) {
            return false;
        }
        const error = await validateField(fieldsRef, validateAllFieldCriteria, field);
        shouldRenderBaseOnError(name, error, false, skipReRender);
        return isEmptyObject(error);
    }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
    const executeSchemaValidation = useCallback(async (payload) => {
        const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fieldsRef.current), validationResolver, validationContextRef.current);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isArray(payload)) {
            payload.forEach(name => {
                const error = get(errors, name);
                if (error) {
                    set(errorsRef.current, name, error);
                }
                else {
                    unset(errorsRef.current, [name]);
                }
            });
            reRender();
        }
        else {
            shouldRenderBaseOnError(payload, (get(errors, payload)
                ? { [payload]: get(errors, payload) }
                : {}), previousFormIsValid !== isValidRef.current);
        }
        return isEmptyObject(errorsRef.current);
    }, [
        reRender,
        shouldRenderBaseOnError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const triggerValidation = useCallback(async (payload) => {
        const fields = payload || Object.keys(fieldsRef.current);
        if (shouldValidateCallback) {
            return executeSchemaValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [
        executeSchemaValidation,
        executeValidation,
        reRender,
        shouldValidateCallback,
    ]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    function setValue(names, valueOrShouldValidate, shouldValidate) {
        let shouldRender = false;
        const isMultiple = isArray(names);
        (isMultiple
            ? names
            : [names]).forEach((name) => {
            const isStringFieldName = isString(name);
            shouldRender =
                setInternalValue(isStringFieldName ? name : Object.keys(name)[0], isStringFieldName
                    ? valueOrShouldValidate
                    : Object.values(name)[0]) || isMultiple
                    ? true
                    : isFieldWatched(name);
        });
        if (shouldRender || isMultiple) {
            reRender();
        }
        if (shouldValidate || (isMultiple && valueOrShouldValidate)) {
            triggerValidation(isMultiple ? undefined : names);
        }
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            const name = target ? target.name : '';
            const fields = fieldsRef.current;
            const errors = errorsRef.current;
            const field = fields[name];
            const currentError = get(errors, name);
            let error;
            if (!field) {
                return;
            }
            const isBlurEvent = type === EVENTS.BLUR;
            const shouldSkipValidation = skipValidation({
                hasError: !!currentError,
                isOnChange,
                isBlurEvent,
                isOnSubmit,
                isReValidateOnSubmit,
                isOnBlur,
                isReValidateOnBlur,
                isSubmitted: isSubmittedRef.current,
            });
            const shouldUpdateDirty = setDirty(name);
            let shouldUpdateState = isFieldWatched(name) || shouldUpdateDirty;
            if (isBlurEvent &&
                !get(touchedFieldsRef.current, name) &&
                readFormStateRef.current.touched) {
                set(touchedFieldsRef.current, name, true);
                shouldUpdateState = true;
            }
            if (shouldSkipValidation) {
                return shouldUpdateState && reRender();
            }
            if (shouldValidateCallback) {
                const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fields), validationResolver, validationContextRef.current);
                const previousFormIsValid = isValidRef.current;
                isValidRef.current = isEmptyObject(errors);
                error = (get(errors, name)
                    ? { [name]: get(errors, name) }
                    : {});
                if (previousFormIsValid !== isValidRef.current) {
                    shouldUpdateState = true;
                }
            }
            else {
                error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            }
            if (!shouldRenderBaseOnError(name, error) && shouldUpdateState) {
                reRender();
            }
        };
    const validateSchemaIsValid = useCallback((values = {}) => {
        const fieldValues = isEmptyObject(defaultValuesRef.current)
            ? getFieldsValues(fieldsRef.current)
            : defaultValuesRef.current;
        validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(Object.assign(Object.assign({}, fieldValues), values)), validationResolver, validationContextRef.current).then(({ errors }) => {
            const previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            if (previousFormIsValid !== isValidRef.current) {
                reRender();
            }
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reRender, validateAllFieldCriteria, validationResolver]);
    const removeFieldEventListener = (field, forceDelete) => {
        if (!isUndefined(handleChangeRef.current) && field) {
            findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, forceDelete);
        }
    };
    const removeFieldEventListenerAndRef = useCallback((field, forceDelete) => {
        if (!field ||
            (field &&
                isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) &&
                !forceDelete)) {
            return;
        }
        removeFieldEventListener(field, forceDelete);
        const { name } = field.ref;
        errorsRef.current = unset(errorsRef.current, [name]);
        touchedFieldsRef.current = unset(touchedFieldsRef.current, [name]);
        defaultRenderValuesRef.current = unset(defaultRenderValuesRef.current, [
            name,
        ]);
        [
            dirtyFieldsRef,
            fieldsWithValidationRef,
            validFieldsRef,
            watchFieldsRef,
        ].forEach(data => data.current.delete(name));
        if (readFormStateRef.current.isValid ||
            readFormStateRef.current.touched) {
            reRender();
            if (shouldValidateCallback) {
                validateSchemaIsValid();
            }
        }
    }, [reRender, shouldValidateCallback, validateSchemaIsValid]);
    function clearError(name) {
        if (isUndefined(name)) {
            errorsRef.current = {};
        }
        else {
            unset(errorsRef.current, isArray(name) ? name : [name]);
        }
        reRender();
    }
    const setInternalError = ({ name, type, types, message, preventRender, }) => {
        const field = fieldsRef.current[name];
        if (!isSameError(errorsRef.current[name], {
            type,
            message,
            types,
        })) {
            set(errorsRef.current, name, {
                type,
                types,
                message,
                ref: field ? field.ref : {},
                isManual: true,
            });
            if (!preventRender) {
                reRender();
            }
        }
    };
    function setError(name, type = '', message) {
        if (isString(name)) {
            setInternalError(Object.assign({ name }, (isObject(type)
                ? {
                    types: type,
                    type: '',
                }
                : {
                    type,
                    message,
                })));
        }
        else if (isArray(name)) {
            name.forEach(error => setInternalError(Object.assign(Object.assign({}, error), { preventRender: true })));
            reRender();
        }
    }
    function watch(fieldNames, defaultValue) {
        const combinedDefaultValues = isDirtyRef.current
            ? {}
            : isUndefined(defaultValue)
                ? isUndefined(defaultValuesRef.current)
                    ? {}
                    : defaultValuesRef.current
                : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
        const watchFields = watchFieldsRef.current;
        if (!isEmptyObject(combinedDefaultValues)) {
            readFormStateRef.current.dirty = true;
        }
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, combinedDefaultValues);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = true;
        const result = (!isEmptyObject(fieldValues) && fieldValues) || combinedDefaultValues;
        return fieldNames && fieldNames.nest
            ? transformToNestObject(result)
            : result;
    }
    function unregister(names) {
        if (!isEmptyObject(fieldsRef.current)) {
            (isArray(names) ? names : [names]).forEach(fieldName => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
        }
    }
    function registerFieldsRef(ref, validateOptions = {}) {
        if (!ref.name) {
            // eslint-disable-next-line no-console
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldAttributes = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        let currentField = fields[name];
        let isEmptyDefaultValue = true;
        let isFieldArray = false;
        let defaultValue;
        if (isRadioOrCheckbox
            ? currentField &&
                isArray(currentField.options) &&
                currentField.options
                    .filter(Boolean)
                    .find(({ ref }) => value === ref.value)
            : currentField) {
            fields[name] = Object.assign(Object.assign({}, currentField), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(fieldAttributes));
            currentField = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...((currentField && currentField.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldAttributes), { mutationWatcher });
        }
        else {
            currentField = fieldAttributes;
        }
        fields[name] = currentField;
        if (!isEmptyObject(defaultValuesRef.current)) {
            defaultValue = getDefaultValue(defaultValuesRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(currentField, defaultValue);
            }
        }
        if (shouldValidateCallback &&
            !isFieldArray &&
            readFormStateRef.current.isValid) {
            validateSchemaIsValid();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, validateAllFieldCriteria, currentField).then(error => {
                    const previousFormIsValid = isValidRef.current;
                    if (isEmptyObject(error)) {
                        validFieldsRef.current.add(name);
                    }
                    else {
                        isValidRef.current = false;
                    }
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultRenderValuesRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            defaultRenderValuesRef.current[name] = isEmptyDefaultValue
                ? getFieldValue(fields, currentField.ref)
                : defaultValue;
        }
        if (!type) {
            return;
        }
        const fieldToAttachListener = isRadioOrCheckbox && currentField.options
            ? currentField.options[currentField.options.length - 1]
            : currentField;
        attachEventListeners({
            field: fieldToAttachListener,
            isRadioOrCheckbox,
            handleChange: handleChangeRef.current,
        });
    }
    function register(refOrValidationOptions, validationOptions) {
        if (isWindowUndefined) {
            return;
        }
        if (isString(refOrValidationOptions)) {
            registerFieldsRef({ name: refOrValidationOptions }, validationOptions);
            return;
        }
        if (isObject(refOrValidationOptions) && 'name' in refOrValidationOptions) {
            registerFieldsRef(refOrValidationOptions, validationOptions);
            return;
        }
        return (ref) => ref && registerFieldsRef(ref, refOrValidationOptions);
    }
    const handleSubmit = useCallback((callback) => async (e) => {
        if (e) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = {};
        const fields = fieldsRef.current;
        if (readFormStateRef.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (shouldValidateCallback) {
                fieldValues = getFieldsValues(fields);
                const { errors, values } = await validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(fieldValues), validationResolver, validationContextRef.current);
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fields)) {
                    if (field) {
                        const { ref, ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, validateAllFieldCriteria, field);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            validFieldsRef.current.delete(name);
                        }
                        else {
                            if (fieldsWithValidationRef.current.has(name)) {
                                validFieldsRef.current.add(name);
                            }
                            fieldValues[name] = getFieldValue(fields, ref);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors)) {
                errorsRef.current = {};
                await callback(transformToNestObject(fieldValues), e);
            }
            else {
                if (submitFocusError && isWeb) {
                    focusErrorField(fields, fieldErrors);
                }
                errorsRef.current = fieldErrors;
            }
        }
        finally {
            isSubmittedRef.current = true;
            isSubmittingRef.current = false;
            submitCountRef.current = submitCountRef.current + 1;
            reRender();
        }
    }, [
        isWeb,
        reRender,
        shouldValidateCallback,
        submitFocusError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const resetRefs = ({ errors, dirty, isSubmitted, touched, isValid, submitCount, }) => {
        fieldsRef.current = {};
        if (!errors) {
            errorsRef.current = {};
        }
        if (!touched) {
            touchedFieldsRef.current = {};
        }
        if (!isValid) {
            validFieldsRef.current = new Set();
            fieldsWithValidationRef.current = new Set();
            isValidRef.current = true;
        }
        if (!dirty) {
            dirtyFieldsRef.current = new Set();
            isDirtyRef.current = false;
        }
        if (!isSubmitted) {
            isSubmittedRef.current = false;
        }
        if (!submitCount) {
            submitCountRef.current = 0;
        }
        defaultRenderValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const value of Object.values(fieldsRef.current)) {
                if (value) {
                    const { ref, options } = value;
                    const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        if (values) {
            defaultValuesRef.current = values;
        }
        Object.values(resetFieldArrayFunctionRef.current).forEach(resetFieldArray => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
        reRender();
    };
    const getValues = (payload) => {
        const fieldValues = getFieldsValues(fieldsRef.current);
        const outputValues = isEmptyObject(fieldValues)
            ? defaultValuesRef.current
            : fieldValues;
        return payload && payload.nest
            ? transformToNestObject(outputValues)
            : outputValues;
    };
    useEffect(() => () => {
        isUnMount.current = true;
        fieldsRef.current &&
            process.env.NODE_ENV === 'production' &&
            Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, [removeFieldEventListenerAndRef]);
    if (!shouldValidateCallback) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    const formState = {
        dirty: isDirtyRef.current,
        dirtyFields: dirtyFieldsRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: touchedFieldsRef.current,
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isValidRef.current,
    };
    const control = Object.assign(Object.assign(Object.assign({ register,
        unregister,
        removeFieldEventListener,
        getValues,
        setValue,
        reRender,
        triggerValidation }, (shouldValidateCallback ? { validateSchemaIsValid } : {})), (isWatchAllRef.current ? {} : { watchFieldsRef })), { formState, mode: {
            isOnBlur,
            isOnSubmit,
            isOnChange,
        }, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnSubmit,
        }, errorsRef,
        touchedFieldsRef,
        fieldsRef,
        resetFieldArrayFunctionRef,
        fieldArrayDefaultValues,
        validFieldsRef,
        dirtyFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        isDirtyRef,
        readFormStateRef,
        defaultValuesRef });
    return {
        watch,
        control,
        handleSubmit,
        setValue: useCallback(setValue, [
            reRender,
            setInternalValue,
            triggerValidation,
        ]),
        triggerValidation,
        getValues: useCallback(getValues, []),
        reset: useCallback(reset, []),
        register: useCallback(register, [
            defaultValuesRef.current,
            defaultRenderValuesRef.current,
        ]),
        unregister: useCallback(unregister, []),
        clearError: useCallback(clearError, []),
        setError: useCallback(setError, []),
        errors: errorsRef.current,
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return {};
                },
            })
            : formState,
    };
}

const FormGlobalContext = React.createContext(null);

var SignInForm = function (props) {
    var _a = useForm(), register = _a.register, errors = _a.errors, setError = _a.setError, handleSubmit = _a.handleSubmit;
    var onIncorrectCredentials = function () {
        setError("credentials", "apiError");
    };
    var onSubmit = function (values) {
        props.submitSignIn(values, onIncorrectCredentials);
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement(GridContainer, null,
            React.createElement(GridItem, { xs: "1/13", vertialAlign: "center" },
                React.createElement(GridContainer, { gap: 1 },
                    React.createElement(GridItem, { xs: "1/13", sm: "2/12", md: "4/10", lg: "5/8" },
                        React.createElement(H1, { "data-testid": "sign-in-title" }, "Sign In"),
                        errors.credentials && React.createElement(Error$1, { "data-testid": "credentials-error" }, "Invalid credentials, please try again.")),
                    React.createElement(GridItem, { xs: "1/13", sm: "2/12", md: "4/10", lg: "5/8" },
                        React.createElement(Input, { "data-testid": "email-input", error: !!errors.email, type: "email", placeholder: "Email", name: "email", ref: register({ required: true }) }),
                        errors.email && React.createElement(Error$1, { "data-testid": "email-error" }, "Email is required")),
                    React.createElement(GridItem, { xs: "1/13", sm: "2/12", md: "4/10", lg: "5/8" },
                        React.createElement(Input, { "data-testid": "password-input", error: !!errors.password, type: "password", placeholder: "Password", name: "password", ref: register({ required: true }) }),
                        errors.password && React.createElement(Error$1, { "data-testid": "password-error" }, "Password is required")),
                    React.createElement(GridItem, { xs: "1/13", sm: "2/12", md: "4/10", lg: "5/8", horizontalAlign: "center" },
                        React.createElement(Button, { "data-testid": "submit-sign-in" }, "Sign In")))))));
};

var Image = styled__default.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-image: url(\"", "\");\n  height: ", ";\n  width: ", ";\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n"], ["\n  background-image: url(\"", "\");\n  height: ", ";\n  width: ", ";\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n"])), function (_a) {
    var src = _a.src;
    return src;
}, function (_a) {
    var height = _a.height;
    return height || "100%";
}, function (_a) {
    var width = _a.width;
    return width || "100%";
});
var ImageContainer = styled__default.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n"], ["\n  position: relative;\n  overflow: hidden;\n"])));
var templateObject_1$6, templateObject_2$4;

var PromoterCard = function (_a) {
    var promoter = _a.promoter;
    var alternativePromoterLogo = "/alternativePromoterLogo.png";
    return (React.createElement(Surface, { shadow: 10 },
        React.createElement(Image, { height: "200px", src: promoter.logo || alternativePromoterLogo }),
        React.createElement(Surface, { padding: 1 },
            React.createElement(H2, null, promoter.title))));
};

var EnumState = function (_a) {
    var e = _a.e, onEmpty = _a.onEmpty, onPopulated = _a.onPopulated;
    if (Object.keys(e).length === 0)
        return onEmpty();
    return onPopulated();
};

var execHttp = (function (request) { return __awaiter(void 0, void 0, void 0, function () {
    var res, json;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(request.path, {
                    method: request.method,
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: request.body ? JSON.stringify(request.body) : null
                })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                json = _a.sent();
                return [2 /*return*/, { body: json, statusCode: res.status }];
        }
    });
}); });

function useTbApi(request) {
    var _this = this;
    var _a = React.useState({ body: null, statusCode: null }), response = _a[0], setResponse = _a[1];
    React.useEffect(function () {
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, execHttp(request)];
                    case 1:
                        response = _a.sent();
                        setResponse(response);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    var waiting = (response.statusCode == null || response.body == null);
    return [waiting, response.statusCode, response.body];
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function rng() {
  return crypto.randomBytes(16);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = new Array(str.length);

  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35 (name, version, hashfunc) {
  var generateUUID = function (value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value == 'string') value = stringToBytes(value);
    if (typeof namespace == 'string') namespace = uuidToBytes(namespace);
    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3

    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || bytesToUuid(bytes);
  }; // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name;
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto.createHash('md5').update(bytes).digest();
}

const v3 = v35('v3', 0x30, md5);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto.createHash('sha1').update(bytes).digest();
}

const v5 = v35('v5', 0x50, sha1);



var esmNode = /*#__PURE__*/Object.freeze({
    __proto__: null,
    v1: v1,
    v3: v3,
    v4: v4,
    v5: v5
});

var core = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.uuid = function () { return esmNode.v4().split('-').join(''); };
});

unwrapExports(core);
var core_1 = core.uuid;

var promoter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.createPromoter = function () { return ({
    path: "/api/promoter",
    method: "post",
    body: {
        wish: {
            promoter_id: "promoter_" + core.uuid()
        },
        idempotency_key: core.uuid()
    }
}); };
exports.updatePromoter = function (params) { return ({
    path: "/api/promoter/update",
    method: "post",
    body: {
        wish: params,
        idempotency_key: core.uuid()
    }
}); };
exports.getAccountPromoters = function () { return ({
    path: "/api/account/promoters",
    method: "get",
}); };
});

unwrapExports(promoter);
var promoter_1 = promoter.createPromoter;
var promoter_2 = promoter.updatePromoter;
var promoter_3 = promoter.getAccountPromoters;

var activity = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.createActivity = function (promoterId) { return ({
    path: "/api/activity",
    method: "post",
    body: {
        wish: {
            promoter_id: promoterId,
            activity_id: "activity_" + core.uuid()
        },
        idempotency_key: core.uuid()
    }
}); };
exports.updateActivity = function (params) { return ({
    path: "/api/activity/update",
    method: "post",
    body: {
        wish: {
            activity_id: params.activityId,
            title: params.title,
            description: params.description
        },
        idempotency_key: core.uuid()
    }
}); };
exports.getAccountActivities = function () { return ({
    path: "/api/account/activities",
    method: "get",
}); };
exports.getAccountActivitiesByPromoter = function (promoterId) { return ({
    path: "/api/account/activities?promoter_id=" + promoterId,
    method: "get",
}); };
});

unwrapExports(activity);
var activity_1 = activity.createActivity;
var activity_2 = activity.updateActivity;
var activity_3 = activity.getAccountActivities;
var activity_4 = activity.getAccountActivitiesByPromoter;

var activityDate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.createActivityDate = function (activityId) { return ({
    path: "/api/activity-date",
    method: "post",
    body: {
        wish: {
            activity_id: activityId,
            activity_date_id: "activitydate_" + core.uuid()
        },
        idempotency_key: core.uuid()
    }
}); };
exports.getAccountActivityDates = function () { return ({
    path: "/api/account/activity-dates",
    method: "get",
}); };
exports.getAccountActivityDatesByActivity = function (activityId) { return ({
    path: "/api/account/activity-dates?activity_id=" + activityId,
    method: "get",
}); };
});

unwrapExports(activityDate);
var activityDate_1 = activityDate.createActivityDate;
var activityDate_2 = activityDate.getAccountActivityDates;
var activityDate_3 = activityDate.getAccountActivityDatesByActivity;

var person = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMagicSignIn = function (email) { return ({
    path: "/api/person/request-magic-sign-in",
    method: "post",
    body: { email: email }
}); };
exports.magicLinkSignIn = function (emailSignature) { return ({
    path: "/api/person/magic-sign-in",
    method: "post",
    body: { email_signature: emailSignature }
}); };
exports.updatePerson = function (email, password) { return ({
    path: "/api/person/update",
    method: "post",
    body: { email: email, password: password }
}); };
exports.requestEmailVerification = function () { return ({
    path: "/api/person/request-email-verification",
    method: "post",
    body: {}
}); };
exports.verifyEmail = function (emailSignature) { return ({
    path: "/api/person/verify-email",
    method: "post",
    body: { email_signature: emailSignature }
}); };
exports.signIn = function (email, password) { return ({
    path: "/api/person/sign-in",
    method: "post",
    body: { email: email, password: password }
}); };
exports.signUp = function (email, password) { return ({
    path: "/api/person/sign-up",
    method: "post",
    body: { email: email, password: password }
}); };
exports.getStarted = function () { return ({
    path: "/api/get-started",
    method: "get"
}); };
exports.getCurrentPerson = function () { return ({
    path: "/api/person/current",
    method: "get"
}); };
exports.signOut = function () { return ({
    path: "/api/person/sign-out",
    method: "get"
}); };
exports.getReservedSeats = function () { return ({
    path: "/api/person/reserved-seats",
    method: "get"
}); };
exports.getCompletedSeats = function () { return ({
    path: "/api/person/completed-seats",
    method: "get"
}); };
});

unwrapExports(person);
var person_1 = person.requestMagicSignIn;
var person_2 = person.magicLinkSignIn;
var person_3 = person.updatePerson;
var person_4 = person.requestEmailVerification;
var person_5 = person.verifyEmail;
var person_6 = person.signIn;
var person_7 = person.signUp;
var person_8 = person.getStarted;
var person_9 = person.getCurrentPerson;
var person_10 = person.signOut;
var person_11 = person.getReservedSeats;
var person_12 = person.getCompletedSeats;

var ticket = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.createTicket = function (activityDateId) { return ({
    path: "/api/ticket/create",
    method: "post",
    body: {
        wish: {
            product_id: "product_" + core.uuid(),
            owning_shelf: activityDateId
        },
        idempotency_key: core.uuid()
    }
}); };
exports.updateTicket = function (params) {
    var _a;
    return ({
        path: "/api/ticket/update",
        method: "post",
        body: {
            wish: {
                product_id: params.ticketId,
                title: params.title,
                quantity: params.quantity,
                shareholders: (_a = {}, _a[params.creditorId] = params.amount, _a)
            },
            idempotency_key: core.uuid()
        }
    });
};
});

unwrapExports(ticket);
var ticket_1 = ticket.createTicket;
var ticket_2 = ticket.updateTicket;

var seat = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.reserveSeat = function (ticketId) { return ({
    path: "/api/seat/reserve",
    method: "post",
    body: {
        content: {
            product_id: ticketId
        },
        idempotency_key: core.uuid()
    }
}); };
exports.unReserveSeat = function (seatId) { return ({
    path: "/api/seat/unreserve",
    method: "post",
    body: {
        wish: {
            item_id: seatId
        },
        idempotency_key: core.uuid()
    }
}); };
exports.admitSeat = function (seatId) { return ({
    path: "/api/seat/admit",
    method: "post",
    body: {
        content: {
            seat_id: seatId
        },
        idempotency_key: core.uuid()
    }
}); };
exports.unAdmitSeat = function (seatId) { return ({
    path: "/api/seat/un-admit",
    method: "post",
    body: {
        content: {
            seat_id: seatId
        },
        idempotency_key: core.uuid()
    }
}); };
});

unwrapExports(seat);
var seat_1 = seat.reserveSeat;
var seat_2 = seat.unReserveSeat;
var seat_3 = seat.admitSeat;
var seat_4 = seat.unAdmitSeat;

var checkout = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.startCheckout = function (items, amount) { return ({
    path: "/api/checkout",
    method: "post",
    body: {
        content: {
            untrusted_items: items,
            untrusted_amount: amount,
            checkout_id: "checkout_" + core.uuid()
        },
        idempotency_key: core.uuid()
    }
}); };
});

unwrapExports(checkout);
var checkout_1 = checkout.startCheckout;

var creditor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentCreditor = function () { return ({
    path: "/api/creditor/current",
    method: "get"
}); };
exports.connectToStripeRedirect = function () { return ({
    path: "/api/creditor/connect-to-stripe",
    method: "get"
}); };
exports.getCurrentCreditorTransactions = function () { return ({
    path: "/api/creditor/current/transactions",
    method: "get"
}); };
});

unwrapExports(creditor);
var creditor_1 = creditor.getCurrentCreditor;
var creditor_2 = creditor.connectToStripeRedirect;
var creditor_3 = creditor.getCurrentCreditorTransactions;

var dist = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(promoter);
__export(activity);
__export(activityDate);
__export(person);
__export(ticket);
__export(seat);
__export(checkout);
__export(creditor);
});

var tbSdk = unwrapExports(dist);

var useCreditor = function () {
    var _a = useTbApi(tbSdk.getCurrentCreditor()), waiting = _a[0], statusCode = _a[1], content = _a[2];
    if (waiting)
        return null;
    switch (statusCode) {
        case 403:
            return { error: true, message: "Permission denied." };
        case 200:
            return {
                creditorId: content.creditor_id,
                stripeAccountId: content.stripe_account_id,
                pendingFunds: content.pending_funds
            };
        default:
            return {
                error: true,
                message: "Something went wrong."
            };
    }
};

exports.Button = Button;
exports.EnumState = EnumState;
exports.Error = Error$1;
exports.GridContainer = GridContainer;
exports.GridItem = GridItem;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.Image = Image;
exports.ImageContainer = ImageContainer;
exports.Input = Input;
exports.LegalNotice = LegalNotice;
exports.P = P;
exports.PromoterCard = PromoterCard;
exports.SignInForm = SignInForm;
exports.Surface = Surface;
exports.TextArea = TextArea;
exports.useCreditor = useCreditor;
//# sourceMappingURL=index.js.map
