export type ProjectElementProp = {
    name: string
    img: string,
    alt: string
}

export const ProjectElement = ({name, img, alt}: ProjectElementProp) => {
    return(
        <>
            <img src={img} alt={alt} />
            <h2>{name}</h2>
        </>
    )
}
