/* eslint-disable guard-for-in */
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
class Table {
  constructor(localStorageProp, mockTable) {
    this.localStorageProp = localStorageProp;
    this.table = JSON.parse(localStorage.getItem(this.localStorageProp));
    if (!this.table) {
      this.table = mockTable;
      localStorage.setItem(this.localStorageProp, JSON.stringify(mockTable));
    }
  }

  add(text) {
    this.log(text);
    this.table.data[text.day].push(text);
    localStorage.setItem(this.localStorageProp, JSON.stringify(this.table));
    this.table = JSON.parse(localStorage.getItem(this.localStorageProp));
  }

  remove(idx) {
    console.log(idx);
    days.forEach(day => {
      const eventInDay = this.table.data[day].filter(eventObj => eventObj.id !== idx);
      this.log(eventInDay);
      localStorage.setItem('data', JSON.stringify(eventInDay));
    });
  }

  filter() {
    const header = document.querySelector('.header__select');
    header.addEventListener('change', () => {
      let name = header.options[header.selectedIndex].text;
      days.forEach((day) => {
        const eventInDay = this.table.data[day].filter(eventObj => eventObj.user[0].value === `${name}`);
        this.log(eventInDay);
      });
    });
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
          row.innerHTML += `<td id=${eventInDay[0].id} class='hasTitle'>${eventInDay[0].title}</td>`;
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
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: []
  }
});

export default table;
