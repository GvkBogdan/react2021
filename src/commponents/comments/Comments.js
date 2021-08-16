import {useEffect, useState} from "react";
import {getComments} from "../services/fetch.services";
import Coment from "../coment/Coment";
import './Comments.css'

export default function Comments() {

    let [coments, setComents] = useState([])
    let [details, setDetails] = useState(null)


    useEffect(() => {
        getComments().then(value => setComents([...value]))
    }, [])

    const comentInfo = (comDetails) => {
        setDetails(comDetails)

    }

    return (
        <div className={'header'}>

            <div className={'comments-box'}>
                {
                    coments.map(value => <Coment allComents={value} key={value.id} comentInfo={comentInfo}/>)
                }

            </div>

            {details && <div className={'posts-details'}>
                <h4>Body of coment: </h4><i>{details.body}</i>


            </div>}


        </div>
    );
}