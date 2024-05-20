import React, { useState } from "react";

function ExtraComments() {
	const [comentarioGeral, setComentarioGeral] = useState("");

	const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComentarioGeral(event.target.value);
	};

	return (
		<div className='flex mx-8 my-4'>
			<label className='flex flex-col w-full'>
				Comentários Gerais
				<textarea
					className='textarea textarea-bordered  min-h-32'
					placeholder='Comentários...'
					value={comentarioGeral}
					onChange={handleCommentChange}></textarea>
			</label>
		</div>
	);
}

export default ExtraComments;
