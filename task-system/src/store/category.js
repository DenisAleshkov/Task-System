import firebase from 'firebase/app'

export default {
	actions: {
		async fetchMainCategories({commit, dispatch}){
			try{
				const uid = await dispatch('getUid')
				const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
				return Object.keys(categories).map(key => ({ ...categories[key],  id: key}) )
			}catch(e) {}
		},
		async createChildCategory({commit, dispatch}, category) {
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories/${category.id}/categories`).push(category)
				// return {title, description, id: category.key}
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		// async createCategory({commit, dispatch}, {title, description}){
		// 	try{
		// 		const uid = await dispatch('getUid')
		// 		const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, description})
		// 		return {title, description, id: category.key}
		// 	}catch(e){
		// 		commit('setError', e)
		// 		throw e
		// 	}
		// },
		async updateCategory({commit, dispatch}, {id, title, description}) {
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories`).child(id).update({title, description})
			}catch(e){
				commit('setError', e)
				throw e
			}
		}	
	}
}