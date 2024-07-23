
import {SCHEMES, WORKOUTS} from '../utils/workout-list.js'
import QuestionHeader from './QuestionHeader.js'
import SectionWrapper from './SectionWrapper.js'

export default function Questionnaire() {
  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

      <QuestionHeader num="01" title="Pick your poison" caption="Select the workout you wish to endure" />
      <div className='grid grid-cols-2 sm:grod-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((workout: string, index: number) => {
          return (
            <button key={index} className='border-blue-400 border-solid border-2 rounded-md py-3 px-4'>{workout}</button>
          )
        })}
      </div>

      <QuestionHeader num="03" title="Become Juggernaut" caption="Select your ultimate objective" />
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, index) => {
          return (
            <button className='border-2 border-solid border-blue-400 rounded-md p-5' key={index}>{scheme}</button>
          )
        })}
      </div>
      
    </SectionWrapper>
  )
}
