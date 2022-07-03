import Link from 'next/link'
import axios from 'axios'
function Home() {
   const handleSubmit=()=>{
      let data={
         id: 1234,
         name:"toufiq",
         registration:"2018331076"
      }
     axios.post("/api/practice/dummy",data).then((response)=>{
      console.log(response);
     }).catch((error)=>{
      console.log(error);
     })
   }
   return (
      <>
         <h1>Next JS pre-rendering</h1>
         <Link href='/user'>
            <a>Users</a>
         </Link>
         <Link href='/posts'>
            <a>Posts</a>
         </Link>
         <button onClick={handleSubmit}>click me</button>
      </>
   )
}

export default Home