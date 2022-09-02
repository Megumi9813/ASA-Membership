import React from 'react'
import Auth from '../components/auth'
import Profile from '../components/Profile'
import { useUserContext } from "../contexts/userContext";

function Account() {
    const { loading, error } = useUserContext();
  return (
    <div className="Account">
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <Profile />}
    </div>
  );
}

export default Account