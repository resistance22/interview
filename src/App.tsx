import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Comments from './components/comment';
import type { Comment } from './components/comment.type';

function App() {
	const [comments, setComments] = useState<Comment[] | null>(null);

	useEffect(() => {
		axios.get<Comment[]>('http://localhost:3000/comment').then((value) => setComments(value.data));
	}, []);

	if (!comments) return null;
	return <Comments data={comments} />;
}

export default App;
