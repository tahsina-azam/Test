import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host:process.env.DATABASE_HOST,
    port: 3306,
    database:process.env.DATABASE,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
  },
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

