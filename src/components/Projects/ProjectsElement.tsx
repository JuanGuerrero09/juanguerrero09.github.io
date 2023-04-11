import { Card, Button, ButtonGroup } from "react-daisyui";

export type ProjectElementProp = {
  name: string;
  img: string;
  alt: string;
  text: string;
  githubLink: string;
  livePreviewLink?: string;
};

export const ProjectElement = ({
  name,
  img,
  alt,
  text,
  githubLink,
  livePreviewLink,
}: ProjectElementProp) => {
  return (
    <Card className="p-0 md:p-8">
      <Card.Image className="w-100" src={img} alt={alt} />
      <Card.Body className="items-center text-center p-0">
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{text}</p>
        <Card.Actions className="mt-2 mb-2 text-lg flex justify-evenly w-full">
          <ButtonGroup>
            {livePreviewLink ? (
              <Button>
                <a href={`${livePreviewLink}`} className="">
                  Live Preview
                </a>
              </Button>
            ) : <Button > {`Check the code ->`} </Button>}
            <Button>
              <a className=" w-28" href={githubLink}>
                <i className="devicon-github-original"></i>
              </a>
            </Button>
          </ButtonGroup>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
