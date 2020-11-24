const Slot = ({ type }) => {
  const colors = [
    '#ffff07',
    '#ffffff',
    '#cdcdcd',
    '#85db85'
  ];
  return (
    <div className="slot" style={{ backgroundColor: colors[type--] }}>

    </div>
  )
}

export default Slot;
