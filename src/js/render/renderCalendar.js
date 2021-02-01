const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
export const table = {
  time: [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00'
  ],
  Monday: [{ time: '10:00', user: 'Maria', title: 'One to one 1' }, { time: '12:00', user: 'Maria', title: 'One to one 2' }],
  Tuesday: [{ time: '10:00', user: 'Maria', title: 'One to one 3' }],
  Wednesday: [],
  Thursday: [],
  Friday: [{ time: '18:00', user: 'Maria', title: 'One to one 5' }]
};

function createTable() {
  const tableHead = document.getElementById('tableHead');
  const tableBody = document.getElementById('tableBody');

  table.time.forEach((time) => {
    let row = document.createElement('tr');
    tableBody.append(row);
    row.innerHTML += `<th>${time}</th>`;
    days.forEach((day) => {
      const eventInDay = table[day].filter(eventObj => eventObj.time === time);
      if (eventInDay.length >= 0 && eventInDay[0]) {
        row.innerHTML += `<td>${eventInDay[0].title}</td>`;
      } else {
        row.innerHTML += '<td></td>';
      }
    });
  });

  days.forEach((day) => {
    tableHead.innerHTML += `<th>${day}</th>`;
  });
}

export default createTable;
