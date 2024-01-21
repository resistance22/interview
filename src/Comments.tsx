import React, {useEffect, useState} from 'react'
import axios from "axios";

const Comments = () => {

    const [response, setResponse] = useState([])

    const fetch = () => {
        axios.get('http://localhost:3000/comment').then(
            res => setResponse(res.data)
        )
    }


    const ParentComments = (comments, marginLeft = 0) => {
        return comments.map((item) => (
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '10px',
                    color: 'black',
                    width: '100%',
                    height: '200px',
                    marginLeft: `${marginLeft}px`,
                    marginBottom: '15px',
                    border:'1px solid black'
                }}
                key={item.id}
            >
                <>
                    <p>{item.id}</p>
                    <h5>{item.comment}</h5>
                </>
                {item.children && item.children.length > 0 && (
                    <div style={{marginLeft: '20px'}}>
                        {ParentComments(item.children, 20)}
                    </div>
                )}
            </div>
        ));
    };

    const CommentTree = (comments, parentId = null) => {
        let Sort = comments.filter((item) => item.parent === parentId)
            .map((item) => ({
                ...item,
                children: CommentTree(comments, item.id),
            }));

        return Sort
    };

    const ChildComments = CommentTree(response);


    useEffect(() => {
        fetch()
    }, []);

    return (
        <div>
            {ParentComments(ChildComments)}
        </div>
    )
}
export default Comments
