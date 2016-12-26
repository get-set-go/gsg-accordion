import '../node_modules/gsg-common-style/less/panel/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

import AccordionSession from './GSGAccordionSession.jsx';

export default class GSGAccordion extends React.Component {
  render() {
    let _listItems = this.props.children.map((listitem) => <AccordionSession key={listitem.index} _bStyle={this.props.bStyle} _item={listitem}></AccordionSession>);

    return(
      <div className="panel-group">
        {_listItems}
      </div>
    );
  }
};

GSGAccordion.propTypes = {
  bStyle: PropTypes.string
};

GSGAccordion.defaultProps = {
  bStyle: 'default'
};
