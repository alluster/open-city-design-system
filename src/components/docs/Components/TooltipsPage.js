/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import TooltipExample from '../examples/Tooltip';
import TooltipAutoHideExample from '../examples/TooltipAutoHide';
import TooltipExampleMulti from '../examples/TooltipMulti';
import TooltipExampleUncontrolled from '../examples/TooltipUncontrolled';

const TooltipExampleSource = require('raw-loader!../examples/Tooltip');
const TooltipExampleAutoHideSource = require('raw-loader!../examples/TooltipAutoHide');
const TooltipExampleMultiSource = require('raw-loader!../examples/TooltipMulti');
const TooltipExampleUncontrolledSource = require('raw-loader!../examples/TooltipUncontrolled');

export default class TooltipsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Tooltips" />
        <h3>Tooltips</h3>
        <p>Tooltips are built with <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a>.</p>
        <div className="docs-example">
          <TooltipExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Tooltip.propTypes = {
  // boolean to control the state of the tooltip
  isOpen: PropTypes.bool,
  // callback for toggling isOpen in the controlling component
  toggle: PropTypes.func,
  // target element or element ID, popover is attached to this element
  target:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,
  // Where to inject the popper DOM node, default to body
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
  // optionally override show/hide delays - default { show: 0, hide: 250 }
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  className: PropTypes.string,
  // Apply class to the inner-tooltip
  innerClassName: PropTypes.string,
  // optionally hide tooltip when hovering over tooltip content - default true
  autohide: PropTypes.bool,
  // convenience attachments for popover
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ])
}`}
          </PrismCode>
        </pre>
        <h3>Tooltip Disable Autohide</h3>
        <div className="docs-example">
          <TooltipAutoHideExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleAutoHideSource}
          </PrismCode>
        </pre>
        <h3>Tooltips List</h3>
        <div className="docs-example">
          <TooltipExampleMulti />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleMultiSource}
          </PrismCode>
        </pre>
        <h3>Uncontrolled Tooltip</h3>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledTooltip</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <TooltipExampleUncontrolled />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleUncontrolledSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
