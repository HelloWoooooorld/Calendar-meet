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
  tuesday: [{ time: '10:00', user: 'Maria', title: 'One to one' }],
  wednesday: [],
  thursday: [],
  friday: []
};

function createTable() {
  const tableHead = document.getElementById('tableHead');
  const tableBody = document.getElementById('tableBody');

  // eslint-disable-next-line array-callback-return
  table.time.map((time) => {
    let row = document.createElement('tr');
    tableBody.append(row);
    row.innerHTML += `<td>${time}</td>`;
    // eslint-disable-next-line array-callback-return
    days.map((day) => {
      // eslint-disable-next-line no-return-assign
      table[day].filter((item) => item.time === time
        ? (row.innerHTML += `<td/>${item.title}</td>`)
        : (row.innerHTML += ''));
    });
  });

  // eslint-disable-next-line array-callback-return
  days.map((day) => {
    tableHead.innerHTML += `<th>${day}</th>`;
  });
}

export default createTable;
