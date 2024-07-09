// app/components/VisitasTable.tsx
import React, { useEffect, useState } from 'react'
import useStore from '../store'
import { VisitaType } from '../../../types'

interface VisitasTableProps {
      clientId: string
}

const VisitasTable: React.FC<VisitasTableProps> = () => {
      const { selectedClient, startDate, endDate, visitas, setVisitas } = useStore()
      useEffect(() => {
            if (endDate === null || startDate === null) return
            fetch(`/api/visitas/${selectedClient.id}/?startDate=${startDate}&endDate=${endDate}`)
                  .then((response) => {
                        if (!response.ok) {
                              console.log('ERROR', response.headers, response.status, response.statusText)
                              throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
                        }

                        return response.json()
                  })
                  .then((visitas: VisitaType[]) => {
                        setVisitas(visitas)
                        console.log('Visitas', visitas)
                        return visitas
                  })
                  .catch((error) => {
                        console.error('Error fetching clients:', error)
                  })
      }, [selectedClient, startDate, endDate])

      return (
            <div className="overflow-x-auto p-4">
                  <p>Total Visitas {visitas.length} </p>
                  <table className="table table-zebra table-xs">
                        <thead className="">
                              <tr h-6>
                                    <th scope="col">Data Visita</th>
                                    <th scope="col">Técnico</th>
                                    <th scope="col">Tipo Visita</th>
                                    <th scope="col">Hora Inicial</th>
                                    <th scope="col">Hora Final</th>
                                    <th scope="col">Observação</th>
                              </tr>
                        </thead>
                        <tbody className="p-2">
                              {visitas.map((visita) => (
                                    <tr key={visita.id_visita} className="">
                                          <td className="">{visita.data_visita}</td>
                                          <td className="">{visita.tecnico}</td>
                                          <td className="">{visita.tipo_visita}</td>
                                          <td className="">{visita.horainicial}</td>
                                          <td className="">{visita.horafinal}</td>
                                          <td className="">{visita.observacao}</td>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      )
}

export default VisitasTable
