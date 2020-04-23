$.capitalizeFirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
// takes a hyphenated property
// and returns camelcased name
// will return same property name if already camelcase
$.hyphenToCamelCase = function(str) {
    return str.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase();
    });
};

