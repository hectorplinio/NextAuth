import Layout from "../components/layout";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../components/header.module.css";


export default function Page() {
  const { data: session, status } = useSession();
  

  return (
    <Layout>
      <h1>Your Client profile</h1>
      {!session && (
        <>
          <span>
            You are not signed in, can you signed with Google, Facebook or
            GitHub.
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
          {session.user.image && (
            <span style={{ backgroundImage: `url('${session.user.image}')` }} />
          )}
          <span>
            <br /><h2>Your email:</h2>
            <p>{session.user.email}</p>
            <h2>Your name:</h2>
            <p>{session.user.name}</p>
            <span style={{ backgroundImage: `url('${session.user.image}')` }}className={styles.avatar2} />
            <h2>Token time validation</h2>
            <p>{session.expires}</p>
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
  );
}
