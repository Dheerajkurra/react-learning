import { Routes, Route, Link } from "react-router";
import { useEffect, useState } from "react"

function Api() {

  let [posts, setPosts] = useState([])

  let [loading, setLoading] = useState(true)

  let [error, setError] = useState("")

  let [userId, setUserId] = useState(1)

  useEffect(() => {

    async function getPosts() {

      try {
        let Response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        if (!Response.ok) {
          throw new error("Data not found")
        }

        let Data = await Response.json()
        setPosts(Data)

      }
      catch(err){
        setError(err.message)
      }
      finally {
        setLoading(false)
      }
    }

    console.log(posts)
    getPosts()
  }, [userId])

  if (loading) {
      return <p>Data is loading....</p>
   }
   if(error){
    return <p>{error}</p>
   }
  return (
    <>
    <input value={userId} onChange={(e) => setUserId(e.target.value)}/>
      {
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default Api