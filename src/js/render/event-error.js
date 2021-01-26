export const eventError = () => {
  const errBody = document.createElement('div');
  const errIcon = document.createElement('span');
  const closeBtn = document.createElement('button');
  const errMessage = 'Failed to create an event. Time slot already is blocked';

  errBody.append(errIcon);
  errBody.append(errMessage);
  errBody.append(closeBtn);

  return errBody;
};
