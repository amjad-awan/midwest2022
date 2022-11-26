import React from 'react'
import DashboardDetails from '../../components/dashboardDetails'
import Header from '../../components/dashboardHeader/Header';
import "./style.scss"
const Dashboard = () => {
		return (
				<div className='dashboard-wrapper'>
					<Header/>
					<DashboardDetails/>
				</div>
		)
}

export default Dashboard