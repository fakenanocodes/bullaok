import React from 'react'
import Layout from '../components/Layout'
import Header from './recurring-investment/Header'
import How from './recurring-investment/How'
import Investment from './recurring-investment/Investment'
export default function RecurringInvestments() {
  return (
    <Layout>
        <Header />
        <How />
        <Investment />
        
    </Layout>
  )
}
