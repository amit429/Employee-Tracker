import React from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'

export default function Dashboard() {
  return (
    <>
        <Navbar title = "Employee Tracker Dashboard"/>
        <Table/>
    </>
  )
}
