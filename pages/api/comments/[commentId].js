import { comments } from "../../../data/comments";

/*export default function handler(req,res){
    const {commentId} = req.query
    const comment = comments.find((comment)=>comment.id===parseInt(commentId))
    if(req.method==='GET'){
        res.status(200).json(comment)
    }
    else if(req.method==='DELETE'){
        const deletedComment = comments.find(
            (comment)=>comment.id === parseInt(commentId)
        )
        const index = comments.findIndex(
            (comment)=>comment.id===parseInt(commentId)
        )
        comments.splice(index,1)
        res.status(200).json(deletedComment)
    }
   
}*/

function Comment({ comment }) {
    return (
      <div>
        {comment.id}. {comment.text}
      </div>
    )
  }
  
  export default Comment
  
  export async function getStaticProps(context) {
    const { params } = context
    const { commentId } = params
  
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    console.log(comment)
  
    /** Don't do this 
    const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
    const data = await response.json()
    */
  
    return {
      props: {
        comment
      }
    }
  }
  
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { commentId: '1' } },
        { params: { commentId: '2' } },
        { params: { commentId: '3' } }
      ],
      fallback: false
    }
  }