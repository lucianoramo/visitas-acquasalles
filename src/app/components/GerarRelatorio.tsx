import React from 'react'

function GerarRelatorio() {
      const handleDownload = async () => {
            const response = await fetch('/api/generate-pdf')
            if (response.ok) {
                  const blob = await response.blob()
                  const url = window.URL.createObjectURL(new Blob([blob]))
                  const link = document.createElement('a')
                  link.href = url
                  link.setAttribute('download', 'sample.pdf')
                  document.body.appendChild(link)
                  link.click()
                  if (link.parentNode) {
                        link.parentNode.removeChild(link)
                  }
                  window.URL.revokeObjectURL(url)
            } else {
                  console.error('Failed to download PDF')
            }
      }

      const showModal = () => {
            const modal = document.getElementById('exportReportModal') as HTMLDialogElement | null
            if (modal) {
                  modal.showModal()
            }
      }

      return (
            <div className="mx-8 my-4 flex justify-end">
                  <button className="btn" onClick={handleDownload}>
                        Exportar Relatório
                  </button>
                  <dialog id="exportReportModal" className="modal">
                        <div className="modal-box">
                              <h3 className="p-5 text-lg font-bold">Exportar Relatório</h3>
                              <p className="py-4">Seu relatório foi exportado com sucesso</p>
                              <div className="modal-action">
                                    <form method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="primary btn">Fechar</button>
                                    </form>
                              </div>
                        </div>
                  </dialog>
            </div>
      )
}

export default GerarRelatorio
