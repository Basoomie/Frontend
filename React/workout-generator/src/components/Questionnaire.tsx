
import { useState } from 'react'
import {SCHEMES, WORKOUTS} from '../utils/workout-list.js'
import QuestionHeader from './QuestionHeader.js'
import SectionWrapper from './SectionWrapper.js'

type QuestionnaireProps = {
  poison: string,
  setPoison: React.Dispatch<React.SetStateAction<string>>,
  goal: string,
  setGoal: React.Dispatch<React.SetStateAction<string>>,
  muscles: string[],
  setMuscles: React.Dispatch<React.SetStateAction<string[]>>,
  handleGenerateWorkout: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
  const {poison, setPoison, goal, setGoal, muscles, setMuscles, handleGenerateWorkout} = props
  const [showModal, setShowModal] = useState(false)

  function handleSetPoison(workout: string) {
    if (poison !== workout) {
      setMuscles([])
    }
    setPoison(workout)
  }

  function handleSetScheme(objective: string) {
    setGoal(objective)
  }

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  function handleSelectMuscleGroups(muscle: string) {
    // if the muscle is already in the muscles array
    if (muscles.includes(muscle)) {
      const newMuscles: string[] = muscles.filter(m => {return m !== muscle})
      setMuscles(newMuscles)
      return
    }

    // if there are already 3 choices for the individual split
    if (muscles.length > 2) {
      return
    }

    // if there is already a choice for the other splits
    if (poison !== 'individual') {
      const newMuscles = [muscle]
      setMuscles(newMuscles)
      setShowModal(!showModal)
      return
    }

    // if the poison is 'individual'
    const newMuscles = [...muscles, muscle]
    setMuscles(newMuscles)
    if (muscles.length === 2) {
      setShowModal(!showModal)
    }
  }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

      <QuestionHeader num="01" title="Pick your poison" caption="Select the workout you wish to endure" />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((workout: string, index: number) => {
          return (
            <button key={index} onClick={() => handleSetPoison(workout)} className={'border-solid border-2 rounded-md py-3 px-4 capitalize hover:border-blue-600 duration-200 bg-slate-800 ' + (poison === workout ? 'border-blue-600 bg-slate-900' : 'border-blue-400')}>{workout.replace('_', ' ')}</button>
          )
        })}
      </div>

      <QuestionHeader num="02" title="Lock on targets" caption="Select the muscles judged for annihilation" />
      <div className={'flex flex-col border-2 border-blue-400 rounded-md bg-slate-900 relative'}>
        <button className={'p-3 capitalize'} onClick={handleToggleModal}>
          {!muscles.length ? "Select Muscle Groups" : muscles.join(" ")}
          {showModal ? <i className="fa-solid fa-angle-up absolute right-6 top-4"></i> : <i className="fa-solid fa-angle-down absolute right-6 top-4"></i>}
        </button>
        <>{showModal && 
          (
            <div className='flex flex-col items-center p-4'>
              {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscle: string, index: number) => {
                return (
                  <button key={index} onClick={() => {handleSelectMuscleGroups(muscle)}} className={'flex flex-col uppercase hover:text-blue-400 duration-200 ' + (muscles.includes(muscle) && 'text-blue-600')}>{muscle}</button>
                )
              })}
            </div>
          )
        }</>
      </div>

      <QuestionHeader num="03" title="Become Juggernaut" caption="Select your ultimate objective" />
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, index) => {
          return (
            <button onClick={() => {handleSetScheme(scheme)}} key={index} className={'border-2 border-solid rounded-md p-5 hover:border-blue-600 duration-200 bg-slate-800 ' + (scheme == goal ? 'border-blue-600 bg-slate-900' : 'border-blue-400') }>
              <p className='capitalize'>{scheme.replace('_', ' ')}</p>
            </button>
          )
        })}
      </div>

      <button onClick={handleGenerateWorkout} className="border-blue-400 border-solid border-2 rounded-md px-9 py-4 mt-6 mb-32 mx-auto blueShadow duration-200">Formulate</button>

    </SectionWrapper>
  )
}
