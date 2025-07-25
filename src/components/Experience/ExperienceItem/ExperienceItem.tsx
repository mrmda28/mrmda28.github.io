import styles from './ExperienceItem.module.css'

export interface ExperienceProps {
  company: string
  description: string
  period: string
  attainments: string[]
  stack: string[]
}

export const ExperienceItem = (props: ExperienceProps) => {
    const { company, description, period, attainments, stack } = props
    return (
      <div className={styles.section}>
        <div>
          <h3 className={styles.company}>{company} <span className={styles.description}>{description}</span></h3>
          <p>{period}</p>
        </div>
        <ul>
          { attainments.map((attainment, index) => (<li key={index}>{attainment}</li>)) }
        </ul>
        <div className={styles.stackList}>
          { stack.map((item, index) => (<div key={index} className={styles.stackItem}>{item}</div>)) }
        </div>
      </div>
    )
}
