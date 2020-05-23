import firebase from 'firebase/app'

export default {
	actions: {
		async fetchCategories({commit, dispatch}){
			try{
				const uid = await dispatch('getUid')
				const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
				cats =[]
				Object.keys(categories).forEach(key => {
					cats.push({
						title: categories[key].title,
						description: categories[key].description,
						id: key
					})
				})
				return cats
			}catch(e){

			}
		},
		async createCategory({commit, dispatch}, {title, description}){
			try{
				const uid = await dispatch('getUid')
				const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, description})
				return {title, description, id: category.key}
			}catch(e){
				commit('setError', e)
				throw e
			}
		}
	}
}