// About section compoment. 
const About = ({ aboutInfo }) => {
    return <div className='text-align'>
        <h1><i className="fa fa-user-secret icon"></i>ABOUT</h1>
        <hr />
        <p>{aboutInfo}</p>

    </div>
}

export default About
