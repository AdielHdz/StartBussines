"use client";
import { useSelector, useDispatch } from "react-redux";
import { filterByAge } from "../../Redux/Fetching/UsersSlice/UserSlice";

const UserProof = () => {
  const users = useSelector((state) => state.user.usersFilter);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <div>
         <button className="bg-red-400 text-white border border-pink-700  px-10 py-3 w-full" onClick={() => dispatch(filterByAge())}>Filtrar</button>
      {users.map((user) => {
        return (

          <div>
            <img src={user.avatar} alt="" />
            <h3>{user.name}</h3>
           
          </div>
        );
      })}
    </div>
  );
};

export default UserProof;
