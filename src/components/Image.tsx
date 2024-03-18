interface Props {
  src: string;
}

function Image(props:Props) {
  return <img className="md:rounded-2xl overflow-hidden" src={props.src} alt="omelette"/>
}
export default Image