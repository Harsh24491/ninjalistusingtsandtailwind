import Link from 'next/link'


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}


const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a  className="py-2 px-4 bg-white block my-5 mx-3 border-white-900 border-l-2 hover:border-blue-900">
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;