const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
class Table {
  constructor(localStorageProp, mockTable) {
    this.localStorageProp = localStorageProp;
    this.table = JSON.parse(localStorage.getItem(this.localStorageProp));
    if (this.table === null) {
      this.table = mockTable;
      localStorage.setItem(this.localStorageProp, JSON.stringify(mockTable));
    }
  }

  add(text) {
    return new Promise((resolve, reject) => {
      this.log(this.table.data);
      this.table.data.push(text);
      localStorage.setItem(this.localStorageProp, JSON.stringify(this.table));
      this.table = JSON.parse(localStorage.getItem(this.localStorageProp));
      if (error) reject(this.log(error));
      resolve(this.table);
    });
  }

  remove(text) {
    const data = this.table.data.filter(el => el !== text);
    this.table.data = data;
    localStorage.setItem(this.localStorageProp, JSON.stringify(this.table));
  }

  // eslint-disable-next-line class-methods-use-this
  log(msg) {
    console.log(msg);
  }

  render() {
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');
    times.forEach((time) => {
      let row = document.createElement('tr');
      tableBody.append(row);
      row.innerHTML += `<th>${time}</th>`;
      days.forEach((day) => {
        const eventInDay = this.table.data[day].filter(eventObj => eventObj.time === time);
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
}

const table = new Table('data', {
  data: {
    Monday: [{ time: '10:00', user: 'Maria', title: 'One to one 1' }, { time: '12:00', user: 'Maria', title: 'One to one 2' }],
    Tuesday: [{ time: '10:00', user: 'Maria', title: 'One to one 121' }],
    Wednesday: [],
    Thursday: [],
    Friday: [{ time: '18:00', user: 'Maria', title: 'One to one 5' }]
  }
});

table.render();

export default Table;
