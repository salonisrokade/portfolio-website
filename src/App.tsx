import { Box, Grid, IconButton, Button } from '@mui/material'
import './App.css'
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
import muiImg from './assets/material-ui.svg'
import reduxImg from './assets/redux.svg'
import nextJsImg from './assets/nextjs.svg'

function App() {
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
        <h1>
          {'</'}Saloni{'>'}
        </h1>
        <Box width={'15%'} display={'flex'} justifyContent={'space-around'}>
          <nav>
            <li>
              <a href="">
                <p>About Me</p>
              </a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Playground</a>
            </li>
            <li>
              <a href="">Skills</a>
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
      </Box>
      {/* Header Section Ends */}
      <div className="wrapper">
        {/* Banner Section */}
        <div className="banner">
          <p className="title">Hi, I'm Saloni - I build sleek, scalable frontend experiences.</p>
          <p className="subtitle">Frontend Developer with 3+ experience in building performent web applications. Skilled in React.js, modern UI frameworks, and collaborative team environments.</p>
          <div className="buttons">
            <Button>View my Work</Button>
            <Button>Download Resume</Button>
          </div>
        </div>
        {/* Banner Section Ends */}
        {/* Projects Section */}
        <div className="projects" id='projects'>
          <p className="section-title">Projects</p>
          <div className="project-tiles">
            <div>
              <p className="project-title">Gray Instittute</p>
              <p className="project-content">Developed various platforms, migrated legacy code to modern React</p>
            </div>
            <div>
              <p className="project-title">Admin Dashboards</p>
              <p className="project-content">Built dashboards for content management with Redux and React.js</p>
            </div>
            <div>
              <p className="project-title">Personal Portfolio</p>
              <p className="project-content">Created responsive portfolio with productivity tools using React.js and TypeScript</p>
            </div>
          </div>
        </div>
        {/* Projects Section Ends */}
        {/* Playground Section */}
        <div id="playground">
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
        <div id="skills">
          <p className="section-title">Skills</p>
          <div className="skills-images">
            <img src={jsImg} alt="JavaScrip"/>
            <img src={reactJsImg} alt="React.js"/>
            <img src={reduxImg} alt="Redux"/>
            <img src={nextJsImg} alt="Next.js"/>
            <img src={muiImg} alt="Material UI"/>
            <img src={cssImg} alt="CSS3"/>
            <img src={htmlImg} alt="HTML5"/>
            <img src={sassImg} alt="SASS"/>
            <img src={figmaImg} alt="Figma"/>
          </div>
        </div>
        {/* Skills Section Ends */}
        {/* Experience & Education Section */}
        <div>
          <div id="experience">
            <p className="section-title">Experience</p>
            <div></div>
          </div>
          <div id="education">
            <p className="section-title">Education</p>
            <div></div>
          </div>
        </div>
        {/* Experience & Education Section Ends */}
      </div>
    </div>
  )
}

export default App
