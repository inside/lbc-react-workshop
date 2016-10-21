import React, {Component} from 'react'

import logo from './logo.svg'
import './App.css'
import page1 from './data/ads.page-1'
import Ad from './Ad'
import ToolBar from './ToolBar'
import {sortAsc, sortDesc} from './helpers'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ads: props.ads,
      sort: '',
    }

    this.onCategoryChange = this.onCategoryChange.bind(this)
    this.onPriceSortChange = this.onPriceSortChange.bind(this)
  }

  onCategoryChange(e) {
    const category = e.target.value
    let ads = (category === '')
      ? this.props.ads
      : this.props.ads.filter(ad => ad.category_urlified === category)
    ads = this.getSortedAds(ads, this.state.sort)
    this.setState({ads})
  }

  onPriceSortChange(e) {
    const sort = e.target.value
    const ads = this.getSortedAds(this.state.ads, sort)
    this.setState({sort, ads})
  }

  getSortedAds(ads, sort) {
    if (sort === '') {
      return ads
    }

    let sortFunc = (sort === 'asc')
      ? sortAsc
      : sortDesc

    return ads.sort(sortFunc)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo center-v" alt="logo" />
        </header>
        <ToolBar
          onCategoryChange={this.onCategoryChange}
          onPriceSortChange={this.onPriceSortChange}
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
