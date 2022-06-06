import React, { useState, useEffect } from 'react'
export default function Posts() {

  const Home = () => {
    const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [users, setUsers] = useState([]);
        useEffect(() => {
            fetch("https://fe-assignment.vaimo.net/")
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setUsers(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
          }, [])
    if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {users.map(shipcard => (
                    <li key={shipcard.title}>
                        {shipcard.shipping_info} 
                        {}
                    </li>
                    ))}
                </ul>
            );
        }
      }
    }