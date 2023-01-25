// Skills section compoment. Props 'skills' and keywords are lists, thus using map function to display individual record.
const Skills = ({ skills }) => {
    return <div className='text-align'>
        <h1><i className="fa fa-wrench"></i>&nbsp; &nbsp;SKILLS</h1>
        <hr />
        {skills.map((skill, index) => (
            <div key={index}>
                <h3>{skill.name}</h3>
                {skill.keywords.map((keyword, index) => (
                    <button key={index} className='btn'>{keyword}</button>
                ))
                }
            </div>
        ))
        }
    </div>
};

export default Skills;
