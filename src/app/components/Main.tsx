'use client'
import React from 'react'
import ClientInfo from './ClientInfo'
import useStore from '../store'
import VisitasTable from './VisitasTable'
import Filters from './Filters'
import MedicoesTable from './MedicoesTable'
import ProdutosEntreguesTable from './ProdutosEntreguesTable'
import Header from './Header'
import MedicaoMensal from './MedicaoMensal'
import Footer from './Footer'
import ExtraComments from './ExtraComments'
import GerarRelatorio from './GerarRelatorio'

// Define the type for the Select option

const Main: React.FC = () => {
      const { selectedClient, visitas } = useStore()
      return (
            <div className="container mx-auto box-border h-full shadow-lg">
                  <Header />
                  <Filters />
                  <ClientInfo />
                  <MedicaoMensal />
                  {/* {selectedClient && <OrdersTable client={selectedClient} />} */}
                  {selectedClient && <VisitasTable clientId={selectedClient.value} />}
                  {selectedClient && <MedicoesTable ids={visitas.map((v) => v.id_visita)} />}
                  {selectedClient && <ProdutosEntreguesTable ids={visitas.map((v) => v.id_visita)} />}
                  <ExtraComments />
                  <GerarRelatorio />
                  <Footer />
            </div>
      )
}

export default Main
