import items from "../data/items";

interface Props {
  onSelect: (category: string) => void;
}

const Filter = ({ onSelect }: Props) => {
  return (
    <div className="input-group mb-3">
      <select
        className="form-select "
        id="inputGroupSelect02"
        onChange={(e) => onSelect(e.target.value)}
      >
        {items.map((item) => (
          <option key={item.category} value={item.value}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
