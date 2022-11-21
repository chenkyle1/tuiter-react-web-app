import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "https://imgs.search.brave.com/JKDkrEPDJH8sZpfKg6PREpotMjurAwQqyhRB5GGWWEo/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9tZWRp/YS1leHAxLmxpY2Ru/LmNvbS9kbXMvaW1h/Z2UvQzU2MEJBUUVi/cUxRLUpFMHZkUS9j/b21wYW55LWxvZ29f/MjAwXzIwMC8wP2U9/MjE1OTAyNDQwMCZ2/PWJldGEmdD1LbXRE/VW5nTGpLVklxanNq/WjljM0lFTnd1blFB/R2thdTNfQVpoOXJT/ZU9n",
            "alt" : "Profile picture of space x",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
    ) => {
    const dispatch = useDispatch();
    let heart = ""
    if (tuit.liked === true) {
        heart = "https://cdn-icons-png.flaticon.com/512/833/833472.png"
    } else {
        heart = "https://cdn-icons-png.flaticon.com/512/833/833300.png"
    }

    let thumb = ""
    if (tuit.disliked === true) {
        thumb = "https://cdn-icons-png.flaticon.com/512/1634/1634070.png"
    } else {
        thumb = "https://cdn-icons-png.flaticon.com/512/1633/1633636.png"
    }
    return(
        <div className={"row"}>
            <div className="col-3">
                <p className="wd-count float-left"><input type="image" alt="replies" src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" width="18px" height="18px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.replies}</p>
            </div>
            <div className="col-3">
                <p className="wd-count float-left"><input type="image" alt="retuites" src="https://cdn-icons-png.flaticon.com/512/2515/2515846.png" width="22px" height="22px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.retuits}</p>
            </div>
            <div className="col-3">
                <p className="wd-count float-left"><input type="image" alt="likes" src={heart} onClick={() => {
                    if (tuit.liked) {
                        dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes - 1,
                            liked: false,
                    }))} else {
                    dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true,
                    }))}}} width="20px" height="20px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.likes}</p>
            </div>
            <div className="col-3">
                <p className="wd-count float-left"><input type="image" alt="share" src="https://as1.ftcdn.net/v2/jpg/03/05/39/60/1000_F_305396000_ii7fvVVRqfo4AAhxCA2Oxpiy3Hci0nZY.jpg" width="25px" height="25px" name="saveForm" className="btTxt submit" id="saveForm"/></p>
            </div>
            <div className="col-3">
                <p className="wd-count float-left"><input type="image" alt="likes" src={thumb} onClick={() => {
                    if (tuit.disliked) {
                        dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes + 1,
                            disliked: false,
                        }))} else {
                        dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes - 1,
                            disliked: true,
                        }))}}} width="20px" height="20px" name="saveForm" className="btTxt submit" id="saveForm"/> {tuit.dislikes}</p>
            </div>
        </div>
        )
}

export default TuitStats