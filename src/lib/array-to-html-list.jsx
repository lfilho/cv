// Can be a raw string or an array of strings to be rendered as <ul>
export default function parseExperienceDescription(entry, i) {
    const hasArray = entry.some(entry => Array.isArray(entry));

    let list;
    if (hasArray) {
        const listItems = entry.map((entry, i) => {
            return !Array.isArray(entry) ? (
                <p key={i} dangerouslySetInnerHTML={{ __html: entry }} />
            ) : (
                parseExperienceDescription(entry, i)
            );
        });
        list = listItems;
    } else {
        const listItems = entry.map((entry, i) => <li key={i} dangerouslySetInnerHTML={{ __html: entry }} />);
        list = <ul key={i}>{listItems}</ul>;
    }

    return list;
}
