import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
 

  return (
    <>
      <div className='w-full flex'>
        <Header/>
        <main>
          <Dashboard/>
        </main>
         
      </div>
     
      
    </>
  )
}

export default App
