import type { Comment } from './comment.type';

type Props = {
	data: Comment[];
};

const Comments = ({ data: comments }: Props) => {
	const rootComments = comments.filter((comment) => comment.parent === null);
	return (
		<div>
			{rootComments.map((root) => (
				<div key={root.id} className="comment-root">
					<h3>{root.title}</h3>
					<p>{root.comment}</p>
					{appendChildrens(root.id, comments)}
				</div>
			))}
		</div>
	);
};

export default Comments;

const appendChildrens = (parentId: number, comments: Comment[]) => {
	const children = comments.filter((comment) => comment.parent === parentId);
	if (children.length === 0) return null;

	return (
		<ul>
			{children.map((child) => (
				<li key={child.id}>
					<div className="comment-child">
						<h4>{child.title}</h4>
						<p>{child.comment}</p>
						{appendChildrens(child.id, comments)}
					</div>
				</li>
			))}
		</ul>
	);
};
