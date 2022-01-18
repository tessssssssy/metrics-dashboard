import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Orders from '../components/Orders'
import Header from '../components/Header'
import Chart from '../components/Chart'

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Metrics Dashboard</title>
        <meta name="description" content="A dashboard of order totals for Getter" />
      </Head>
      <div className="w-4/5 mx-auto my-20">
        <Header/>
        <Orders orders={data.orders}/>
        <Chart revenueThisWeek={data.revenueThisWeek} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/data`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
