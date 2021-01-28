const days = ['name', 'monday', 'tuesday', 'wednesday', 'thusday', 'friday'];
const table = {
  time: [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ],
  monday: [{ time: '10:00', user: 'Maria', title: 'One to one' }],
  tuesday: [],
  wednesday: [],
  thusday: [],
  friday: [],
};

function createTable() {
  const tableHead = document.getElementById('tableHead');
  const tableBody = document.getElementById('tableBody');

  table.time.map((time) => {
    days.map(day => {
      if(table[day].filter((objEvent => objEvent.time === time))) {
        tableBody.innerHTML += `<td>${time}</td>`;
      }else {
        tableBody.innerHTML += `<td></td>`;
      }
    })
  });
  days.map((day) => {
    tableHead.innerHTML += `<th>${day}</th>`;
  });
}

export default createTable;
