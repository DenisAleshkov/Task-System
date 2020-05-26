import firebase from 'firebase/app'

export default {
	actions: {
		async createRecord({dispatch, commit}, record) {
			try{
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/categories/${record.categoryId}/records`).push(record)
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async fetchRecord({dispatch, commit}) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
				return 
			}catch(e){}
		}
	}
}