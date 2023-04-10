import { useState } from "react";
import { getUser } from "../apis/form-api";

export default function ShowUser() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const onClickShow = async () => {
    try {
      if (users.length !== 0) {
        return setShow(!show);
      }
      const res = await getUser();
      setUsers(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="bg-white font-bold px-2 py-2 rounded-lg hover:bg-gray-200 duration-150" onClick={onClickShow}>Show all user</button>
      {show ? (
        <table className="table-fixed w-[700px] mt-4 mb-8 rounded-lg bg-white">
          <thead className="border-b">
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((el) => {
              return (
                <tr key={el.id}>
                  <td className="px-4">{el.firstName}</td>
                  <td className="px-4">{el.lastName}</td>
                  <td className="px-4">{el.email}</td>
                  <td className="px-4">{el.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
