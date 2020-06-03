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
		async fetchDesignCategories({commit, dispatch}){
			try{
				const uid = await dispatch('getUid')
				const categories = (await firebase.database().ref(`/users/${uid}/categories/design/categories`).once('value')).val() || {}
				return Object.keys(categories).map(key => ({ ...categories[key],  id: key}) )
			}catch(e) {}
		},
		async fetchProgrammingCategories({commit, dispatch}){
			try{
				const uid = await dispatch('getUid')
				const categories = (await firebase.database().ref(`/users/${uid}/categories/programming/categories`).once('value')).val() || {}
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
		async deleteDesignCategories({commit,dispatch}, id){
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories/design/categories`).child(id).remove()
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async deleteProgrammingCategories({commit,dispatch}, id){
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories/programming/categories`).child(id).remove()
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
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