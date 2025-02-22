import { getAuth, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from './Firebase'
import { useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const Welcome = () => {
    const db = getFirestore(app)
    const auth = getAuth(app);
    const [user_details, setDetails] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Create auth state listener
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    // Get user document from Firestore
                    const userDocRef = doc(db, 'user_info', user.uid);
                    const userDocSnap = await getDoc(userDocRef);
                    
                    if (userDocSnap.exists()) {
                        setDetails(userDocSnap.data());
                        console.log(userDocSnap.data())
                    } else {
                        console.log("No user document found!");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    }
                }
            });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handelOnClick = () => {
        try {
            signOut(auth);
            alert("Signout Completed")
            navigate("/")
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='flex h-[100vh] items-center justify-center'>
            {user_details ? (
                <div>
                    {/* Display first name here */}
                    <p className='font-bold text-2xl'>Welcome {user_details.first_name}</p>
                    <br />
                    <button onClick={handelOnClick}
                        className='px-4 py-2 bg-blue-700 text-white rounded-2xl hover:cursor-pointer hover:bg-blue-600'>
                        Sign out?
                    </button>
                </div>
            ) : (
                <p className='px-10 py-6 bg-gray-300 shadow-2xl rounded-2xl'>Loading...</p>
            )}
        </div>
    )
}

export default Welcome