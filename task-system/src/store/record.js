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
		async createDesignStartRecord({dispatch, commit}, record) {
			try{
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/categories/design/categories/${record.categoryId}/record/start/${record.id}`).set(record)
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async createDesignProcessRecord({dispatch, commit}, record) {
			try{
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/categories/design/categories/${record.categoryId}/record/process/${record.id}`).set(record)
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async createDesignDoneRecord({dispatch, commit}, record) {
			try{
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/categories/design/categories/${id}/record/done`).set({})
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
		async fetchDesignStartRecordsById({dispatch, commit}, id) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories/design/categories/${id}/record/start`).once('value')).val() || {}
				return Object.keys(records).map(key => ({...records[key], id:key }))
			}catch(e){}
		},
		async fetchProgrammingStartRecordsById({dispatch, commit}, id) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories/programming/categories/${id}/record/start`).once('value')).val() || {}
				return Object.keys(records).map(key => ({...records[key], id:key }))
			}catch(e){}
		},
		async fetchDesignProcessRecordsById({dispatch, commit}, id) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories/design/categories/${id}/record/process`).once('value')).val() || {}
				return Object.keys(records).map(key => ({...records[key], id:key }))
			}catch(e){}
		},
		async fetchDesignDoneRecordsById({dispatch, commit}, id) {
			try{
				const uid = await dispatch('getUid')
				const records = (await firebase.database().ref(`/users/${uid}/categories/design/categories/${id}/record/done`).once('value')).val() || {}
				return Object.keys(records).map(key => ({...records[key], id:key }))
			}catch(e){}
		},
		//delete
		async deleteStartRecordsWithDrag({commit,dispatch}, record){
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories/design/categories/${record.categoryId}/record/start/`).child(record.id).remove()
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
		async deleteProcessRecordsWithDrag({commit,dispatch}, record){
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories/design/categories/${record.categoryId}/record/process/`).child(record.id).remove()
			}catch(e){
				commit('setError', e)
				throw e
			}
		},
	}
}