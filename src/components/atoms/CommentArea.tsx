import React from 'react';

type CommentAreaProps = {
  comment: string;
};

export const CommentArea: React.FC<CommentAreaProps> = ({ comment }: CommentAreaProps) => {
  return (
    <p className=" client-text review-card-shadow rounded-md bg-white px-4 py-2 font-semibold text-primary-medium">
      {comment}
    </p>
  );
};
