import { Card, Button } from "react-daisyui";

export type ProjectElementProp = {
  name: string;
  img: string;
  alt: string;
  text: string;
  githubLink: string;
};

export const ProjectElement = ({
  name,
  img,
  alt,
  text,
  githubLink,
}: ProjectElementProp) => {
  return (
    <Card className="p-0 md:p-8">
      <Card.Image className="w-100" src={img} alt={alt} />
      <Card.Body className="items-center text-center p-0">
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{text}</p>
        <Card.Actions className="mt-2 mb-2 text-lg flex justify-evenly w-full">
          <a href="" className="">Live Preview</a>
          <a href={githubLink}>
            <i className="devicon-github-original"></i>
          </a>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
