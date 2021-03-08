// 272

/**
 * Three ways:
 * module.exports getDate = {function name}
 * module.exports.getDate = {anonymous function}
 * exports.getDate = {anonymous function}
 */

exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: 'long'
    }

    return today.toLocaleDateString("en-US", options);
}