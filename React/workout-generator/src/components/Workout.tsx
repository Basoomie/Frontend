// The Workout section, made from multiple Exercise.tsx cards 

import Exercise from "./Exercise"
import SectionWrapper from "./SectionWrapper"

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

  type WorkoutParams = {
    workout: workoutData[]
  }

export default function Workout(props: WorkoutParams) {
    const {workout} = props

    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className="flex flex-col gap-4 max-w-3xl drop-shadow-lg">
                {workout.map((exercise, index) => {
                    return (
                        <Exercise key={index} exercise={exercise} index={index} />
                    )
                })}
            </div>
            <></>
        </SectionWrapper>
    )
}