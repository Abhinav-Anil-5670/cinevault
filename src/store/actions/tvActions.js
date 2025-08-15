export {removetv} from '../reducers/tvSlice'
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async(dispatch,getState)=>{
    try{
        const detail = await axios.get(`/tv/${id}`)
        const externalid = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const videos = await axios.get(`/tv/${id}/videos`)
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`)
        const translations = await axios.get(`/tv/${id}/translations`)


        let getdata = {
            detail : detail.data,
            externalid : externalid.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data,
            watchprovider : watchprovider.data.results.IN,
            translations : translations.data.translations.map(m=>m.english_name)

        }
        dispatch(loadtv(getdata))

    }
    catch(error){
        console.log(error)
    }
}