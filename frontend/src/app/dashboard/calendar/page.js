// app/dashboard/calendar/page.js
import PageHeader from '@/app/components/PageHeader'
import Card from '@/app/components/Card'
import { Calendar as CalendarIcon } from 'lucide-react'

// Item de Evento
function EventItem({ data, titulo, grupo }) {
  return (
    <div className="flex items-start gap-4 p-5 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-gray-100">
        <span className="text-sm font-bold text-gray-700">{data.dia}</span>
        <span className="text-xs font-semibold text-gray-500 uppercase">{data.mes}</span>
      </div>
      <div>
        <p className="font-semibold text-gray-800">{titulo}</p>
        <p className="text-sm text-gray-500 flex items-center gap-1.5">
          <CalendarIcon size={14} className="text-gray-400" />
          {grupo}
        </p>
      </div>
    </div>
  )
}

export default function CalendarPage() {
  return (
    <div>
      <PageHeader title="Calendário" />
      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 px-5">Próximos Eventos</h3>
        <div className="divide-y divide-gray-100">
          <EventItem data={{ dia: '25', mes: 'OUT' }} titulo="Prova de Cálculo II" grupo="Matemática Avançada" />
          <EventItem data={{ dia: '26', mes: 'OUT' }} titulo="Entrega do Projeto" grupo="Programação Web" />
          <EventItem data={{ dia: '28', mes: 'OUT' }} titulo="Reunião de Estudo" grupo="Banco de Dados" />
        </div>
      </Card>
    </div>
  )
}