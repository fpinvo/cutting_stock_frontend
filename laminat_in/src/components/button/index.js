import React from "react";
import PropTypes from 'prop-types';
import { ActionButton, ConfirmButton, DeleteButton } from "./components";

export const Button = (props) => {
  if (props.state === 'confirm') {
    return <ConfirmButton {...props} />
  }
  if (props.state === 'delete') {
    return <DeleteButton {...props} />
  }
  return <ActionButton {...props} />
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  big: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['outlined', 'text', 'solid']),
  state: PropTypes.oneOf(['confirm', 'delete', 'action']),
  icon: PropTypes.node,
  borderColor: PropTypes.string,
};