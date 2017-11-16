/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import CollapseExample from '../examples/Collapse';
import CollapseEventsExample from '../examples/CollapseEvents';
const CollapseExampleSource = require('raw-loader!../examples/Collapse');

const CollapseEventsExampleSource = require('raw-loader!../examples/CollapseEvents');

export default class CollapsePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Collapse" />

        <h3>Collapse</h3>
        <div className="docs-example">
          <CollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CollapseExampleSource}
          </PrismCode>
        </pre>

        <h3>Properties</h3>
        <pre>
          <PrismCode className="language-jsx">
            {`Collapse.propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
};`}
          </PrismCode>
        </pre>

        <h3>Events</h3>
        <p>
          Use the <code>onEnter</code>, onEntering, onEntered, onExit, onExiting and onExited props for callbacks when the
          Collapse has finished opening (entering) or closing (exiting).
        </p>
        <div className="docs-example">
          <CollapseEventsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CollapseEventsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
