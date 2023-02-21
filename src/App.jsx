import { useState } from "react";
import { data } from "./data";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold">Customer Contact List</h1>
      <input
        className="w-96 m-5 px-4 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex items-center justify-center">
        <table class="table-auto border-separate border-spacing-2 border border-slate-400">
          <thead>
            <tr>
              <th className="border border-green-600 bg-green-200 text-center text-gray-800 px-4 py-2 uppercase tracking-wider">
                First Name
              </th>
              <th className="border border-green-600 bg-green-200 text-center text-gray-800 px-4 py-2 uppercase tracking-wider">
                Last Name
              </th>
              <th className="border border-green-600 bg-green-200 text-center text-gray-800 px-4 py-2 uppercase tracking-wider">
                E-mail
              </th>
              <th className="border border-green-600 bg-green-200 text-center text-gray-800 px-4 py-2 uppercase tracking-wider">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((people) => {
                return search.toLowerCase() === ""
                  ? people
                  : people.first_name.toLowerCase().includes(search);
              })
              .map((people) => (
                <tr key={people.id}>
                  <td className="border border-green-600 bg-gray-100 text-center text-gray-800 px-4 py-2">
                    {people.first_name}
                  </td>
                  <td className="border border-green-600 bg-gray-100 text-center text-gray-800 px-4 py-2">
                    {people.last_name}
                  </td>
                  <td className="border border-green-600 bg-gray-100 text-center text-gray-800 px-4 py-2">
                    {people.email}
                  </td>
                  <td className="border border-green-600 bg-gray-100 text-center text-gray-800 px-4 py-2">
                    {people.phone}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
