/*Requirement Statement: Use React to create an abridged online CV for yourself

References: 
1. https://jsonresume.org/schema/
2. https://registry.jsonresume.org/thomasdavis
*/

import Profile from "./components/Profile"
import profileImg from './images/NcInme.png'
import About from "./components/About"
import WorkList from "./components/WorkList"
import Skills from "./components/Skills"
import Education from "./components/Education"
import References from "./components/References"

const json = require('./my-resume.json') // loading the resume json file - returns a json object

function App() {
  json.basics.image = profileImg         // setting image field for profile picture
  const profileInfo = json.basics
  const aboutInfo = json.basics.summary
  const workList = json.work
  const skills = json.skills
  const education = json.education
  const references = json.references

  return (
    // Created two sections - left for Profile and right for Background
    <div className="container">
      <section className='profile'>
        <div>
          <Profile profileInfo={profileInfo} />
        </div>
      </section>
      <section className='background'>
        <div>
          <About aboutInfo={aboutInfo} />
          <WorkList workList={workList} />
          <Skills skills={skills} />
          <Education education={education} />
          <References references={references} />
        </div>
      </section>
    </div>
  );
}

export default App;
