const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
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
    '18:00'
  ],
  monday: [{ time: '10:00', user: 'Maria', title: 'One to one' }, { time: '12:00', user: 'Maria', title: 'One to one' }],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: []
};

function createTable() {
  const tableHead = document.getElementById('tableHead');
  const tableBody = document.getElementById('tableBody');
  table.time.map((time) => {
    let row = document.createElement('tr');
    tableBody.append(row);
    days.map((day) => {
      // eslint-disable-next-line no-return-assign
      table[day].filter((item) => item.time === time
        ? (row.innerHTML += `<td/>${item.title}</td>`)
        // eslint-disable-next-line quotes
        : (row.innerHTML += `<td/></td>`));
    });
  });

  table.time.map(time => {
    tableBody.innerHTML += `<tr><td/>${time}</td></tr>`;
  });

  days.map((day) => {
    tableHead.innerHTML += `<th>${day}</th>`;
  });
}

export default createTable;
