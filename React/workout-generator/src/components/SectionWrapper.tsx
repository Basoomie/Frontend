import React from 'react'

type SectionWrapperProps = {
    children: React.ReactElement[],
    id: string,
    header: string,
    title: string[]

}

export default function SectionWrapper(props: SectionWrapperProps) {
    const {children, id, header, title} = props
    return (
        <section id={id} className='flex flex-col items-center justify-center min-h-screen'>
            <div className='capitalize flex flex-col items-center bg-slate-900 w-full p-9'>
                <p className='text-xl'>{header}</p>
                <h2 className='flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl gap-4'>
                    {title.map((word, index) => {
                        if (index % 2) {
                            return (
                                <span className='text-blue-400'>{word}</span>
                            )
                        }
                        return (
                            <div>{word}</div>
                        )
                    })}
                </h2>
            </div>
            <div className='flex flex-col gap-10 p-4 mt-8'>{children}</div>
        </section>
    )
}
