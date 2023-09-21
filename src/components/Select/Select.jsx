import './style.css';

function Select({ options, selectTitle }) {
  return (
    <div className="select-item-group">
      <span className="select-title">{selectTitle}</span>
      <select id="Select" className="select-item">
        {options.map((el) => {
          return (
            <option value={el} key={el}>
              {el.toString().toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export { Select };
