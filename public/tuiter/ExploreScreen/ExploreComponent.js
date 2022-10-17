import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                 <div class="row">
        <div class="ps-3 col-10 form-group has-search pt-2">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="  Search Tuiter">
        </div>
        <div class="col-1 mt-1 pt-2 float-left ">
          <i class="fa-solid fa-gear search-gear"></i>
        </div>
      </div>
           </div>
           <ul class="nav mb-1 nav-tabs">
               <div class="row">
        <ul class="ms-3 mt-2 mb-2 col-12 nav nav-tabs float-left">
          <li class="nav-item">
            <a class="nav-text-mid nav-link active" href="#">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-text-mid nav-link" href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-text-mid nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-text-mid nav-link" href="#">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-text-mid nav-link" href="#">Entertainment</a>
          </li>
        </ul>
      </div>
           </ul>
           <div class="row">
        <img class="col-xl-11 ms-1 main-image" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
      </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
