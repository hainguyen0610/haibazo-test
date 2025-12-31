import "./Node.css";

type Props = {
  name: string;
  items: Props[];
};

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};

const Node = ({ name, items }: Props) => {
  return (
    <div className="node-container">
      <div style={{ color: getRandomColor() }}>{name}</div>
      <div>
        {items.map((item, index) => (
          <Node key={index} name={item.name} items={item.items} />
        ))}
      </div>
    </div>
  );
};

export default Node;
