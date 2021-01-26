export const eventPopup = () => {
  const popupBody = document.createElement('div');
  const inputBody = document.createElement('div');
  const btnGroup = document.createElement('div');

  const eventName = document.createElement('p');
  const eventNameInput = document.createElement('input');

  const eventParticipants = document.createElement('p');
  eventParticipants.textContent = 'Participants:';
  const eventParticipantsSelect = document.createElement('select');

  const eventDay = document.createElement('p');
  eventDay.textContent = 'Day:';
  const eventDaySelect = document.createElement('select');

  const eventTime = document.createElement('p');
  eventTime.textContent = 'Time:';
  const eventTimeSelect = document.createElement('select');

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  const createBtn = document.createElement('button');
  createBtn.textContent = 'Create';

  popupBody.append(inputBody);

  inputBody.append(eventName);
  inputBody.append(eventNameInput);
  inputBody.append(eventParticipants);
  inputBody.append(eventParticipantsSelect);
  inputBody.append(eventDay);
  inputBody.append(eventDaySelect);
  inputBody.append(eventTime);
  inputBody.append(eventTimeSelect);

  btnGroup.append(cancelBtn);
  btnGroup.append(createBtn);

  return popupBody;
};
