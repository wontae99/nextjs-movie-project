import CommentListItem from "./comment-list-item";

export default function CommentHistory({
  commentData,
  currentPage,
  totalPageNum,
}) {
  const index = currentPage - 1;
  let currentComments;
  if (index === totalPageNum - 1) {
    currentComments = commentData.slice(index * 5);
  } else {
    currentComments = commentData.slice(index * 5, index + 5);
  }

  return (
    <ol className="word-break border-l border-gray-200 dark:border-gray-600">
      {currentComments.map((comment) => (
        <CommentListItem
          key={comment.content.content + comment.content.contentId}
          date={comment.date}
          content={comment.content}
          comment={comment.comment}
        />
      ))}
    </ol>
  );
}
