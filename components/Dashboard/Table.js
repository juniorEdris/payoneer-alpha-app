const Table = ({ data = [], handleDelete }) => {
  return (
    <div className="relative h-96 overflow-y-auto overflow-x-auto px-2">
      <table className="max-w-7xl text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map(({ id = "", title = "", price = "", category = "" }) => (
            <tr
              key={id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {title}
              </th>
              <td className="px-6 py-4">{category}</td>
              <td className="px-6 py-4">{price}</td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    className="py-1 px-3 rounded-md text-sm text-light bg-blue-500 hover:bg-opacity-80"
                    type="button"
                    onClick={() => {}}
                  >
                    Edit
                  </button>
                  <button
                    className="py-1 px-3 rounded-md text-sm text-light bg-red-700 hover:bg-opacity-80"
                    type="button"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
