import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10 bg-red-200">
      <Link href="/">
        <button className="text-lg font-medium bg-red-100">Creative Minds</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-sm bg-red-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        )}
        {/* us tiklarsan auth/login component ina gidersin  */}

        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-red-500 text-white py-2 px-4 rounded-mg textx-sm">
                Post
              </button>
            </Link>
            {/* linke tiklarsan post component ina gidersin  */}
            

            <Link href="/dashboard">
              <img
              
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
