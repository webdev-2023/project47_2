// References section compoment. Props 'references' is a list, thus using map function to display individual record.
const References = ({ references }) => {
    return <div className='text-align'>
        <h1><i className="fa fa-check-circle"></i>&nbsp; &nbsp;REFERENCES</h1>
        <hr />
        {references.map((reference, index) => (
            <div key={index}>
                <h2>{reference.name}, {reference.designation}</h2>
                <div className='reference'><p style={{ paddingLeft: "10px" }}>{reference.reference}</p></div>
            </div>
        ))}
    </div>
}

export default References;
