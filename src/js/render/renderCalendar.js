/* eslint-disable guard-for-in */
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
const tableHead = document.getElementById('tableHead');
const tableBody = document.getElementById('tableBody');
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
    this.table.data[text.day].push(text);
    localStorage.setItem(this.localStorageProp, JSON.stringify(this.table));
    this.table = JSON.parse(localStorage.getItem(this.localStorageProp));
  }

  remove(idx) {
    days.forEach(day => {
      this.table.data[day] = this.table.data[day].filter(eventObj => eventObj.id !== idx);
    });
    localStorage.setItem('data', JSON.stringify(this.table));
    this.render();
  }

  filter() {
    const header = document.querySelector('.header__select');
    header.addEventListener('change', () => {
      let name = header.options[header.selectedIndex].text;
      days.forEach(day => {
        const users = this.table.data[day]
          .filter(item => item.user[0].value === `${name}`);
        this.render(users);
      });

      // eventObj.user[0].value
      // this.render(userEvent);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  clear() {
    tableBody.innerHTML = '';
    tableHead.innerHTML = '<th>Name</th>';
  }

  render(data) {
    this.clear();
    times.forEach((time) => {
      let row = document.createElement('tr');
      tableBody.append(row);
      row.innerHTML += `<th>${time}</th>`;
      days.forEach((day) => {
        let eventInDay;
        if (!data) {
          eventInDay = this.table.data[day].filter(eventObj => eventObj.time === time);
        } else {
          eventInDay = data;
        }
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
