import api from '../../api/imgur';
import {router} from '../../main';

const state ={
  images :[]
}

const getters ={
  allImages(state){
      return state.images
  }
}

const actions ={
  async fetchImages({rootState, commit}){
    const {token} = rootState.auth;
     const response = await api.fetchImages(token);
     console.log(response);
     commit('setImages',response.data.data);
   },
   async uploadImages({rootState},images){
    const {token} = rootState.auth;
    const response = await api.uploadImages(images, token);
     router.push('/imageGallery');
     console.log(response);
   }
}

const mutations ={
  setImages(state,images){
      state.images = images;
  }
}


export default{
    mutations,
    getters,
    state,
    actions,
};