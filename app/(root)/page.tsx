import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "First", lastName: "last", email:"sivakumaryasuvanthiofficial@gmail.com" }
    return (
    <section className='home'>
        <div className='home-content'>
      <header className='home-header'>
   <HeaderBox
    type = "greeting"
    title ="Welcome"
    user = {loggedIn?.firstName || 'Guest'}
    subtext = "Access and Manage your account and transcations efficiently"
/>
<TotalBalanceBox
      accounts = {[]}
      totalBanks ={1}
      totalCurrentBalance= {1250.69}

      />
      </header>
      Recent Transactions
      </div>
      <RightSidebar 
      user ={loggedIn}
      transcations ={[]}
      banks ={[{currentBalance :123.30}, {currentBalance :23.30}]}
      />
    </section>
  )
}

export default Home;