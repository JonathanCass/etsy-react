import React from 'react'
import store from './store'
import {getData} from './api/products'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
       products: {}
      }
    }
  componentWillMount() {

    this.unsubscribe = store.subscribe(()=>{
      const appState = store.getState()
      this.setState({
        products: appState
      })
      getData()
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    console.log(store.getState())
    console.log(this.state)
    return (
      <div>
            {this.state.products.items.map(item=>(
              <div key={'item' + item.listing_id}>
                  <img src={item.images[0].url_570xN} alt={item.title} />
              </div>
            ))}
      </div>
    )
  }
}

export default App
