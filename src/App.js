import React, {Component} from 'react'

import logo from './logo.svg'
import './App.css'
import page1 from './data/ads.page-1'
import Ad from './Ad'
import ToolBar from './ToolBar'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ads: props.ads
    }

    this.onCategoryChange = this.onCategoryChange.bind(this)
  }

  onCategoryChange(e) {
    const category = e.target.value
    const ads = (category === '')
      ? this.props.ads
      : this.props.ads.filter(ad => ad.category_urlified === category)

    this.setState({ads})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo center-v" alt="logo" />
        </header>
        <ToolBar
          onCategoryChange={this.onCategoryChange}
        />
        <ul className="gallery">
          {this.state.ads.map(ad => (
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

App.defaultProps = {
  ads: page1.ads
}

export default App
