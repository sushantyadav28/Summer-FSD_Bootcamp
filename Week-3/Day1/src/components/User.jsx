import {useState} from "react";
export default function User(){
    const [user, setUser] = useState([]);
    const url ="https://jsonplaceholder.typicode.com/users";

    const getData = ()=> {
        return fetch(url).then((res) => res.json());
    };

    const fetchAndGetUser = async () => {
        try{
            const data = await getData();
            setUser(data); //Update Function

            console.log(user);
        }catch(error){
            console.log(error);
        }
    };
    return(
        <div>
            <h1>Welcome to my page</h1>
            <button onClick = {fetchAndGetUser}>Fetch Detail</button>
            <hr />
            {user.map((el) => (
                <div>
                    <h1>Name: {el.name}</h1>
                    <h2>Email: {el.email}</h2>
                    <h3>UserId: {el.id}</h3>
                    <p>Website: {el.website}</p>
                    <button>More Info</button>
                </div>
            ))}
        </div>
    );
}