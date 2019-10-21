import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { useRipple } from '@sinoui/ripple';
import { getColorFromTheme } from 'sinoui-components/utils/colors';

export interface Props {
  inputClassName?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | ((dom: HTMLInputElement) => void);
  /**
   * 给input元素应用上新的属性
   */
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  color?: string;
}

interface WrapperProps {
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

const checkedWrapperStyle = css<WrapperProps>`
  transform: translateX(50%);
  color: ${(props) =>
    getColorFromTheme({
      color: props.color || 'primary',
      theme: props.theme,
      disabled: props.disabled,
    })};

  & + .sinoui-switch-track {
    background-color: ${(props) =>
      getColorFromTheme({
        color: props.color || 'primary',
        theme: props.theme,
        disabled: props.disabled,
      })};
    opacity: 0.5;
  }
`;

const disabledWrapperStyle = css<WrapperProps>`
  color: ${(props) =>
    props.theme.palette.type === 'light' ? '#bdbdbd' : '#424242'};

  & + .sinoui-switch-track {
    opacity: ${(props) => (props.checked ? 0.5 : 0.12)};
  }
`;

const SwitchBaseWrapper = styled.span<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  color: ${(props) =>
    props.theme.palette.type === 'light' ? ' #fafafa' : '#bdbdbd'};
  z-index: 1;
  transition: ${(props) =>
    props.theme.transitions.create(['left', 'transform'], {
      duration: props.theme.transitions.duration.shortest,
    })};
  padding: 9px;
  ${(props) => props.checked && checkedWrapperStyle};
  ${(props) => props.disabled && disabledWrapperStyle};

  & .sinoui-switch-input {
    top: 0;
    left: -100%;
    width: 300%;
    cursor: inherit;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    z-index: 1;
    position: absolute;
  }

  & .sinoui-switch-label {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  & .sinoui-switch-thumb {
    width: 20px;
    height: 20px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    background-color: currentColor;
  }
`;

export default function SwitchBase(props: Props) {
  const {
    inputClassName,
    checked,
    disabled,
    color,
    name,
    value,
    onChange,
    inputProps,
    inputRef,
  } = props;
  const rippleRef = useRipple();
  return (
    <SwitchBaseWrapper
      ref={rippleRef}
      checked={checked}
      disabled={disabled}
      color={color}
      className={classNames('sinoui-switch-base', {
        'sinoui-switch-base__checked': checked,
        'sinoui-switch-base__disabled': disabled,
      })}
    >
      <span className={classNames('sinoui-switch-label')}>
        <input
          type="checkbox"
          className={classNames('sinoui-switch-input', inputClassName)}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
          ref={inputRef}
          {...inputProps}
        />
        <span className="sinoui-switch-thumb" />
      </span>
    </SwitchBaseWrapper>
  );
}
