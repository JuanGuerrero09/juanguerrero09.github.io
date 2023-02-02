import { ProjectElement, ProjectElementProp } from "./ProjectsElement"

const exampleEl:ProjectElementProp = {
    name: 'Etch a sketch',
    img: '/img/etch-a-sketch.jpg',
    alt: 'An Etch a sketch game with plain javascript'
}

export default function Projects() {
    return (
        <>
            <h1>Here are some of my projects</h1>
            <ProjectElement
            {...exampleEl}></ProjectElement>
        </>
    )
}