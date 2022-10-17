import posts from "./post.js";
import postSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
         ${
        posts.map(post => {
            return(postSummaryItem(post));
        }).join('')
    }
   `);
}

export default PostSummaryList