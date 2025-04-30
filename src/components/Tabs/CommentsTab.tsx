import { Comment, comments } from "@/lib/data/data";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";


const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <div className="mb-4">
      {/* Main comment */}
      <div
        className={`p-4 rounded-lg ${
          comment.authorId === "am"
            ? "bg-emerald-700 text-white"
            : "bg-amber-100 text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                comment.authorId === "am"
                  ? "bg-[#FDE8CD] text-emerald-800"
                  : "bg-amber-200 text-amber-800"
              }`}
            >
              {comment.authorInitials}
            </div>
            <span className="font-medium text-[#FDE8CD]">{comment.authorName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-80 text-[#FDE8CD]">{comment.timeAgo}</span>
            <button className="opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
        <p>{comment.text}</p>
      </div>
      
      {/* Reply button */}
      <div className="mt-1 mb-2">
        <button className="text-gray-500 text-sm flex items-center gap-1">
        <BsArrowReturnRight />
          Reply
        </button>
      </div>
      
      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-4">
          {comment.replies.map((reply) => (
            <div key={reply.id}>
              <div
                className={`p-4 rounded-lg mb-4 ${
                  reply.authorId === "am"
                    ? "bg-emerald-700 text-white"
                    : "bg-[#FDE8CD] text-gray-800"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        reply.authorId === "am"
                          ? "bg-emerald-200 text-emerald-800"
                          : "bg-emerald-800 text-[#FDE8CD]"
                      }`}
                    >
                      {reply.authorInitials}
                    </div>
                    <span className="font-medium text-emerald-800">{reply.authorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-emerald-800 opacity-80">{reply.timeAgo}</span>
                    <button className="opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p>{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CommentsTab = () => {
  const [newComment, setNewComment] = useState("");

  return (
    <div className=" bg-gray-50 p-2">
      <div>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="mt-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment"
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm"
        />
      </div>
    </div>
  );
};

export default CommentsTab;