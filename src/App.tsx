import { Box, Grid } from '@mui/material'
import './App.scss'
import {
  EmailOutlined,
  ExpandMore,
  GitHub,
  Launch,
  LinkedIn,
} from '@mui/icons-material'
import jsImg from './assets/js.svg'
import cssImg from './assets/css.svg'
import figmaImg from './assets/figma.svg'
import htmlImg from './assets/html.svg'
import reactJsImg from './assets/reactjs.svg'
import sassImg from './assets/sass.svg'
import typescriptImg from './assets/typescript.svg'
import githubImg from './assets/github.svg'
import netlifyImg from './assets/netlify.svg'
import tailwindImg from './assets/tailwind.svg'
import muiImg from './assets/material-ui.svg'
import reduxImg from './assets/redux.svg'
import nextJsImg from './assets/nextjs.svg'
import BasicTimeline, { TimelineData } from './components/Timeline'
import EnterAnimation from './components/EnterAnimation'
import Nav from './components/Nav'
import codingAnimation from './assets/coding-lottie.json'
import Lottie from 'lottie-react'
import Pill from './components/Chips'
import CustomTooltip from './components/Tooltip'

function App() {
  const experience: TimelineData[] = [
    // {
    //   name: 'Mohawk College',
    //   position: 'Student',
    //   content: 'Analytics for Business Decision Making',
    //   year: '2025',
    //   imageUrl: ''
    // },
    {
      name: 'Arham Labs',
      position: 'Front End Developer',
      content:
        'I spent 3 years building dashboards, websites, and LMS platforms with React. One of my favorite challenges was modernizing a huge legacy codebase into clean, functional React components, making apps faster and the team’s life easier. I also built reusable component libraries, worked with designers in Figma, and helped roll out features using CI/CD pipelines and AWS.',
      year: '2023',
      imageUrl: '/arham-labs.webp',
    },
    {
      name: 'Axioned.',
      position: 'Web Developer',
      content:
        'My first step into professional dev work! I learned the foundations of building accessible SPAs, reusable components, and the rhythm of Agile teamwork. It taught me the value of collaboration and writing code that truly puts the user first.',
      year: '2019',
      imageUrl: '/axioned.webp',
    },
    // {
    //   name: 'University of Mumbai',
    //   position: 'Student',
    //   content: 'B.E. in Information Technology',
    //   year: '2019',
    //   imageUrl: ''
    // },
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
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="emoji-container"></div>
              </Grid>
            </Grid>
          </EnterAnimation>
          <div className="arrow">
            <ExpandMore sx={{ fontSize: '2.5rem' }} />
          </div>
        </div>
      </section>
      {/* Banner Section Ends */}
      {/* About Me Section */}
      <section className="about-me section" id="about-me">
        <div className="wrapper">
          <p className="section-title">About Me</p>
          <Grid
            container
            spacing={2}
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <Grid className="media" size={{ xs: 12, md: 4 }}>
              <Lottie autoplay loop animationData={codingAnimation} />
              <div className="emoji-container about-me-emoji"></div>
            </Grid>
            <Grid className="content" size={{ xs: 12, md: 7 }}>
              <p>
                I’m a frontend developer who turns ideas into sleek,
                high-performing interfaces that feel effortless to use. What
                started as tweaking websites for fun grew into 3+ years of
                building enterprise dashboards, revamping legacy code, and
                crafting clean, scalable solutions with React, TypeScript, and
                Redux. I’m all about thoughtful design, smooth interactions, and
                code that’s as elegant under the hood as it looks on screen.
              </p>
              <p>
                When I’m not coding, you’ll probably find me exploring new
                places or befriending every cat I meet.
              </p>
            </Grid>
          </Grid>
        </div>
      </section>
      {/* About Me Section Ends */}
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
                    Modernized Gray Institute’s fitness platform with React dashboards, boosting performance and usability.
                  </p>
                  <a
                    className="btn small-btn secondary-btn"
                    href="https://www.grayinstitute.com/"
                    target="blank"
                  >
                    <Launch sx={{ fontSize: '1rem', marginRight: '4px' }} />{' '}
                    Visit Website
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
                    <GitHub sx={{ fontSize: '1rem', marginRight: '4px' }} />{' '}
                    View Code
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
                <CustomTooltip title="JavaScript">
                  <img className="large-img" src={jsImg} alt="JavaScript" />
                </CustomTooltip>
                <CustomTooltip title="React.js">
                  <img className="large-img" src={reactJsImg} alt="React.js" />
                </CustomTooltip>
                <CustomTooltip title="Typescript">
                  <img
                    className="large-img"
                    src={typescriptImg}
                    alt="Typescript"
                  />
                </CustomTooltip>
                <CustomTooltip title="Redux">
                  <img className="large-img" src={reduxImg} alt="Redux" />
                </CustomTooltip>
                <CustomTooltip title="Next.js">
                  <img className="large-img" src={nextJsImg} alt="Next.js" />
                </CustomTooltip>
              </div>
              <div>
                <CustomTooltip title="HTML5">
                  <img className="small-img" src={htmlImg} alt="HTML5" />
                </CustomTooltip>
                <CustomTooltip title="CSS3">
                  <img className="small-img" src={cssImg} alt="CSS3" />
                </CustomTooltip>
                <CustomTooltip title="Github">
                  <img className="small-img" src={githubImg} alt="Github" />
                </CustomTooltip>
                <CustomTooltip title="Tailwind CSS">
                  <img
                    className="small-img"
                    src={tailwindImg}
                    alt="Tailwind CSS"
                  />
                </CustomTooltip>
                <CustomTooltip title="Material UI">
                  <img className="small-img" src={muiImg} alt="Material UI" />
                </CustomTooltip>
                <CustomTooltip title="JavaScript">
                  <img className="small-img" src={sassImg} alt="SASS" />
                </CustomTooltip>
                <CustomTooltip title="JavaScript">
                  <img className="small-img" src={figmaImg} alt="Figma" />
                </CustomTooltip>
                <CustomTooltip title="JavaScript">
                  <img className="small-img" src={netlifyImg} alt="Netlify" />
                </CustomTooltip>
              </div>
            </div>
          </EnterAnimation>
        </div>
      </section>
      {/* Skills Section Ends */}
      {/* Experience & Education Section */}
      <section id="experience" className="section">
        <div className="wrapper">
          <EnterAnimation>
            <Grid container spacing={2} marginBottom={'18px'}>
              <Grid size={{ xs: 12, md: 12 }}>
                <p className="section-title">Experience</p>
                <BasicTimeline data={experience} />
              </Grid>
            </Grid>
            <p>👉 Want the detailed version? <a
                    className="download-link"
                    href={`${process.env.PUBLIC_URL}/Saloni-R-Resume.pdf`}
                    target="blank"
                  >
                  Download Resume
                  </a></p>
          </EnterAnimation>
        </div>
      </section>
      {/* Experience & Education Section Ends */}
      {/* </div> */}
      <footer>
        <div>
          <p>
            Built with love by <strong>Saloni R</strong> 🩷
          </p>
          <span>© 2025 Saloni Rokade. All rights reserved.</span>
        </div>
          <div>
          <a
            href="http://www.linkedin.com/in/saloni-r/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/salonisrokade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a href="mailto:salonirokade119@gmail.com">
            <EmailOutlined />
          </a>
        </div>
      </footer>
      {/* <ToastContainer/> */}
    </div>
  )
}

export default App
