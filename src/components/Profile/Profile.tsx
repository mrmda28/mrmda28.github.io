import styles from './Profile.module.css'

interface Button {
  title: string
  name: string
  link: string
}

const title = 'Dmitry Maslennikov'
const subtitle = 'Software Engineer | iOS Developer'
const buttons: Button[] = [
  {
    title: 'Email:',
    name: 'mrmda28@gmail.com',
    link: 'mailto:mrmda28@gmail.com'
  },
  {
    title: 'LinkedIn:',
    name: 'linkedin.com/in/mrmda28',
    link: 'https://www.linkedin.com/in/mrmda28'
  }
]
const avatarUrl = 'https://avatars.githubusercontent.com/u/45512200'

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        { buttons.map((button, index) => (
          <div key={index} className={styles.button}>
            <p>{button.title}</p>
            <a target='_blank' href={button.link}>{button.name}</a>
          </div>
        )) }
      </div>
      <img className={styles.avatar} src={avatarUrl} alt='Profile picture'/>
    </div>
  )
}
