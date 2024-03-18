interface Item {
  value: string;
  label: string;
}

interface Props {
  data: Item[];
}

function Table(props: Props) {
  return (
    <ul className="grid divide-y">
      {props.data.map((item, index) => (
        <li className="py-2 flex justify-between px-8 ">
          <span className="text-sm ">{item.label}</span>
          <span className=" text-sm text-orange-800 font-bold ">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
export default Table;
