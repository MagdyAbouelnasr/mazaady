import { Table } from "@mantine/core";

const DataTable = ({ data }: any) => {
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <Table
      striped
      highlightOnHover
      className="my-4 border-collapse border border-gray-200 shadow-lg"
    >
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-4 font-semibold text-left">
            Key
          </th>
          <th className="border border-gray-300 p-4 font-semibold text-left">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {data.mainCategory && (
          <tr>
            <td className="border border-gray-300 p-2 text-left">
              Main Category
            </td>
            <td className="border border-gray-300 p-2 text-left">
              {data.mainCategory}
            </td>
          </tr>
        )}
        {data.subCategory && (
          <tr>
            <td className="border border-gray-300 p-2 text-left">
              Sub Category
            </td>
            <td className="border border-gray-300 p-2 text-left">
              {data.subCategory}
            </td>
          </tr>
        )}
        {data.properties.map((property: any, index: any) => (
          <tr key={index}>
            <td className="border border-gray-300 p-2 text-left">
              {property.name}
            </td>
            <td className="border border-gray-300 p-2 text-left">
              {property.value}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
