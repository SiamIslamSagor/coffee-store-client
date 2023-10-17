import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        // to delete data when user clicked the conform btn
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // remove the user form the UI by using filter
              const remaining = users.filter(user => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2>Users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI no.</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
              <th>Last Log In</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user.email ? user.email : "N/A"}</td>
                <td>{user.createdAt ? user.createdAt : "N/A"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-circle btn-accent text-white font-black"
                  >
                    X
                  </button>
                </td>
                <td>{user.lastLoggedAt ? user.lastLoggedAt : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
