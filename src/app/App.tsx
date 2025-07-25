import styles from './App.module.css'
import { Profile } from '../components/Profile/Profile'
import { About } from '../components/About/About'
import { ExperienceList } from '../components/Experience/ExperienceList/ExperienceList'
import { Education } from '../components/Education/Education'
import { Skills } from "../components/Skills/Skills.tsx";

function App() {
  return (
    <div className={styles.container}>
      <Profile />
      <About />
      <ExperienceList />
      <Education />
      <Skills />
    </div>
  )
}

export default App
