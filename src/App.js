import React from 'react'
import store from './store'
import {displayItem} from './api/products'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       products: {}
      }
    }
  componentWillMount(){
    this.unsubscribe = store.subscribe(()=>{
      const appState = store.getState()

      this.setState({
        products: appState.products
      })
    })
    displayItem()

  }
  componentWillUnmount(){
    this.unsubscribe
  }
  render() {
    return (
      <div>
        {this.state.products.map(item=>(
              <div key={'item' + item.listing_id}>
                  <img src={item.images[0].url_570xN} alt={item.title} />
              </div>
            ))}
      </div>
    )
  }
}

export default App
