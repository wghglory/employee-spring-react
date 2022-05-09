import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Employee} from '../models/Employee';
import {deleteEmployee, getEmployees} from '../services/employeeService';
import EmployeeItem from './EmployeeItem';

export default function EmployeeList() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<Employee[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const del = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();

    deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement?.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate('/add-employee')}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees &&
                employees.map((employee: Employee) => (
                  <EmployeeItem employee={employee} deleteEmployee={del} key={employee.id}></EmployeeItem>
                ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
