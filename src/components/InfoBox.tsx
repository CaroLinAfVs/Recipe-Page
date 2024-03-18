interface Props {
  title: string;
  totalTime:number;
  preparationTime:number;
  cookingTime:number;
}

function InfoBox(props: Props) {
  return (
    <div className="my-4 text-sm bg-pink-100 rounded-md p-3">
      <span className="font-bold text-base pb-4 text-fuchsia-800">
        {props.title}
      </span>
      <ul className="list-disc	mt-2 list-inside text-sm marker:text-orange-800">
        <li className="mb-2">
          <span className="font-bold">Total</span>: Aproximately {props.totalTime} minutes
        </li>
        <li className="mb-2">
          <span className="font-bold">Preparation</span>: {props.preparationTime} minutes
        </li>
        <li className="mb-2">
          <span className="font-bold">Cooking</span>: {props.cookingTime} minutes
        </li>
      </ul>
    </div>
  );
}
export default InfoBox;
