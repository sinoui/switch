import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Switch from 'src/Switch';
import TestWrapper from './TestWrapper';

describe('Switch 镜像测试', () => {
  it('渲染Switch', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <Switch value="switch1" />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('不可用状态', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <Switch value="switch2" disabled />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('选中状态', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <Switch value="switch3" checked color="accent" />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
