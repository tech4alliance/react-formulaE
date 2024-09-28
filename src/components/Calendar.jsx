import React from 'react';
import '../css/calendar.css';
    
const Calendar = () => {
  const months = [
    {
      name: 'JULHO',
      events: [
        { date: '11', description: 'CORRIDA NO SUL' },
        { date: '21', description: 'DOCUMENTÁRIO NOVO: FÓRMULA E' },
        { date: '22', description: 'CORRIDA NO NORTE' },
        { date: '24', description: 'ANIVERSÁRIO DO PILOTO' },
        { date: '25', description: 'CORRIDA FINAL: NORTE' },
      ],
    },
    {
      name: 'AGOSTO',
      events: [
        { date: '11', description: 'CORRIDA NO SUL' },
        { date: '21', description: 'DOCUMENTÁRIO NOVO: FÓRMULA E' },
        { date: '22', description: 'CORRIDA NO NORTE' },
        { date: '24', description: 'ANIVERSÁRIO DO PILOTO' },
        { date: '25', description: 'CORRIDA FINAL: NORTE' },
      ],
    },
  ];

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h2>CALENDÁRIO</h2>
        <div className="month-names">
          {months.map((month) => (
            <h3 key={month.name}>{month.name}</h3>
          ))}
        </div>
      </div>
      <div className="calendar-body">
        <div className="months-container">
          {months.map((month) => (
            <div key={month.name} className="month-events">
              {month.events.map((event, index) => (
                <div key={index} className="event">
                  <span className="event-date">{event.date} - </span>
                  <span className="event-description">{event.description}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="calendar-footer">
          <button className="view-all-button">
            VER CALENDÁRIO COMPLETO →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;