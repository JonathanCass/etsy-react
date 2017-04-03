import store from '../store'

axios.get('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=invader_zim&includes=Images,Shop&callback=?').then(function(data){

})
	
	export function displayItem() {
		const products = data.results

		store.dispatch({
			type: 'DISPLAY_ITEM',
			products : data.results
		})
	}
