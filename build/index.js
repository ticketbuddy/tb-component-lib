'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var reactRouterDom = require('react-router-dom');

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Error = styled__default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 0.8rem;\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 0.8rem;\n"])), function (props) { return props.theme.errorColor; }, function (props) { return props.theme.textFontFamily; });
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

var isNullOrUndefined = (value) => value == null;

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

function attachEventListeners({ field: { ref }, handleChange, isRadioOrCheckbox, }) {
    if (isHTMLElement(ref) && handleChange) {
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
                    : !isNaN(+tempPath[index + 1])
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

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    const result = path
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? obj[path] || defaultValue
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
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

var isRadioInput = (element) => element.type === 'radio';

var isCheckBoxInput = (element) => element.type === 'checkbox';

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
                if ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (isArray(objectRef) &&
                        !objectRef.filter((data) => isObject(data) && !isEmptyObject(data))
                            .length)) {
                    previousObjRef ? delete previousObjRef[item] : delete object[item];
                }
            }
            previousObjRef = objectRef;
        }
    }
    return result;
}
function unset(object, paths) {
    paths.forEach((path) => {
        baseUnset(object, path);
    });
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
    const { ref, ref: { name, type }, mutationWatcher, } = field;
    const fieldValue = fields[name];
    if (!type) {
        delete fields[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldValue) {
        const { options } = fieldValue;
        if (isArray(options) && options.length) {
            options.filter(Boolean).forEach((option, index) => {
                const { ref, mutationWatcher } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
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
    else if ((isDetached(ref) && isSameRef(fieldValue, ref)) || forceDelete) {
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
    ? options.reduce((previous, { ref: { checked, value } }) => checked
        ? {
            isValid: true,
            value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === 'select-multiple';

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
                .filter((option) => option && option.ref.checked)
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
    for (const name in fields) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : isArray(search)
                    ? search.find((data) => name.startsWith(data))
                    : search && search.nest)) {
            output[name] = getFieldValue(fields, fields[name].ref);
        }
    }
    return output;
};

var compareObject = (objectA = {}, objectB = {}) => {
    const objectAKeys = Object.keys(objectA);
    const objectBKeys = Object.keys(objectB);
    return (objectAKeys.length === objectBKeys.length &&
        objectAKeys.every((key) => objectB[key] && objectB[key] === objectA[key]));
};

var isSameError = (error, { type, types, message, }) => isObject(error) &&
    error.type === type &&
    error.message === message &&
    compareObject(error.types, types);

function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
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
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value, name }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
    var _a;
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
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox ? (_a = fields[name].options) === null || _a === void 0 ? void 0 : _a[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
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
    ? error.inner.reduce((previous, { path, message, type }) => (Object.assign(Object.assign({}, previous), (path
        ? previous[path] && validateAllFieldCriteria
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
            }
        : {}))), {})
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
var getPath$1 = (parentPath, value) => getPath(parentPath, value).flat(Infinity);

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
            getPath$1(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value) ? get(combinedDefaultValues, fieldName) : value;
};

var skipValidation = ({ isOnChange, hasError, isBlurEvent, isOnSubmit, isReValidateOnSubmit, isOnBlur, isReValidateOnBlur, isSubmitted, }) => (isOnChange && isBlurEvent) ||
    (isOnSubmit && isReValidateOnSubmit) ||
    (isOnSubmit && !isSubmitted) ||
    (isOnBlur && !isBlurEvent && !hasError) ||
    (isReValidateOnBlur && !isBlurEvent && hasError) ||
    (isReValidateOnSubmit && isSubmitted);

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

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

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].reduce((prev, current) => (isMatchFieldArrayName(name, current) ? true : prev), false);

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

function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, validationSchema, validationResolver, validationContext, defaultValues = {}, submitFocusError = true, validateCriteriaMode, } = {}) {
    const fieldsRef = React.useRef({});
    const errorsRef = React.useRef({});
    const touchedFieldsRef = React.useRef({});
    const fieldArrayDefaultValues = React.useRef({});
    const watchFieldsRef = React.useRef(new Set());
    const dirtyFieldsRef = React.useRef(new Set());
    const fieldsWithValidationRef = React.useRef(new Set());
    const validFieldsRef = React.useRef(new Set());
    const isValidRef = React.useRef(true);
    const defaultValuesRef = React.useRef(defaultValues);
    const defaultValuesAtRenderRef = React.useRef({});
    const isUnMount = React.useRef(false);
    const isWatchAllRef = React.useRef(false);
    const isSubmittedRef = React.useRef(false);
    const isDirtyRef = React.useRef(false);
    const submitCountRef = React.useRef(0);
    const isSubmittingRef = React.useRef(false);
    const handleChangeRef = React.useRef();
    const resetFieldArrayFunctionRef = React.useRef({});
    const validationContextRef = React.useRef(validationContext);
    const fieldArrayNamesRef = React.useRef(new Set());
    const [, render] = React.useState();
    const { isOnBlur, isOnSubmit, isOnChange } = React.useRef(modeChecker(mode)).current;
    const validateAllFieldCriteria = validateCriteriaMode === 'all';
    const isWindowUndefined = typeof window === UNDEFINED;
    const shouldValidateSchemaOrResolver = !!(validationSchema || validationResolver);
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
    const readFormStateRef = React.useRef({
        dirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = React.useRef(modeChecker(reValidateMode)).current;
    validationContextRef.current = validationContext;
    const reRender = React.useCallback(() => {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    const shouldRenderBaseOnError = React.useCallback((name, error, shouldRender = false) => {
        let shouldReRender = shouldRender ||
            shouldRenderBasedOnError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) ||
                shouldValidateSchemaOrResolver) {
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
        if (shouldReRender && !isNullOrUndefined(shouldRender)) {
            reRender();
            return true;
        }
    }, [reRender, shouldValidateSchemaOrResolver]);
    const setFieldValue = React.useCallback((field, rawValue) => {
        const { ref, options } = field;
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref)) {
            if (isString(value)) {
                ref.value = value;
            }
            else {
                ref.files = value;
            }
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, [isWeb]);
    const setDirty = (name) => {
        if (!fieldsRef.current[name] ||
            (!readFormStateRef.current.dirty && !readFormStateRef.current.dirtyFields)) {
            return false;
        }
        let isFieldDirty = defaultValuesAtRenderRef.current[name] !==
            getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const previousDirtyFieldsLength = dirtyFieldsRef.current.size;
        if (isFieldArray) {
            const fieldArrayName = getFieldArrayParentName(name);
            isFieldDirty = getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, fieldArrayName), get(defaultValuesRef.current, fieldArrayName));
        }
        const isDirtyChanged = (isFieldArray ? isDirtyRef.current : dirtyFieldsRef.current.has(name)) !==
            isFieldDirty;
        if (isFieldDirty) {
            dirtyFieldsRef.current.add(name);
        }
        else {
            dirtyFieldsRef.current.delete(name);
        }
        isDirtyRef.current = isFieldArray
            ? isFieldDirty
            : !!dirtyFieldsRef.current.size;
        return readFormStateRef.current.dirty
            ? isDirtyChanged
            : previousDirtyFieldsLength !== dirtyFieldsRef.current.size;
    };
    const setDirtyAndTouchedFields = React.useCallback((fieldName) => {
        if (setDirty(fieldName) ||
            (!get(touchedFieldsRef.current, fieldName) &&
                readFormStateRef.current.touched)) {
            return !!set(touchedFieldsRef.current, fieldName, true);
        }
    }, []);
    const setInternalValues = React.useCallback((name, value, parentFieldName) => {
        const isValueArray = isArray(value);
        for (const key in value) {
            const fieldName = `${parentFieldName || name}${isValueArray ? `[${key}]` : `.${key}`}`;
            const field = fieldsRef.current[fieldName];
            if (isObject(value[key])) {
                setInternalValues(name, value[key], fieldName);
            }
            if (field) {
                setFieldValue(field, value[key]);
                setDirtyAndTouchedFields(fieldName);
            }
        }
    }, [setFieldValue, setDirtyAndTouchedFields]);
    const setInternalValue = React.useCallback((name, value) => {
        const field = fieldsRef.current[name];
        if (field) {
            setFieldValue(field, value);
            const output = setDirtyAndTouchedFields(name);
            if (isBoolean(output)) {
                return output;
            }
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value);
        }
    }, [setDirtyAndTouchedFields, setFieldValue, setInternalValues]);
    const executeValidation = React.useCallback(async (name, skipReRender) => {
        const field = fieldsRef.current[name];
        if (field) {
            const error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            shouldRenderBaseOnError(name, error, skipReRender ? null : false);
            return isEmptyObject(error);
        }
        return false;
    }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = React.useCallback(async (payload) => {
        const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fieldsRef.current), validationResolver, validationContextRef.current);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isArray(payload)) {
            payload.forEach((name) => {
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
            const error = get(errors, payload);
            shouldRenderBaseOnError(payload, (error ? { [payload]: error } : {}), previousFormIsValid !== isValidRef.current);
        }
        return isEmptyObject(errorsRef.current);
    }, [
        reRender,
        shouldRenderBaseOnError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const triggerValidation = React.useCallback(async (payload) => {
        const fields = payload || Object.keys(fieldsRef.current);
        if (shouldValidateSchemaOrResolver) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [
        executeSchemaOrResolverValidation,
        executeValidation,
        reRender,
        shouldValidateSchemaOrResolver,
    ]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    function setValue(names, valueOrShouldValidate, shouldValidate) {
        let shouldRender = false;
        const isArrayValue = isArray(names);
        (isArrayValue
            ? names
            : [names]).forEach((name) => {
            const isStringFieldName = isString(name);
            shouldRender =
                setInternalValue(isStringFieldName ? name : Object.keys(name)[0], isStringFieldName
                    ? valueOrShouldValidate
                    : Object.values(name)[0]) || isArrayValue
                    ? true
                    : isFieldWatched(name);
        });
        if (shouldRender || isArrayValue) {
            reRender();
        }
        if (shouldValidate || (isArrayValue && valueOrShouldValidate)) {
            triggerValidation(isArrayValue ? undefined : names);
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
            let shouldRender = isFieldWatched(name) || shouldUpdateDirty;
            if (isBlurEvent &&
                !get(touchedFieldsRef.current, name) &&
                readFormStateRef.current.touched) {
                set(touchedFieldsRef.current, name, true);
                shouldRender = true;
            }
            if (shouldSkipValidation) {
                return shouldRender && reRender();
            }
            if (shouldValidateSchemaOrResolver) {
                const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fields), validationResolver, validationContextRef.current);
                const previousFormIsValid = isValidRef.current;
                isValidRef.current = isEmptyObject(errors);
                error = (get(errors, name)
                    ? { [name]: get(errors, name) }
                    : {});
                if (previousFormIsValid !== isValidRef.current) {
                    shouldRender = true;
                }
            }
            else {
                error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            }
            if (!shouldRenderBaseOnError(name, error) && shouldRender) {
                reRender();
            }
        };
    const validateSchemaOrResolver = React.useCallback((values = {}) => {
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
    const removeFieldEventListener = React.useCallback((field, forceDelete) => {
        if (handleChangeRef.current && field) {
            findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, forceDelete);
        }
    }, []);
    const removeFieldEventListenerAndRef = React.useCallback((field, forceDelete) => {
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
        defaultValuesAtRenderRef.current = unset(defaultValuesAtRenderRef.current, [name]);
        [
            dirtyFieldsRef,
            fieldsWithValidationRef,
            validFieldsRef,
            watchFieldsRef,
        ].forEach((data) => data.current.delete(name));
        if (readFormStateRef.current.isValid ||
            readFormStateRef.current.touched) {
            reRender();
            if (shouldValidateSchemaOrResolver) {
                validateSchemaOrResolver();
            }
        }
    }, [
        reRender,
        shouldValidateSchemaOrResolver,
        validateSchemaOrResolver,
        removeFieldEventListener,
    ]);
    function clearError(name) {
        if (name) {
            unset(errorsRef.current, isArray(name) ? name : [name]);
        }
        else {
            errorsRef.current = {};
        }
        reRender();
    }
    const setInternalError = ({ name, type, types, message, shouldRender, }) => {
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
            if (shouldRender) {
                reRender();
            }
        }
    };
    function setError(name, type = '', message) {
        if (isString(name)) {
            setInternalError(Object.assign(Object.assign({ name }, (isObject(type)
                ? {
                    types: type,
                    type: '',
                }
                : {
                    type,
                    message,
                })), { shouldRender: true }));
        }
        else if (isArray(name)) {
            name.forEach((error) => setInternalError(Object.assign({}, error)));
            reRender();
        }
    }
    function watch(fieldNames, defaultValue) {
        const watchFields = watchFieldsRef.current;
        const isDefaultValueUndefined = isUndefined(defaultValue);
        const combinedDefaultValues = isDefaultValueUndefined
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, {
                [fieldNames]: isDefaultValueUndefined
                    ? get(combinedDefaultValues, fieldNames)
                    : defaultValue,
            });
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
    function unregister(name) {
        if (fieldsRef.current) {
            (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
        }
    }
    function registerFieldsRef(ref, validateOptions = {}) {
        if (!ref.name) {
            // eslint-disable-next-line no-console
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let isFieldArray;
        let defaultValue;
        if (isRadioOrCheckbox
            ? field &&
                isArray(field.options) &&
                field.options.filter(Boolean).find((option) => {
                    return value === option.ref.value && option.ref === ref;
                })
            : field && ref === field.ref) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(field));
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...((field && field.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldRefAndValidationOptions), { mutationWatcher });
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        if (!isEmptyObject(defaultValuesRef.current)) {
            defaultValue = get(defaultValuesRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(field, defaultValue);
            }
        }
        if (shouldValidateSchemaOrResolver &&
            !isFieldArray &&
            readFormStateRef.current.isValid) {
            validateSchemaOrResolver();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, validateAllFieldCriteria, field).then((error) => {
                    const previousFormIsValid = isValidRef.current;
                    isEmptyObject(error)
                        ? validFieldsRef.current.add(name)
                        : (isValidRef.current = false);
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue ? getFieldValue(fields, field.ref) : defaultValue;
        }
        if (type) {
            attachEventListeners({
                field: isRadioOrCheckbox && field.options
                    ? field.options[field.options.length - 1]
                    : field,
                isRadioOrCheckbox,
                handleChange: handleChangeRef.current,
            });
        }
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
    const handleSubmit = React.useCallback((callback) => async (e) => {
        if (e) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        const fields = fieldsRef.current;
        let fieldValues = getFieldsValues(fields);
        if (readFormStateRef.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (shouldValidateSchemaOrResolver) {
                const { errors, values } = await validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(fieldValues), validationResolver, validationContextRef.current);
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fields)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, validateAllFieldCriteria, field);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            validFieldsRef.current.delete(name);
                        }
                        else {
                            if (fieldsWithValidationRef.current.has(name)) {
                                validFieldsRef.current.add(name);
                            }
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors)) {
                errorsRef.current = {};
                await callback(transformToNestObject(fieldValues), e);
            }
            else {
                errorsRef.current = fieldErrors;
                if (submitFocusError && isWeb) {
                    focusOnErrorField(fields, fieldErrors);
                }
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
        shouldValidateSchemaOrResolver,
        submitFocusError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const resetRefs = ({ errors, dirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
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
            isDirtyRef.current = false;
        }
        if (!dirtyFields) {
            dirtyFieldsRef.current = new Set();
        }
        if (!isSubmitted) {
            isSubmittedRef.current = false;
        }
        if (!submitCount) {
            submitCountRef.current = 0;
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValues.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
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
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
        reRender();
    };
    function getValues(payload) {
        if (isString(payload)) {
            return fieldsRef.current[payload]
                ? getFieldValue(fieldsRef.current, fieldsRef.current[payload].ref)
                : undefined;
        }
        const fieldValues = getFieldsValues(fieldsRef.current);
        const outputValues = isEmptyObject(fieldValues)
            ? defaultValuesRef.current
            : fieldValues;
        return payload && payload.nest
            ? transformToNestObject(outputValues)
            : outputValues;
    }
    React.useEffect(() => () => {
        isUnMount.current = true;
        fieldsRef.current &&
            process.env.NODE_ENV === 'production' &&
            Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, [removeFieldEventListenerAndRef]);
    if (!shouldValidateSchemaOrResolver) {
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
    const commonProps = {
        triggerValidation,
        setValue: React.useCallback(setValue, [
            reRender,
            setInternalValue,
            triggerValidation,
        ]),
        register: React.useCallback(register, [
            defaultValuesRef.current,
            defaultValuesAtRenderRef.current,
        ]),
        unregister: React.useCallback(unregister, []),
        getValues: React.useCallback(getValues, []),
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
    const control = Object.assign(Object.assign(Object.assign({ removeFieldEventListener,
        reRender }, (shouldValidateSchemaOrResolver
        ? { validateSchemaIsValid: validateSchemaOrResolver }
        : {})), { mode: {
            isOnBlur,
            isOnSubmit,
            isOnChange,
        }, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnSubmit,
        }, errorsRef,
        touchedFieldsRef,
        fieldsRef,
        isWatchAllRef,
        watchFieldsRef,
        resetFieldArrayFunctionRef,
        fieldArrayDefaultValues,
        validFieldsRef,
        dirtyFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        isDirtyRef,
        readFormStateRef,
        defaultValuesRef }), commonProps);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: React.useCallback(reset, []), clearError: React.useCallback(clearError, []), setError: React.useCallback(setError, []), errors: errorsRef.current }, commonProps);
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
                        errors.credentials && React.createElement(Error, { "data-testid": "credentials-error" }, "Invalid credentials, please try again.")),
                    React.createElement(GridItem, { xs: "1/13", sm: "2/12", md: "4/10", lg: "5/8" },
                        React.createElement(Input, { "data-testid": "email-input", error: !!errors.email, type: "email", placeholder: "Email", name: "email", ref: register({ required: true }) }),
                        errors.email && React.createElement(Error, { "data-testid": "email-error" }, "Email is required")),
                    React.createElement(GridItem, { xs: "1/13", sm: "2/12", md: "4/10", lg: "5/8" },
                        React.createElement(Input, { "data-testid": "password-input", error: !!errors.password, type: "password", placeholder: "Password", name: "password", ref: register({ required: true }) }),
                        errors.password && React.createElement(Error, { "data-testid": "password-error" }, "Password is required")),
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
    return (React.createElement(Surface, { shadow: 10, "data-testid": "promoter-card" },
        React.createElement(Image, { height: "200px", src: promoter.logo || alternativePromoterLogo }),
        React.createElement(Surface, { padding: 1 },
            React.createElement(H2, null, promoter.title),
            React.createElement(reactRouterDom.Link, { to: "/dashboard/promoter/" + promoter.promoter_id + "/edit" },
                React.createElement(Button, { "data-testid": "edit-promoter-btn" }, "Edit")),
            React.createElement(reactRouterDom.Link, { to: "/dashboard/promoter/" + promoter.promoter_id },
                React.createElement(Button, { "data-testid": "manage-promoter-events-btn" }, "Events")))));
};

var ActivityCard = function (_a) {
    var activity = _a.activity;
    var alternativeActivityLogo = "/alternativeActivityLogo.png";
    return (React.createElement(Surface, { shadow: 10, "data-testid": "activity-card" },
        React.createElement(Image, { height: "200px", src: activity.logo || alternativeActivityLogo }),
        React.createElement(Surface, { padding: 1 },
            React.createElement(H2, null, activity.title),
            React.createElement(reactRouterDom.Link, { to: "/dashboard/event/" + activity.activity_id + "/dates" },
                React.createElement(Button, { "data-testid": "manage-dates-btn" }, "Manage Dates")),
            React.createElement(reactRouterDom.Link, { to: "/dashboard/event/" + activity.activity_id + "/edit" },
                React.createElement(Button, { "data-testid": "edit-activity-btn" }, "Edit")))));
};

var TicketCard = function (_a) {
    var ticket = _a.ticket;
    return (React.createElement(Surface, { padding: 1, shadow: 10, "data-testid": "ticket-card" },
        React.createElement(H2, null, ticket.title),
        React.createElement(reactRouterDom.Link, { to: "/dashboard/ticket/" + ticket.product_id + "/edit" },
            React.createElement(Button, null, "Edit"))));
};

var ActivityDateCard = function (_a) {
    var activityDate = _a.activityDate;
    return (React.createElement(Surface, { shadow: 10, "data-testid": "activity-date-card" },
        React.createElement(Surface, { padding: 1 },
            React.createElement(H2, null, "An activity date..."),
            React.createElement(reactRouterDom.Link, { to: "/dashboard/date/" + activityDate.activity_date_id + "/edit" },
                React.createElement(Button, { "data-testid": "edit-activity-date-btn" }, "Edit")),
            React.createElement(reactRouterDom.Link, { to: "/dashboard/date/" + activityDate.activity_date_id + "/tickets" },
                React.createElement(Button, { "data-testid": "manage-activity-date-tickets-btn" }, "Tickets")))));
};

var BuyTicketCard = function (_a) {
    var ticket = _a.ticket, onAddToBasket = _a.onAddToBasket;
    return (React.createElement(Surface, { padding: 1, shadow: 10, "data-testid": "buy-ticket-card" },
        React.createElement(GridContainer, { gap: 1 },
            React.createElement(GridItem, { xs: "1/6" },
                React.createElement(H3, null, ticket.title),
                React.createElement(P, { muted: true }, ticket.amount)),
            React.createElement(GridItem, { vertialAlign: "center", horizontalAlign: "end", xs: "6/13" },
                React.createElement(Button, { onClick: function () { return onAddToBasket(ticket.product_id); }, sm: true, secondary: true }, "+ 1")))));
};

var EnumState = function (_a) {
    var e = _a.e, onEmpty = _a.onEmpty, onPopulated = _a.onPopulated;
    if (Object.keys(e).length === 0)
        return onEmpty();
    return onPopulated();
};

var HeaderWrapper = styled__default.header(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background: ", ";\n  padding: 15px 0;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n"], ["\n  background: ", ";\n  padding: 15px 0;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n"])), function (props) { return props.theme.primaryColorDark; });
var Header = function (props) { return (React.createElement(HeaderWrapper, { "data-testid": "header" },
    React.createElement(GridContainer, null,
        React.createElement(GridItem, { xs: "3/6" }, "logo"),
        React.createElement(GridItem, { xs: "6/10", horizontalAlign: "end", onClick: function () { return props.openMenu(); } }, "burger menu")))); };
var templateObject_1$7;

var WhenPromotersExist = function (props) {
    var promoters = Object.values(props.promoters);
    return (React.createElement(GridContainer, { gap: 1 },
        React.createElement(GridItem, { xs: "1/13", horizontalAlign: "end" },
            React.createElement(Button, { "data-testid": "create-promoter-btn", onClick: function () { return props.onNewPromoter(); } }, "New promoter")),
        promoters.map(function (promoter) { return (React.createElement(GridItem, { xs: "1/13" },
            React.createElement(Surface, null,
                React.createElement(PromoterCard, { promoter: promoter })))); })));
};
var WhenNoPromoters = function (props) { return (React.createElement(GridContainer, { gap: 1 },
    React.createElement(GridItem, { xs: "1/13", horizontalAlign: "center" },
        React.createElement(Button, { "data-testid": "create-first-promoter-btn", onClick: function () { return props.onNewPromoter(); } }, "Create first promoter")))); };
var ManagePromoterList = function (props) {
    return (React.createElement("div", { "data-testid": "manage-promoter-list" },
        React.createElement(EnumState, { e: props.promoters, onEmpty: function () { return React.createElement(WhenNoPromoters, __assign({}, props)); }, onPopulated: function () { return React.createElement(WhenPromotersExist, __assign({}, props)); } })));
};

var WhenActivitiesExist = function (props) {
    var activities = Object.values(props.activities);
    return (React.createElement(GridContainer, { gap: 1 },
        React.createElement(GridItem, { xs: "1/13", horizontalAlign: "end" },
            React.createElement(Button, { onClick: function () { return props.onNewActivity(); } }, "New activity")),
        activities.map(function (activity) { return (React.createElement(GridItem, { xs: "1/13" },
            React.createElement(Surface, null,
                React.createElement(ActivityCard, { activity: activity })))); })));
};
var WhenNoActivities = function (props) { return (React.createElement(GridContainer, { gap: 1 },
    React.createElement(GridItem, { xs: "1/13", horizontalAlign: "center" },
        React.createElement(Button, { onClick: function () { return props.onNewActivity(); } }, "Create first event")))); };
var ManageActivityList = function (props) {
    return (React.createElement("div", { "data-testid": "manage-activity-list" },
        React.createElement(EnumState, { e: props.activities, onEmpty: function () { return React.createElement(WhenNoActivities, __assign({}, props)); }, onPopulated: function () { return React.createElement(WhenActivitiesExist, __assign({}, props)); } })));
};

var WhenActivityDateExists = function (props) {
    var activityDates = Object.values(props.activityDates);
    return (React.createElement(GridContainer, { gap: 1 },
        React.createElement(GridItem, { xs: "1/13", horizontalAlign: "end" },
            React.createElement(Button, { onClick: function () { return props.onNewActivityDate(); } }, "New date")),
        activityDates.map(function (activityDate) { return (React.createElement(GridItem, { xs: "1/13" },
            React.createElement(Surface, null,
                React.createElement(ActivityDateCard, { activityDate: activityDate })))); })));
};
var WhenNoActivityDates = function (props) { return (React.createElement(GridContainer, { gap: 1 },
    React.createElement(GridItem, { xs: "1/13", horizontalAlign: "center" },
        React.createElement(Button, { onClick: function () { return props.onNewActivityDate(); } }, "Create first date")))); };
var ManageActivityDateList = function (props) {
    return (React.createElement("div", { "data-testid": "manage-activity-date-list" },
        React.createElement(EnumState, { e: props.activityDates, onEmpty: function () { return React.createElement(WhenNoActivityDates, __assign({}, props)); }, onPopulated: function () { return React.createElement(WhenActivityDateExists, __assign({}, props)); } })));
};

var WhenTicketsExist = function (props) {
    var tickets = Object.values(props.tickets);
    return (React.createElement(GridContainer, { gap: 1 },
        React.createElement(GridItem, { xs: "1/13", horizontalAlign: "end" },
            React.createElement(Button, { onClick: function () { return props.onNewTicket(); } }, "New ticket")),
        tickets.map(function (ticket) { return (React.createElement(GridItem, { xs: "1/13" },
            React.createElement(Surface, null,
                React.createElement(TicketCard, { ticket: ticket })))); })));
};
var WhenNoTickets = function (props) { return (React.createElement(GridContainer, { gap: 1 },
    React.createElement(GridItem, { xs: "1/13", horizontalAlign: "center" },
        React.createElement(Button, { onClick: function () { return props.onNewTicket(); } }, "Create first ticket")))); };
var ManageTicketList = function (props) {
    return (React.createElement(EnumState, { e: props.tickets, onEmpty: function () { return React.createElement(WhenNoTickets, __assign({}, props)); }, onPopulated: function () { return React.createElement(WhenTicketsExist, __assign({}, props)); } }));
};

var PersonState = function (_a) {
    var p = _a.p, onAnonymous = _a.onAnonymous, onAnonymousWithSession = _a.onAnonymousWithSession, onVerified = _a.onVerified;
    if (p.user_status == "anonymous")
        return onAnonymous();
    if (p.user_status == "anonymous_with_session")
        return onAnonymousWithSession();
    return onVerified();
};

var PromoterDescriptionForm = function (props) {
    var promoter = props.promoter;
    var _a = useForm(), register = _a.register, errors = _a.errors, handleSubmit = _a.handleSubmit;
    var onSubmit = function (values) {
        props.submitPromoterDescription(values);
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement(GridContainer, { gap: 1 },
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(H2, { "data-testid": "promoter-description-title" },
                    "Edit ",
                    promoter.title)),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: promoter.title, "data-testid": "title-input", error: !!errors.title, placeholder: "Title", name: "title", ref: register({ required: true }) }),
                errors.title && React.createElement(Error, null, "A promoter must have a title")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(TextArea, { defaultValue: promoter.description, "data-testid": "description-input", placeholder: "Description", name: "description", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Button, { "data-testid": "submit-promoter-description" }, "Save")))));
};

var ActivityDescriptionForm = function (props) {
    var activity = props.activity;
    var _a = useForm(), register = _a.register, errors = _a.errors, handleSubmit = _a.handleSubmit;
    var onSubmit = function (values) {
        props.submitActivityDescription(values);
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement(GridContainer, { gap: 1 },
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(H2, { "data-testid": "activity-description-title" },
                    "Edit ",
                    activity.title)),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activity.title, "data-testid": "title-input", error: !!errors.title, placeholder: "Title", name: "title", ref: register({ required: true }) }),
                errors.title && React.createElement(Error, null, "An event must have a title!")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(TextArea, { defaultValue: activity.description, "data-testid": "description-input", placeholder: "Description", name: "description", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Button, { "data-testid": "submit-activity-description" }, "Save")))));
};

var ActivityDateForm = function (props) {
    var activityDate = props.activityDate;
    var _a = useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var onSubmit = function (values) {
        props.submitActivityDate(values);
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement(GridContainer, { gap: 1 },
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(H3, null, "Location")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.addr_line_1, "data-testid": "addr_line_1-input", placeholder: "Line 1", name: "addr_line_1", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.addr_line_2, "data-testid": "addr_line_2-input", placeholder: "Line 2", name: "addr_line_2", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.postcode, "data-testid": "postcode-input", placeholder: "Postcode", name: "postcode", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.county, "data-testid": "county-input", placeholder: "County", name: "county", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.country, "data-testid": "country-input", placeholder: "Country", name: "country", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(H3, null, "Times")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.goes_live, "data-testid": "goes_live-input", placeholder: "Goes live", name: "goes_live", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.starts, "data-testid": "starts-input", placeholder: "Starts", name: "starts", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: activityDate.ends, "data-testid": "ends-input", placeholder: "Ends", name: "ends", ref: register() })),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Button, { "data-testid": "submit-activity-date" }, "Save")))));
};

var TicketForm = function (props) {
    var ticket = props.ticket;
    var _a = useForm(), register = _a.register, errors = _a.errors, handleSubmit = _a.handleSubmit;
    var onSubmit = function (values) {
        var _a;
        props.submitTicket({
            title: values.title,
            quantity: parseInt(values.quantity),
            shareholders: (_a = {},
                _a[props.leadCreditorId] = parseInt(values.amount),
                _a)
        });
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement(GridContainer, { gap: 1 },
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(H2, { "data-testid": "ticket-description-title" },
                    "Edit ",
                    ticket.title)),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: ticket.title, "data-testid": "title-input", error: !!errors.title, placeholder: "Title", name: "title", ref: register({ required: true }) }),
                errors.title && React.createElement(Error, { "data-testid": "title-error" }, "A ticket must have a title")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: ticket.quantity, "data-testid": "quantity-input", error: !!errors.quantity, placeholder: "Quantity", name: "quantity", ref: register({ required: true }) }),
                errors.quantity && React.createElement(Error, { "data-testid": "quantity-error" }, "A ticket must have a set quantity that")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Input, { defaultValue: ticket.amount, "data-testid": "amount-input", error: !!errors.amount, placeholder: "Amount", name: "amount", ref: register({ required: true }) }),
                errors.amount && React.createElement(Error, { "data-testid": "amount-error" }, "A ticket must have an amount")),
            React.createElement(GridItem, { xs: "1/13" },
                React.createElement(Button, { "data-testid": "submit-ticket" }, "Save")))));
};

var ShowTickets = function (_a) {
    var tickets = _a.tickets, onAddToBasket = _a.onAddToBasket;
    var ticketList = Object.values(tickets);
    return (React.createElement(GridContainer, { gap: 1 }, ticketList.map(function (ticket) { return (React.createElement(GridItem, { xs: "1/13" },
        React.createElement(BuyTicketCard, { ticket: ticket, onAddToBasket: onAddToBasket }))); })));
};
var NoTickets = function () { return (React.createElement(GridContainer, { gap: 1 },
    React.createElement(GridItem, { xs: "1/13", horizontalAlign: "center" },
        React.createElement(H2, null, "Sorry, no tickets available!")))); };
var TicketCollection = function (_a) {
    var tickets = _a.tickets, onAddToBasket = _a.onAddToBasket;
    return (React.createElement("div", { "data-testid": "ticket-collection" },
        React.createElement(EnumState, { e: tickets, onEmpty: function () { return React.createElement(NoTickets, null); }, onPopulated: function () { return React.createElement(ShowTickets, { onAddToBasket: onAddToBasket, tickets: tickets }); } })));
};

var BasketSummary = function (_a) {
    var basketItems = _a.basketItems, onUnreserve = _a.onUnreserve;
    var basketItemsList = Object.values(basketItems);
    return (React.createElement(GridContainer, { gap: 1, "data-testid": "basket-summary" }, basketItemsList.map(function (seat) { return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { xs: "1/7" },
            React.createElement(P, null, seat.title),
            React.createElement(P, { sm: true }, seat.amount)),
        React.createElement(GridItem, { vertialAlign: "center", horizontalAlign: "end", xs: "7/13" },
            React.createElement(Button, { sm: true, secondary: true, onClick: function () { return onUnreserve(seat.item_id); } }, "Unreserve")))); })));
};

var lightTheme = {
    // A primary color is the color displayed most frequently across your app’s screens and components.
    primaryColorDark: "#0779bc",
    primaryColorLight: "#0FACF3",
    // Should be applied sparingly to accent select parts of your UI.
    accentColor: "#f3570f",
    // Surface colors affect surfaces of components, such as cards, sheets, and menus.
    surfaceColor: "#FFFFFF",
    // The background color appears behind scrollable content.
    backgroundColor: "#FFFFFF",
    // Error color indicates errors in components, such as invalid text in a text field.
    errorColor: "#B00020",
    // Success color indicates successful requests in components, such button backgrounds.
    successColor: "#33cc5e",
    fontColor: "#000000",
    headingFontFamily: "Quicksand, sans-serif",
    textFontFamily: "Quicksand, sans-serif"
};

exports.ActivityCard = ActivityCard;
exports.ActivityDateCard = ActivityDateCard;
exports.ActivityDateForm = ActivityDateForm;
exports.ActivityDescriptionForm = ActivityDescriptionForm;
exports.BasketSummary = BasketSummary;
exports.Button = Button;
exports.BuyTicketCard = BuyTicketCard;
exports.EnumState = EnumState;
exports.Error = Error;
exports.GridContainer = GridContainer;
exports.GridItem = GridItem;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.Header = Header;
exports.Image = Image;
exports.ImageContainer = ImageContainer;
exports.Input = Input;
exports.LegalNotice = LegalNotice;
exports.ManageActivityDateList = ManageActivityDateList;
exports.ManageActivityList = ManageActivityList;
exports.ManagePromoterList = ManagePromoterList;
exports.ManageTicketList = ManageTicketList;
exports.P = P;
exports.PersonState = PersonState;
exports.PromoterCard = PromoterCard;
exports.PromoterDescriptionForm = PromoterDescriptionForm;
exports.SignInForm = SignInForm;
exports.Surface = Surface;
exports.TextArea = TextArea;
exports.TicketCard = TicketCard;
exports.TicketCollection = TicketCollection;
exports.TicketForm = TicketForm;
exports.lightTheme = lightTheme;
//# sourceMappingURL=index.js.map
