import firebase from 'firebase/app'
export default {
	actions: {
		async login({dispatch, commit}, {email, password}) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
			}
			catch(e) {
				commit('setError', e)
				throw e
			}
		},
		async logout({commit}){
			await firebase.auth().signOut()
			commit('clearInfo')
		},
		async register({ dispatch, commit }, { email, password, name, countTasks, design, programming, title,task  }){
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password)
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/info`).set({
					name
				})
				await firebase.database().ref(`/users/${uid}/categories`).set({
					design:{
						title: 'Дизайн'
					} ,
					programming:{
						title: 'Программирование'
					} 
				})
			}
			catch(e) {
				commit('setError', e)
				throw e
			}
		},
		getUid() {
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		},
		async updateName({ dispatch, commit }, {name}) {
			try{
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/info`).update({name})
			}catch(e) {
				commit('setError', e)
				throw e
			}
		}
	}
}