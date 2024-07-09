import React, { useState } from 'react'

function ExtraComments() {
      const [comentarioGeral, setComentarioGeral] = useState('')

      const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setComentarioGeral(event.target.value)
      }

      return (
            <div className="mx-8 my-4 flex">
                  <label className="flex w-full flex-col">
                        Comentários Gerais
                        <textarea
                              className="textarea textarea-bordered  min-h-32"
                              placeholder="Comentários..."
                              value={comentarioGeral}
                              onChange={handleCommentChange}
                        ></textarea>
                  </label>
            </div>
      )
}

export default ExtraComments
