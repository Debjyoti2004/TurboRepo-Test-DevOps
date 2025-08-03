import styles from "./page.module.css";
import client from "@repo/db/client"

export default async function Home() {
  try {
    const user = await client.user.findFirst({
      select: {
        Name: true,
        UserName: true,
      }
    });

    if (!user) {
      return <div className={styles.empty}>No user found.</div>;
    }

    return (
      <div className={styles.container}>
        <h2>{user.Name}</h2>
        <p>Username: {user.UserName}</p>
      </div>
    );
  } catch (error) {
    console.error("[DB_ERROR]", error);
    return <div className={styles.error}>Error loading user</div>;
  }
}
