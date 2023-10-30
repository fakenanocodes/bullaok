import React from 'react'
import Layout from '../components/Layout'
import Header from './ETF/Header'
import WhyInvest from './ETF/WhyInvest'
import OpenAccount from './ETF/OpenAccount'
import Stocks from './ETF/Stocks'
import Trading from './ETF/Trading'

export default function ETF() {
  return (
    <Layout>
        <Header />
        <WhyInvest />
        <OpenAccount />
        <Stocks />
        <Trading />


    </Layout>
  )
}
