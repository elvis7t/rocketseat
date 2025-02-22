export function extractQueryParams(queryString) {

    return queryString.substr(1).split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=');
        queryParams[key] = value;
        return queryParams;
    }, {});
}