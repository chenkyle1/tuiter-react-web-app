const WhoToFollowListItem = (who) =>{
    return(`
    <div class="row border-grey background-grey">
        <div class="col-xl-2 col-lg-2">
          <img class="follow-profile-pic" src="${who.avatarIcon}">
        </div>
        <div class="col-xl-6 col-lg-5">
          <a><b class="font-small">${who.userName} </b><i class="fa-solid fa-circle-check"></i></a>
          <p class="font-smaller">@${who.handle}</p>
        </div>
        <div class="col-xl-4 col-lg-3">
          <a class="btn btn-primary btn-follow float-right mt-2" href="#">Follow</a>
        </div>
      </div>
    `);
}

export default WhoToFollowListItem