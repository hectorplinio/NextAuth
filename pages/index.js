import Layout from '../components/layout'
import { signIn, signOut, useSession } from "next-auth/react";
import { data } from 'autoprefixer';



export default function Page () {
  const { data: session, status } = useSession();
  console.log(status);


  return (
    <Layout>
      {!session && (
            <>
              <span >
                You are not signed in, please sign in and you can use all navigation options 
              </span>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
        {session && (
            <>
              <span >
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
    </Layout>
  )
}