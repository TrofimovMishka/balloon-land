import AdvertisementBox from './components/box/AdvertisementBox'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <div className='body'>

        <Header />
        <div className='content-box'>
          <AdvertisementBox />
          {/* <AdvertisementBox />
          <AdvertisementBox /> */}
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App
