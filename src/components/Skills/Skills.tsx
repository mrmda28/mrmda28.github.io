import styles from './Skills.module.css'

const skills: string[] = [
  'Swift', 'SwiftUI', 'UIKit', 'GCD', 'Swift Concurrency'
]

export const Skills = () => {
  return (
    <div className='section'>
      <h2>Skills</h2>
      <div className={styles.skills}>
        { skills.map((skill, index) => (<div key={index} className={styles.skill}>{skill}</div>)) }
      </div>
    </div>
  )
}
