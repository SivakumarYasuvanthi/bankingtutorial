import React from 'react'

import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
const TotalBalanceBox = ({
    account = [], totalBanks, totalCurrentBalance
}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
    <div className='total-balance-chart'>
   <DoughnutChart accounts   ={account} />   
    </div>
    <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
            Bank accounts : {totalBanks}
        </h2>
        <div className='flex flex-name'>
            <p>
                Total Current Balance
            </p>
<div className='total-balance-amount flex-centre-gap-2'>
           <AnimatedCounter amount = {totalCurrentBalance}/>
    
</div>
        </div>
    </div>
 </section> )
}

export default TotalBalanceBox
