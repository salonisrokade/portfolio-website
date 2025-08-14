import { Box, Grid, IconButton, Button, Tooltip, Chip } from '@mui/material'
import './App.scss'
import Goals from './components/goals'
import PomodoroTimer from './components/PomodoroTimer'
import { Email, EmailOutlined, ExpandMore, GitHub, Launch, LinkedIn, LinkOff } from '@mui/icons-material'
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
import BasicTimeline, { TimelineData } from './components/Timeline'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import EnterAnimation from './components/EnterAnimation'
import Nav from './components/Nav'
import codingAnimation from './assets/coding-lottie.json'
import Lottie from 'lottie-react'
import Pill from './components/Chips'
import { SecondaryButton } from './components/Buttons'

function App() {
  const experience: TimelineData[] = [
    { name: 'Arham Labs', content: 'Front End Developer', year: '2023' },
    { name: 'Axioned.', content: 'Web Developer', year: '2019' },
  ]
  const education: TimelineData[] = [
    {
      name: 'Mohawk College',
      content: 'Analytics for Business Decision Making',
      year: '2025',
    },
    {
      name: 'University of Mumbai',
      content: 'B.E. in Information Technology',
      year: '2019',
    },
  ]
  return (
    <div className="App">
      {/* Header Section */}
      <header>
      <Box
        className={'header'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        boxShadow={1}
        marginBottom={4}
      >
        <h1 className="logo-title">
          <a href="#home">
            {'</'}Saloni{'>'}
          </a>
        </h1>
        <Nav />
      </Box>
      </header>
      {/* Header Section Ends */}
      {/* Banner Section */}
      <section className="banner section" id="home">
        <div className="wrapper">
          <EnterAnimation>
            <Grid container spacing={4} className="content">
              <Grid size={{ xs: 12, md: 8 }}>
                <p className="title">
                  Hi, I'm <span className="pink">Saloni</span>✨
                </p>
                <p className="title">
                  I build sleek, scalable frontend experiences.
                </p>
                <p className="subtitle">
                  Frontend Developer with 3+ experience in building performent
                  web applications. Skilled in React.js, modern UI frameworks,
                  and collaborative team environments.
                </p>
                <div className="buttons">
                  <a className="btn primary-btn" href="#projects">
                    🔍 View my Work
                  </a>
                  <a
                    className="btn secondary-btn"
                    href={`${process.env.PUBLIC_URL}/Saloni-R-Resume.pdf`}
                    target="blank"
                  >
                    📄 Download Resume
                  </a>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="emoji-container"></div>
              </Grid>
            </Grid>
          </EnterAnimation>
            <div className="arrow"><ExpandMore sx={{fontSize: '2.5rem'}}/></div>
        </div>
      </section>
      {/* Banner Section Ends */}
      {/* Projects Section */}
      <section id="projects" className="projects section">
        <div className="wrapper">
          <EnterAnimation>
            <p className="section-title">Projects</p>
            <div className="project-tiles">
              <div className="card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/gray-institute.png`}
                    alt="Gray Institute"
                  />
                </div>
                <div className="content-container">
                  <p className="heading">Gray Institute</p>
                  <div className="stack-pills">
                    <Pill label="React" />
                    <Pill label="Axios" />
                    <Pill label="MUI" />
                  </div>
                  <p className="project-content">
                    Developed various platforms, migrated legacy code to modern
                    React
                  </p>
                  <a
                    className="btn small-btn secondary-btn"
                    href="https://www.grayinstitute.com/"
                    target="blank"
                  >
                    <Launch sx={{ fontSize: '1rem', marginRight: '4px' }} /> Visit Website
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/admin-dashboard-mockup.png`}
                    alt="Admin Dashboard Mockup"
                  />
                </div>
                <div className="content-container">
                  <p className="heading">Admin Dashboards</p>
                  <div className="stack-pills">
                    <Pill label="React" />
                    <Pill label="NextJs" />
                    <Pill label="Redux Form" />
                    <Pill label="Tailwind CSS" />
                  </div>
                  <p className="project-content">
                    Built dashboards for content management with Redux and
                    React.js
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/portfolio-website-mockup.png`}
                    alt="Personal Portfolio Website"
                  />
                </div>
                <div className="content-container">
                  <p className="heading">Personal Portfolio</p>
                  <div className="stack-pills">
                    <Pill label="React" />
                    <Pill label="TypeScript" />
                    <Pill label="MUI" />
                  </div>
                  <p className="project-content">
                    Created responsive portfolio with productivity tools using
                    React.js and TypeScript
                  </p>
                  <a
                    className="btn small-btn secondary-btn"
                    href="https://github.com/salonisrokade/portfolio-website"
                    target="blank"
                  >
                    <GitHub sx={{ fontSize: '1rem', marginRight: '4px' }} /> View Code
                  </a>
                </div>
              </div>
            </div>
          </EnterAnimation>
        </div>
      </section>
      {/* Projects Section Ends */}
      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="wrapper">
          <EnterAnimation>
            <p className="section-title">Skills</p>
            <div className="skills-images">
              <div>
                <Tooltip title="JavaScript">
                  <img className="large-img" src={jsImg} alt="JavaScript" />
                </Tooltip>
                <Tooltip title="React.js">
                  <img className="large-img" src={reactJsImg} alt="React.js" />
                </Tooltip>
                <Tooltip title="Typescript">
                  <img
                    className="large-img"
                    src={typescriptImg}
                    alt="Typescript"
                  />
                </Tooltip>
                <Tooltip title="Redux">
                  <img className="large-img" src={reduxImg} alt="Redux" />
                </Tooltip>
                <Tooltip title="Next.js">
                  <img className="large-img" src={nextJsImg} alt="Next.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="HTML5">
                  <img className="small-img" src={htmlImg} alt="HTML5" />
                </Tooltip>
                <Tooltip title="CSS3">
                  <img className="small-img" src={cssImg} alt="CSS3" />
                </Tooltip>
                <Tooltip title="Github">
                  <img className="small-img" src={githubImg} alt="Github" />
                </Tooltip>
                <Tooltip title="Tailwind CSS">
                  <img
                    className="small-img"
                    src={tailwindImg}
                    alt="Tailwind CSS"
                  />
                </Tooltip>
                <Tooltip title="Material UI">
                  <img className="small-img" src={muiImg} alt="Material UI" />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <img className="small-img" src={sassImg} alt="SASS" />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <img className="small-img" src={figmaImg} alt="Figma" />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <img className="small-img" src={netlifyImg} alt="Netlify" />
                </Tooltip>
              </div>
            </div>
          </EnterAnimation>
        </div>
      </section>
      {/* Skills Section Ends */}
      {/* Experience & Education Section */}
      <section className="section">
        <div className="wrapper">
          <EnterAnimation>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <p className="section-title">Experience</p>
                <BasicTimeline data={experience} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <p className="section-title">Education</p>
                <BasicTimeline data={education} />
              </Grid>
            </Grid>
          </EnterAnimation>
        </div>
      </section>
      {/* Experience & Education Section Ends */}
      {/* </div> */}
      <footer>
        <div>
        <p>Built with love by <strong>Saloni R</strong> 🩷</p>
        <span>© 2025 Saloni Rokade. All rights reserved.</span>
        </div>
        <div>
          <a href="http://www.linkedin.com/in/saloni-r/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
          <a href="https://github.com/salonisrokade" target="_blank" rel="noopener noreferrer"><GitHub/></a>
          <a href="mailto:salonirokade119@gmail.com"><EmailOutlined/></a>
        </div>
      </footer>
      {/* <ToastContainer/> */}
    </div>
  )
}

export default App
