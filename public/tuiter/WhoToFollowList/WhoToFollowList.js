import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import whos from "../WhoToFollowList/who.js"

const WhoToFollowList = () => {
    return(`
    <div class="row border-no-bottom ">
        <div class="col-12 background-grey">
          <p>Who to Follow</p>
        </div>
      </div>
        ${
        whos.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
   `);
}
export default WhoToFollowList;