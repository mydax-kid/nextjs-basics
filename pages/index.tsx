import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name= 'keywords' content= 'ninjas' />
      </Head>
      <div>
        <h1 className= {styles.title}>Homepage</h1>
        <p className= {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        <Link href= '/ninjas'>
          <a className= {styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

export default Home;
