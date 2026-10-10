import { use } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

const [showMore , setShowMore] = useState(false)
  
   const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quae architecto voluptatum ipsum necessitatibus adipisci! Debitis, impedit! Quod repellendus laboriosam consequatur adipisci dolorum soluta perspiciatis quo quas expedita debitis minus, voluptas in doloremque aspernatur quasi maxime eos corporis ea commodi porro quaerat veniam. Delectus voluptate nesciunt id, possimus doloribus placeat fuga, fugiat odio provident obcaecati aperiam, optio excepturi beatae"

  return (
    <>
    <div>
    <p>
  {showMore ? text : `${text.slice(0, 20)}...`}
</p>
     {/* <button onClick={() => setShowMore(true)}>showMore</button>
     <button onClick={() => setShowMore(false)}>showLess</button> */}
     {
      showMore == true ? (<button onClick={() => setShowMore(false)}>showLess</button>) : (<button onClick={() => setShowMore(true)}>showMore</button>)
     }
    </div>

    </>
  )
}

export default App
