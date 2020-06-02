import firebase from 'firebase/app'

export default {
	actions: {
		async createDesignRecord({dispatch, commit}, record) {
			try{
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/categories/design/categories/${record.categoryId}/record/start`).push(record)
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async createProgrammingRecord({dispatch, commit}, record) {
			try{
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/categories/programming/categories/${record.categoryId}/record/start`).push(record)
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async fetchRecords({dispatch, commit}, id) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
				return Object.keys(records).map(key => ({...records[key], id:key }))
			}catch(e){}
		},
		async fetchDesignRecordsById({dispatch, commit}, id) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories/design/categories/${id}/record/start`).once('value')).val() || {}
				return Object.keys(records).map(key => ({...records[key], id:key }))
			}catch(e){}
		}
	}
}