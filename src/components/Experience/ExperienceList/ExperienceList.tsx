import { ExperienceItem, type ExperienceProps } from "../ExperienceItem/ExperienceItem.tsx"

const experienceList: ExperienceProps[] = [
  {
    company: 'Wildberries',
    period: '04.2025 – Present',
    description: '(Leading e-commerce company in Eastern Europe)',
    attainments: [],
    stack: ['Swift', 'SwiftUI']
  },
  {
    company: 'MTS Digital',
    period: '04.2024 – 04.2025',
    description: '(Leading telecommunications group in Eastern Europe)',
    attainments: [
      'Designed and implemented new features – from clarifying requirements and reviewing designs to making technical decisions and delivering the final implementation.',
      'Developed functionality not only for iOS but also for Android using Kotlin.',
      'Fixed critical bugs that had remained unresolved for over six months.',
      'Integrated shared business logic (Kotlin Multiplatform) and reusable UI components (Compose Multiplatform) into the iOS app.'
    ],
    stack: ['Swift', 'SwiftUI', 'UIKit', 'GCD', 'Kotlin', 'Clean Architecture', 'MVVM', 'UDF', 'CocoaPods', 'Tuist']
  },
  {
    company: 'TheBestApp',
    period: '09.2022 – 04.2024 | 03.2021 – 02.2022',
    description: '(Outsourcing / outstaffing company)',
    attainments: [
      'Collaborated with multiple teams to design and develop new application modules.',
      'Adopted SwiftUI where supported by the minimum iOS deployment target.',
      'Optimized UI performance in critical areas by refactoring layout to use frames, which helped eliminate occasional scroll hitches.'
    ],
    stack: ['Swift', 'UIKit', 'SwiftUI', 'GCD', 'Swift Concurrency', 'Combine', 'SPM', 'SwiftLint', 'SwiftGen', 'XCTest']
  },
  {
    company: 'SWTec',
    period: '02.2022 – 09.2022',
    description: '(Outsourcing company)',
    attainments: [
      'Designed and developed new modules based on the VIPER architecture.',
      'Participated in developing the Android version of the application.',
      'Introduced unit testing practices, improving the app’s stability and reliability.'
    ],
    stack: ['Swift', 'UIKit', 'GCD', 'VIPER', 'CocoaPods', 'MSAL', 'Firebase', 'XCTest']
  }
]

export const ExperienceList = () => {
    return (
      <div className='section'>
        <h2>Experience</h2>
        { experienceList.map((item, index) => (<ExperienceItem key={index} {...item} />)) }
      </div>
    )
}