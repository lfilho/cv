// Traverse cvData recursively and concatenate every property named "keywords" in it:
export default function getKeywords(obj) {
    let keywords = [];
    for (let key in obj) {
        if (key === 'keywords') {
            keywords = keywords.concat(obj[key]);
        } else if (typeof obj[key] === 'object') {
            keywords = keywords.concat(getKeywords(obj[key]));
        }
    }
    return keywords;
}
