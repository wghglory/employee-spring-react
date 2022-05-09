import {useNavigate} from 'react-router-dom';
import {Employee} from '../models/Employee';

export default function EmployeeItem({
  employee,
  deleteEmployee,
}: {
  employee: Employee;
  deleteEmployee: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  const navigate = useNavigate();

  const editEmployee = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigate(`/edit-employee/${id}`);
  };

  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.email}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
}
