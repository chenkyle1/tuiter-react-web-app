import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
const TuitItem = ({tuit}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    let heart = ""
    if (tuit.liked === true) {
        heart = "https://cdn-icons-png.flaticon.com/512/833/833472.png"
    } else {
        heart = "https://cdn-icons-png.flaticon.com/512/833/833300.png"
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
                    <div><b>{tuit.userName}</b> <img alt={tuit.alt} src="https://cdn-icons-png.flaticon.com/512/6785/6785425.png" width="15px" height="15px"/> {tuit.handle} - {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div className={"row"}>
                        <div className="col-3">
                            <p className="wd-count float-left"><input type="image" alt="replies" src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" width="18px" height="18px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.replies}</p>
                        </div>
                        <div className="col-3">
                            <p className="wd-count float-left"><input type="image" alt="retuites" src="https://cdn-icons-png.flaticon.com/512/2515/2515846.png" width="22px" height="22px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.retuits}</p>
                        </div>
                        <div className="col-3">
                            <p className="wd-count float-left"><input type="image" alt="likes" src={heart} width="20px" height="20px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.likes}</p>
                        </div>
                        <div className="col-3">
                            <p className="wd-count float-left"><input type="image" alt="share" src="https://as1.ftcdn.net/v2/jpg/03/05/39/60/1000_F_305396000_ii7fvVVRqfo4AAhxCA2Oxpiy3Hci0nZY.jpg" width="25px" height="25px" name="saveForm" className="btTxt submit" id="saveForm"/></p>
                        </div>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default TuitItem;