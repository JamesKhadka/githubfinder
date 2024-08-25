import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Tabs from '../component/Tabs';
import Repo from '../component/Repo';
import Events from '../component/Events';
import UsersContainer from '../component/UsersContainer';
import Loading from '../component/Loading'


const UserInfo = () => {
  const [user, setUser] = useState([]);

  const [type, setType] = useState("repos");

  const [infos, setInfos] = useState([]);

  const [loading, setLoading] = useState(null);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  let BaseUrl = "https://api.github.com/users";

  // fetching user infos
  const GetuserInfo = async () => {
    setLoading(true);
    const res = await fetch(BaseUrl + pathname);
    const data = await res.json();
    setUser(() => [data]);
    setLoading(null);
  }


  const GetUrls = async () => {
    setUser([]);
    setLoading(true);
    const res = await fetch(BaseUrl + pathname + `/${type}`);
    const data = await res.json()
    setInfos(data);
    setLoading(null);
  }


  useEffect(() => {
    GetuserInfo();
    GetUrls();
  }, [pathname, type])



  return (
    <div className="py-5" >
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200"> BACK

      </button>
      {user && user?.map((unifo, i) => (
        <div key={i} className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10">
          <img src={unifo.avatar_url} className="w-[350px] border-4 border-teal-400 rounded-full md:mx-0 mx-auto" />
          <div className="text-lg px-3 leading-10">
            <h1 className="text-3xl pb-4">{unifo?.name}</h1>
            <h1>
              <span className="text-teal-400"> Login name </span> :{""}  {unifo?.login}
            </h1>
            <h1>
              <span className="text-teal-400"> Followers</span> :  {unifo?.followers}
            </h1>
            <h1>
              <span className="text-teal-400"> Following</span> :  {unifo?.following}
            </h1>
            <h1>
              <span className="text-teal-400"> Public Repositories</span> :  {unifo?.public_repos}
            </h1>
            <h1>
              <span className="text-teal-400">Joined On</span> : {new Date(unifo?.created_at).toLocaleDateString()}
            </h1>
            <a className="text-gray-200 font-bold rounded-full crusor-pointer px-4 py-1 bg-teal-600 my-3 tracking-wide" href={unifo?.html_url} target="_blank">VISIT GITHUB PAGE</a>
          </div>

        </div>
      ))}

      <div className="flex border-b pb-4 gap-20 mt-[5%] mb-6 justify-center md:text-xl">
        <Tabs type={type} setType={setType} />
      </div>
      {loading && <Loading />}

      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {infos && <Repo repos={infos} />}
        </div>
      )}

      {type === "received_events" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {infos && <Events events={infos} />}
        </div>
      )}

      {type === "followers" && (
        <div>
          <UsersContainer users={infos} />
        </div>
      )}

    </div>
  )
}

export default UserInfo
