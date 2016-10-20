import React, {Component} from 'react'

import logo from './logo.svg'
import './App.css'
import page1 from './data/ads.page-1'
import Ad from './Ad'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo center-v" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="gallery">
          {page1.ads.map(ad => (
            <Ad
              subject={ad.subject}
              images_thumbs={ad.images_thumbs}
              price={ad.price}
              key={ad.list_id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
