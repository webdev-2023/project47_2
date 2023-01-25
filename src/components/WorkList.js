// WorkList section compoment. Props 'workList' is a list, thus using map function to display individual record.
// Here, I have used a diffetent approch (unlike Skills component) by creating a separate 'Work' compoment, 
// to avoide chaining of map() funcion, as 'work.highlights' is also a list.

import Work from "./Work";

const WorkList = ({ workList }) => {
    return <div className='text-align'>
        <h1><i className="fa fa-lg fa-building"></i>&nbsp; &nbsp;WORK EXPERIENCE</h1>
        <hr />
        {workList.map((work) => (
            <Work key={work.id} work={work} />
        ))}
    </div>
};

export default WorkList;
