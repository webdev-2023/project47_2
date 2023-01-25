// Education section compoment. Props 'education' is a list, thus using map function to display individual record.
const Education = ({ education }) => {
    return <div className='text-align'>
        <h1><i className="fa fa-lg fa-mortar-board"></i>&nbsp; &nbsp;EDUCATION</h1>
        <hr />
        {education.map((degree, index) => (
            <div key={index}>
                <h2>{degree.studyType}, {degree.institution}</h2>
                <p><b>{degree.startDate} - {degree.endDate}</b></p>
            </div>
        ))}
    </div>
};

export default Education;
