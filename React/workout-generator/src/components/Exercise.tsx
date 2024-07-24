// An individual exercise card used in Workout.tsx

import { useState } from "react"

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

type ExerciseProps = {
    exercise: workoutData,
    index: number
}

export default function Exercise(props: ExerciseProps) {
    const {exercise, index} = props
    const [setsCompleted, setSetsCompleted] = useState(0)

    function handleUpdateSets() {
        if (setsCompleted < 5) {
            setSetsCompleted(setsCompleted + 1)
            return
        }
        setSetsCompleted(0)
    }
    
    return (
        <div className="flex flex-col bg-slate-900 gap-4 my-16 p-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:flex-wrap gap-x-4">
                <p className="text-gray-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl left-4">{'0' + (index + 1)}</p>
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl capitalize flex-1 text-center">{exercise.name.replaceAll("_", " ")}</h2>
                <p className="text-gray-400 right-4">{exercise.type}</p>
            </div>
            <div className="p-4">
                <p className="text-gray-500">Muscle Groups</p>
                <p className="capitalize">{exercise.muscles}</p>
                <p className="py-3">{exercise.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 ">
                {["reps", "rest", "tempo"].map((val) => {
                    return (
                        <div key={val} className="flex flex-col border-2 border-slate-600 p-2">
                            <p className="capitalize text-gray-400">{val === 'reps' ? exercise.unit : val}</p>
                            <p>{exercise[val]}</p>
                        </div>
                    )
                })}
                <button onClick={handleUpdateSets} className="flex flex-col border-2 border-slate-400 hover:border-blue-600 duration-200 p-2">
                    <p className="text-gray-400">Sets Completed</p>
                    <p>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    )
}