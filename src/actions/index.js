// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export function setMessages() {
  // Using an AJAX request directly in the action doesn't work as the fetch action returns a promise and not a payload
  const promise =  fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());

    return {
      type: SET_MESSAGES,
      payload: promise
    };
}

// src/actions/index.js
export function createMessage(channel, author, content) {
  // TODO
  const body = { content: content, author: author };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: NEW_MESSAGE,
    payload: promise
  };
}

export function fetchMessages(channel) {
  // Using an AJAX request directly in the action doesn't work as the fetch action returns a promise and not a payload
  const fetched =  fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

    return {
      type: FETCH_MESSAGES,
      payload: fetched
    };
}

export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    payload: channel
  }
}
