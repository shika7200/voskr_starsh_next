import React from "react";
import { Post } from "../types";

function Card(post: Post) {
    return (
        <>
            <h2>{post.header}</h2>
            <p>{post.body}</p>
        </>
    );
}

export default Card;
