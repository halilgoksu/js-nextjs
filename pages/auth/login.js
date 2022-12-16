import { FcGoogle } from "react-icons/fc";
import { singInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { userRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = userRouter();
  const [user, loading] = useAuthState(auth);
  //Sign With Google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await singInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return;
  <div className="shadow-x1 mt-32 p-10 text-gray-700 rounded-lg">
    <h2 clasName="text-2xl font-medium">Join Today</h2>
    <div className="py-4">
      <h3 className="py-4">Sing in with one of the provider</h3>
      <button
        onClic={GoogleLogin}
        className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2"
      >
        <FcGoogle className="text-2xl"></FcGoogle>
        Sign in with Google
      </button>
    </div>
  </div>;
}
