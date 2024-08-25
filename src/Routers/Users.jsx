import React, { useEffect, useRef, useState } from 'react'
import UsersContainer from '../component/UsersContainer';
import Loading from '../component/Loading';

const Users = () => {
  const [users, setUsers] = useState([]);

  const [Searching, setSearching] = useState(false);

  const [loading, setLoading] = useState(null);

  let BaseUrl = "https://api.github.com/users"

  const user = useRef('')

  //fetching url of all users
  async function allUsers() {
    if (user.current.value === "") {
      setLoading(true);
      const res = await fetch(BaseUrl);
      const data = await res.json();
      setUsers(data);
      setLoading(null);

    }
  }

  const handleSubmit = async () => {
    setLoading(true);

    setSearching(true);

    if (user.current.value !== '') {
      try {
        const res = await fetch(BaseUrl + "/" + user.current.value);
        const data = await res.json();
        setUsers(() => [data]);
        user.current.value = "";
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      allUsers(); // Assuming this function fetches all users
    }
    setLoading(null);

    setSearching(false);
  }

  useEffect(() => {
    allUsers();
  }, [setUsers])

  return (
    <div>
      <div className="flex justify-center items-center h-11 my-5">

        <input type="text" placeholder="Search Github Users.." className="h-full md-w-1/3 w-2/3 text-gray-800 px-2 font-semibold  border-4 border-teal-400 outline-none rounded-full " ref={user} />

        <button onClick={handleSubmit} className="bg-teal-500 font-bold px-4 h-full rounded-full border-2">
          {Searching ? 'Searching...' : 'search'}
        </button>
      </div>
      {loading ? <Loading /> : <UsersContainer users={users} />}
    </div>
  )
}

export default Users
