import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SwitchLabel from 'src/SwitchLabel';
import TestWrapper from './TestWrapper';

describe('SwitchLabel 镜像测试', () => {
  it('渲染SwitchLabel', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchLabel />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('不可用状态', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchLabel disabled />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('选中状态', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchLabel checked color="accent" />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('验收测试', () => {
  afterEach(cleanup);

  it('focused下的样式类', () => {
    const { container, getByTestId } = render(
      <TestWrapper>
        <SwitchLabel />
      </TestWrapper>,
    );

    const input = container.querySelector('input') as HTMLInputElement;

    fireEvent.focus(input);

    expect(getByTestId('switchLabel')).toHaveClass('sinoui-switch--focused');

    fireEvent.blur(input);
    expect(getByTestId('switchLabel')).not.toHaveClass(
      'sinoui-switch--focused',
    );
  });
});
