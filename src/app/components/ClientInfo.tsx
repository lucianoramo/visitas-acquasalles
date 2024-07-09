'use client'
import React from 'react'
import useStore from '../store'

const ClientInfo: React.FC = () => {
      const { selectedClient } = useStore()

      if (!selectedClient) return <div>Select a client</div>

      return (
            <>
                  <ul className="mx-8 mb-8 w-full">
                        <li className=" ">
                              <strong>Razão Social: </strong>
                              {selectedClient?.razao_social || 'n/a'}
                        </li>
                        <li className=" ">
                              <strong>Cnpj: </strong>
                              {selectedClient?.cnpj || 'n/a'}
                        </li>
                        <li className=" ">
                              <strong>Cidade: </strong>
                              {selectedClient?.cidade || 'n/a'}
                        </li>
                        <li className=" ">
                              <strong>Estado: </strong>
                              {selectedClient?.estado || 'n/a'}
                        </li>
                  </ul>
            </>
      )
}

export default ClientInfo
