import React from "react";
import TuitItem from "./tuit-item"
// import tuit from "../tuits/tuits.json"
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    // const tuitArray = tuit
    return(
        <ul className="list-group">
            {
                tuitArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitList;