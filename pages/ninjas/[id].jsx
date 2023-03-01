// import {useRouter} from 'next/router'

const SingleNinja = ({ ninja }) => {
  // const router = useRouter()
  // const {id} = router.query
  
  return (
    <div>
      <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  );
}

export default SingleNinja;

//getServerSideProps(): Will fetch data at the time of request.
//getStaticProps(): Will fetch data at build time.
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return {
    props: { ninja: data }
  }
}


export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}
