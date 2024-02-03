import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth'
import {  useDispatch } from 'react-redux'
import { app } from '../firebase'
import { signInSuccess } from '../redux/user/userSlice'
export default function OAuth() {
    const dispatch=useDispatch();
    const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider()
            const auth=getAuth(app);
            const result=await signInWithPopup(auth,provider)
            const res=await fetch('/api/auth/google',{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                })
            })
            const data=await res.json
            dispatch(signInSuccess(data))
        } catch (error) {
            console.log("Could not login with google",error);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>continue with google</button>
  )
}
