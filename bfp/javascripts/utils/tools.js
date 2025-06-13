// Files with shared or commong function for other client side scripts
window.dangerThreshold = 5;
window.alertThreshold = 30;

/**
 * Create a xhr request
 * @return {*} a xhr request
 */
window.getXMLHttpRequest = function() {
    let xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        console.log('Votre navigateur ne supporte pas l\'objet XMLHTTPRequest...');
        return null;
    }

    return xhr;
};

/**
 * Insert the element newElement after the element afterElement
 * @param {HTMLElement}newElement the element to insert
 * @param {HTMLElement}afterElement the targetElement
 */
window.insertAfter = function(newElement, afterElement) {
    const parent = afterElement.parentNode;

    if (parent.lastChild === afterElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, afterElement.nextSibling);
    }
};

/**
 * Create an html element with some attributes
 * @param {String} element
 * @param {Array} attributes naames of attribute to add
 * @param {Array} values values of attributes to add
 * @return {HTMLElement}
 */
window.createElementWithAttributes = function(element, attributes, values) {
    try {
        const newElement = document.createElement(element);
        for (let i = 0; i < attributes.length; i++) {
            newElement.setAttribute(attributes[i], values[i]);
        }
        return newElement;
    } catch (e) {
        return document.createElement(element);
    }
};

/**
 * Format the display in list, with the specified separator. Limit is the number of elements that are explicitely printed.
 * @param {HTMLElement}cell
 * @param {String} values
 * @param {String} separator
 * @param {String} limit
 */

window.displayMap = function(cell, values, separator, limit) {
    if (values === window.amiunique_nojs || values === window.amiunique_nojs) {
        cell.innerText = window.amiunique_no_js;
    } else if (values === window.amiunique_not_supported) {
        cell.innerText = window.amiunique_not_supported;
    } else if (values === window.amiunique_no_value) {
        cell.innerText = window.amiunique_no_value;
    } else if (values === "undefined") {
        cell.innerText = window.amiunique_undefined;
    } else {
        let obj = values;
        if (values === '') {
            cell.innerText = '';
        }
        let cpt = 0;
        let elements = [];

        if (typeof values === "string" && values.startsWith('{') && values.endsWith('}')) {
            obj = JSON.parse(values);
        }

        if (Array.isArray(values) || typeof values === "string" && values.startsWith('[') && values.endsWith(']')) {
            values = values.substring(2, values.length - 2).split('","');
            elements = values;
            cpt = values.length;
        } else {
            for (const key in obj) {
                value = obj[key];
                if (value === true || value === 'true') {
                    elements.push(key);
                    cpt++;
                } else if (value !== false && value !== 'false' && value !== '') {
                    elements.push(key + " : " + value);
                    cpt++;
                }
            }
        }


        let text = elements.slice(0, limit).join(separator);
        const hidden = cpt - limit;
        if (hidden > 0) {
            text += ' and ' + hidden + ' others';
        }

        cell.innerText = text;
    }
};


window.createBadgeWithThreshold = function(value) {
    let badge;
    if (value === 'NA') {
        badge = createElementWithAttributes('span', ['class'], ['badge badge-info']);
        badge.innerText = 'NA';
    } else {
        let badge_class = '';
        if (value < dangerThreshold) {
            badge_class = 'badge-danger'
        } else if (value > dangerThreshold && value < alertThreshold) {
            badge_class = 'badge-warning'
        } else {
            badge_class = 'badge-success'
        }

        badge = createElementWithAttributes('span', ['class'], ['badge ' + badge_class]);

        if (value === 0) {
            badge.innerText = 'Unique';
        } else if (value < 0.01) {
            badge.innerText = '<0.01%';
        } else {
            badge.innerText = value.toFixed(2) + '%';
        }
    }

    return badge;
};

window.createPeriodBadge = function(value, period) {
    const p = document.createElement('p');
    const badge = createBadgeWithThreshold(value);
    const span = document.createElement('span');
    span.innerText = period + ' : ';
    p.appendChild(span);
    p.appendChild(badge);

    return p;
};