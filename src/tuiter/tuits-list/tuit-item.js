import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../tuit-stats";
// import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" alt={tuit.alt} height={53} width={53} src={tuit.image}/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div><b>{tuit.username}</b> <img alt={tuit.alt} src="https://cdn-icons-png.flaticon.com/512/6785/6785425.png" width="15px" height="15px"/> {tuit.handle} - {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats
                        key={tuit._id} tuit = {tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;