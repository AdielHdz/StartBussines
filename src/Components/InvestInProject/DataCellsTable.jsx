const DataCellsTable = ({ name, data, Icons, iconColor }) => {
  return (
    <tr className="border h-12">
      <th className="flex justify-between px-3 items-center h-12  border-r text-sm min-w-nameFirsCell">
        {name} {Icons && <Icons className={` ${iconColor} text-lg `} />}
      </th>
      <td className="text-center text-sm px-1 ">{data}</td>
    </tr>
  );
};

export default DataCellsTable;
