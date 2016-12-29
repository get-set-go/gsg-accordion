import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGAccordionSession extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    const _accordionDOM = ReactDOM.findDOMNode(this);
    const _panelCollapse = _accordionDOM.querySelector('.panel-collapse');
    _panelCollapse.classList.toggle('in');
  }

  render() {
    const { _item, _bStyle } = this.props;

    let _bClass = {
      'panel': true,
      [`panel-${_bStyle}`]: true
    };

    _bClass = classNames(_bClass);

    return(
      <div className={_bClass}>
        <div className="panel-heading" onClick={this.toggleCollapse}>
          <h4 className="panel-title">
            <a data-toggle="collapse">{_item.props.title}</a>
          </h4>
        </div>
        <div className="panel-collapse collapse">
          <div className="panel-body">
            {_item.props.children}
          </div>
        </div>
      </div>
    );
  }
};

GSGAccordionSession.propTypes = {
  item: PropTypes.object,
  bStyle: PropTypes.string
};
