import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';


function Home() {
  const loggedIn = { firstname: 'Raj'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type= "greeting"
          title= "Welcome"
          user= {loggedIn?.firstname || "Guest"}
          subtext= "Access and manage your account and translations efficiently."
          />
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1000}
          />
        </header>
      </div>
    </section>
  )
}

export default Home