import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

  const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="text-center">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :</h2>
      <p>Going back to the <Link href="/"><a className='decoration-solid text-cyan-500'>Homepage</a></Link> is 3 seconds...</p>
    </div>
  );
}
 
export default NotFound;