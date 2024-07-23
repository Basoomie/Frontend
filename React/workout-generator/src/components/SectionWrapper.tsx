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
        <div>{children}</div>
    )
}
