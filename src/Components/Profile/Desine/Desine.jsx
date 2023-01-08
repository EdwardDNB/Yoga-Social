import s from './Desine.module.css'
import Hand_NotOkImg from '../../Asets/Hand_NotOk.png'
import Hand_OkImg from '../../Asets/Hand_Ok.png'
import PhotoDefault from "../../Users/userFoto.webp";
import Status from "./Status";


const Desine = (props) => {
    return <div>
        <div>
            <img src='https://www.lifegate.com/app/uploads/mare-fa-bene-2.jpg'/>
        </div>
        <div className={s.profile}>
            <div><img src={!props.userProfile.photos.large ? PhotoDefault : props.userProfile.photos.large}/></div>
           <Status status='Hello'/>
            <div className={s.properties}>
                <h3>Contacts</h3>
                <ul>
                    <li>github: <a target="_blank"  href={props.userProfile.contacts.github}>{props.userProfile.contacts.github}</a> </li>
                    <li>vk: <a target="_blank"  href={props.userProfile.contacts.vk}>{props.userProfile.contacts.vk}</a></li>
                    <li>facebook: <a target="_blank"  href={props.userProfile.contacts.facebook}>{props.userProfile.contacts.facebook}</a></li>
                    <li>instagram: <a target="_blank"  href={props.userProfile.contacts.instagram}>{props.userProfile.contacts.instagram}</a></li>
                    <li>twitter: <a target="_blank"  href={props.userProfile.contacts.twitter}>{props.userProfile.contacts.twitter}</a></li>
                    <li>website: <a target="_blank"  href={props.userProfile.contacts.website}>{props.userProfile.contacts.website}</a></li>
                    <li>youtube: <a target="_blank"  href={props.userProfile.contacts.youtube}>{props.userProfile.contacts.youtube}</a></li>
                    <li>mainLink: <a target="_blank"  href={props.userProfile.contacts.mainLink}>{props.userProfile.contacts.mainLink}</a></li>
                </ul>
            </div>
            <div className={s.job}>
                <h4>Looking for a job</h4>
                 {props.userProfile.lookingForAJob ? <div><img src={Hand_OkImg} alt=" "/>
                 <div>{props.userProfile.lookingForAJobDescription}</div>
                 </div> :  <img src={Hand_NotOkImg} alt={''}/>}
            </div>
        </div>
    </div>
}
export default Desine