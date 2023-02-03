import { Card, Button } from "react-daisyui"

export type ProjectElementProp = {
    name: string
    img: string,
    alt: string,
    text: string,
    githubLink: string
}

export const ProjectElement = ({name, img, alt, text, githubLink}: ProjectElementProp) => {
    return(
        <Card >
          <Card.Image
            src={img}
            alt={alt}
          />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2">{name}</Card.Title>
            <p>{text}</p>
            <Card.Actions className="justify-end">
              <Button color="primary" href={githubLink}>Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      )
    
}

