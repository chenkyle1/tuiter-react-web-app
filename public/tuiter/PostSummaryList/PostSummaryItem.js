const postItem = (post) => {
    return(`
    <div class="row middle-post post-middle-width background-grey">
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
          <p>
            <span class="color-light-gray">${post.topic}</span> <br>
            <b>${post.userName} <i class="fa-solid fa-circle-check"></i> <span class="color-light-gray">- ${post.time}</span><br>
              ${post.title} </b>
          </p>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3">
          <img class="middle-post-img" src="${post.image}">
        </div>
      </div>
    `);
}
export default postItem;