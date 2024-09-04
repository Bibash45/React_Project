import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(!isLoading);
  //   }, [3000]);
  // }, [setIsLoading]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if(!res.ok){
          setIsError(true)
          setIsLoading(false)
          return
        }
        const user = await res.json();
        setUser(user)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if(isError){
    return <h2>Something went wrong</h2>
  }
 const {avatar_url,name,company,bio} = user;
  return <div>
    <h2>Fetch Data </h2>
    <img src={avatar_url} alt={name} style={{width:'150px', borderRadius:'25px'}} />
    <h2>{name}</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
