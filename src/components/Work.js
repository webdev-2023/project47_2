// Work section compoment to display individual work experience. 
// 'work.highlights' is a list, thus using map function to display individual record as bullet item.
const Work = ({ work }) => {
    return <div>
        <h1>{work.position}, {work.name}</h1>
        <p><b>{work.startDate} - {work.endDate ? work.endDate : "Present"}</b></p>
        <p>{work.summary}</p>
        <ul>{work.highlights.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        }</ul>
    </div>
};

export default Work;
