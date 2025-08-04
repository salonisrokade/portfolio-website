import { Box, Grid, IconButton, Button, Tooltip } from '@mui/material'
import './App.scss'
import Goals from './components/goals/goalsList'
import PomodoroTimer from './components/pomodoroTimer/pomodoroTimer'
import { GitHub, LinkedIn } from '@mui/icons-material'
import jsImg from './assets/js.svg'
import cssImg from './assets/css.svg'
import figmaImg from './assets/figma.svg'
import htmlImg from './assets/html.svg'
import reactJsImg from './assets/reactjs.svg'
import sassImg from './assets/sass.svg'
import eslintImg from './assets/eslint.svg'
import typescriptImg from './assets/typescript.svg'
import githubImg from './assets/github.svg'
import netlifyImg from './assets/netlify.svg'
import tailwindImg from './assets/tailwind.svg'
import muiImg from './assets/material-ui.svg'
import reduxImg from './assets/redux.svg'
import nextJsImg from './assets/nextjs.svg'
import BasicTimeline, { TimelineData } from './components/timeline/timeline'

function App() {
  const experience: TimelineData[] = [
    {name: 'Arham Labs', content: 'Front End Developer'},
    {name: 'Axioned.', content: 'Web Developer'},
  ]
  const education: TimelineData[] = [
    {name: 'Mohawk College', content: 'Analytics for Business Decision Making'},
    {name: 'University of Mumbai', content: 'B.E. in Information Technology'},
  ]
  return (
    <div className="App">
      {/* Header Section */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        boxShadow={1}
        padding={'12px 20px'}
        marginBottom={4}
      >
        <h1 className="logo-title">
          {'</'}Saloni{'>'}
        </h1>
        <nav>
          <li>
            <a href="#about-me">
              <p>About Me</p>
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#playground">Playground</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <IconButton
              href="https://www.linkedin.com/in/saloni-r/"
              target="blank"
            >
              <LinkedIn sx={{ color: '#E0E0E0 ' }} />
            </IconButton>
          </li>
          <li>
            <IconButton sx={{ color: '#E0E0E0 ' }}>
              <GitHub />
            </IconButton>
          </li>
        </nav>
      </Box>
      {/* Header Section Ends */}
      <div className="wrapper">
        {/* Banner Section */}
        <div className="banner section" id="about-me">
          <div className="content">
            <p className="title">
              Hi, I'm Saloni - I build sleek, scalable frontend experiences.
            </p>
            <p className="subtitle">
              Frontend Developer with 3+ experience in building performent web
              applications. Skilled in React.js, modern UI frameworks, and
              collaborative team environments.
            </p>
          </div>
          <div className="buttons">
            <a className="btn primary-btn">View my Work</a>
            <a className="btn secondary-btn">Download Resume</a>
          </div>
        </div>
        {/* Banner Section Ends */}
        {/* Projects Section */}
        <div id="projects" className="projects section">
          <p className="section-title">Projects</p>
          <div className="project-tiles">
            <div className='card'>
              <p className="heading">Gray Institute</p>
              <p className="project-content">
                Developed various platforms, migrated legacy code to modern
                React
              </p>
            </div>
            <div className='card'>
              <p className="heading">Admin Dashboards</p>
              <p className="project-content">
                Built dashboards for content management with Redux and React.js
              </p>
            </div>
            <div className='card'>
              <p className="heading">Personal Portfolio</p>
              <p className="project-content">
                Created responsive portfolio with productivity tools using
                React.js and TypeScript
              </p>
            </div>
          </div>
        </div>
        {/* Projects Section Ends */}
        {/* Playground Section */}
        <div id="playground" className='section'>
          <p className="section-title">Playground</p>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Goals />
            </Grid>
            <Grid size={4}>
              <PomodoroTimer />
            </Grid>
          </Grid>
        </div>
        {/* Playground Section Ends */}
        {/* Skills Section */}
        <div id="skills" className='section'>
          <p className="section-title">Skills</p>
          <div className="skills-images">
            <div>
              <Tooltip title="JavaScript"><img className='large-img' src={jsImg} alt="JavaScript" /></Tooltip>
              <Tooltip title="React.js"><img className='large-img' src={reactJsImg} alt="React.js" /></Tooltip>
              <Tooltip title="Typescript"><img className='large-img' src={typescriptImg} alt="Typescript" /></Tooltip>
              <Tooltip title="Redux"><img className='large-img' src={reduxImg} alt="Redux" /></Tooltip>
              <Tooltip title="Next.js"><img className='large-img' src={nextJsImg} alt="Next.js" /></Tooltip>
            </div>
            <div>
              <Tooltip title="HTML5"><img className='small-img' src={htmlImg} alt="HTML5" /></Tooltip>
              <Tooltip title="CSS3"><img className='small-img' src={cssImg} alt="CSS3" /></Tooltip>
              <Tooltip title="Github"><img className='small-img' src={githubImg} alt="Github" /></Tooltip>
              <Tooltip title="Tailwind CSS"><img className='small-img' src={tailwindImg} alt="Tailwind CSS" /></Tooltip>
              <Tooltip title="Material UI"><img className='small-img' src={muiImg} alt="Material UI"/></Tooltip>
              <Tooltip title="JavaScript"><img className='small-img' src={sassImg} alt="SASS" /></Tooltip>
              <Tooltip title="JavaScript"><img className='small-img' src={figmaImg} alt="Figma" /></Tooltip>
              <Tooltip title="JavaScript"><img className='small-img' src={netlifyImg} alt="Netlify" /></Tooltip>
            </div>
          </div>
        </div>
        {/* Skills Section Ends */}
        {/* Experience & Education Section */}
        <div className='section'>
          <Grid container spacing={2}>
            <Grid size={6}>
            <p className="section-title">Experience</p>
              <BasicTimeline data={experience}/></Grid>
            <Grid size={6}>
            <p className="section-title">Education</p>
              <BasicTimeline data={education}/></Grid>
          </Grid>
        </div>
        {/* Experience & Education Section Ends */}
      </div>
    </div>
  )
}

export default App
