import React from 'react';
import PropTypes from 'prop-types';

const ChatBubble = ({ message, sender }) => (
    <div>
        <strong>{sender}</strong>: {message}
    </div>
);

ChatBubble.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
};

export default ChatBubble;
