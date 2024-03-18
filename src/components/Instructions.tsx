interface Props {
  title: string;
  description: string;
}

function Instructions(props: Props) {
  return (
    <li className="mb-2">
      <span className="font-bold">{props.title}</span>: {props.description}
    </li>
  );
}
export default Instructions;
