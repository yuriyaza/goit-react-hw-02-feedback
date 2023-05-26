import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.types = {
  message: PropTypes.string.isRequired,
}
