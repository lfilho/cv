// Can be a raw string or an array of strings to be render as <ul>
export default function parseExperienceDescription(entry, i) {
    if (!Array.isArray(entry)) {
        return <p key={0}>{entry}</p>;
    }

    const listItems = entry.map((entry, i) => <li key={i}>{entry}</li>);
    const list = <ul key={i}>{listItems}</ul>;

    return list;
}
