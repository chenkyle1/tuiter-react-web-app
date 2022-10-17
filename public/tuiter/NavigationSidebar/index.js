const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <a class="list-group-item active" href="/">
       <i class="fa-solid fa-house"></i><span class="gone"> Home</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-hashtag"></i><span class="gone"> Explore</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-bell"></i><span class="gone"> Notification</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-envelope"></i><span class="gone"> Messages</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-bookmark"></i><span class="gone"> Bookmark</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-list"></i><span class="gone"> Lists</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-user"></i><span class="gone"> Profile</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-ellipsis"></i><span class="gone"> More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;