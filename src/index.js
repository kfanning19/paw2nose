import React from 'react';
import ReactDOM from 'react-dom';
import MessageBoard from './MessageBoard'


window.initializeMessageBoard = function() {
    ReactDOM.render(<MessageBoard petId={PHILOPETS.petId} />, document.getElementById('message-board'));
};