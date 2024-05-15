export default function CoreConcept({image, title, description}) { // (props) => {props.image} {props.title} {props.description}
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }