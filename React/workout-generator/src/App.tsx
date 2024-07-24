import { useState } from "react"
import Hero from "./components/Hero"
import Questionnaire from "./components/Questionnaire"
import Workout from "./components/Workout"
import {SCHEMES, WORKOUTS} from './utils/workout-list.js'
import {generateWorkout} from './utils/functions.js'


function App() {
  type workoutData = {
    description: string,
    meta: {
      environment: string,
      equipment: string[],
      level: number[]
    },
    muscles: string[],
    name: string,
    reps: number,
    rest: number,
    substitutes: string[],
    tempo: string,
    type: string,
    unit: string,
    variants: Record<string, string>
  }

  const [poison, setPoison] = useState(Object.keys(WORKOUTS)[0])
  const [goal, setGoal] = useState(Object.keys(SCHEMES)[0])
  const [muscles, setMuscles] = useState<string[]>([])
  const [workout, setWorkout] = useState<workoutData[]>()

  function handleGenerateWorkout() {
    const newWorkout = generateWorkout({muscles, poison, goal})
    setWorkout(newWorkout)
    window.location.href = '#workout'
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-700 text-white scroll-smooth">
      <Hero />
      <Questionnaire 
        poison={poison}
        setPoison={setPoison}
        goal={goal}
        setGoal={setGoal}
        muscles={muscles}
        setMuscles={setMuscles}
        handleGenerateWorkout={handleGenerateWorkout}
      />
      {( workout && <Workout workout={workout} />)}
    </main>
  )
}

export default App
