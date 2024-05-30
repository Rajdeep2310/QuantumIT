import { useEffect , useState } from "react";
import { getAllUsers } from "../Apis/Auth";


const AllUsers = () => {
    const [users, setUsers] = useState([]);

    console.log(users)
    useEffect(() => {
        const fetchUsers = async() => {
            const response = await getAllUsers();
            setUsers(response);
        }
        fetchUsers();
    },[])


    return(
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.dateOfBirth}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default AllUsers;