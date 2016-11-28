import React, { Component } from 'react';
import Item from './Item';

export default class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false
    };
  }

  handleClick(evt, id) {
    evt.preventDefault();
    evt.stopPropagation();
    this.setState({
      showItems: !this.state.showItems
    }, () => this.props.onGroupClick(`${id}`));
  }

  render() {
    const { group } = this.props;
    const { showItems } = this.state;

    let items = [];
    if (group.modifier_options.length) {
      items = group.modifier_options;
    }

    const displayItems = items
      .map(item => (<Item key={item.id} item={item} onItemClick={() => this.props.onGroupClick(`${group.id}:${item.id}`)} />));

    const style = {
      color: 'palevioletred',
      marginLeft: '20px',
    };

    return (
      <div style={style} onClick={(e) => this.handleClick(e, group)}>
        {group.name}

        <span>
          {(displayItems.length > 0 && showItems) && displayItems}
        </span>
      </div>
    );
  }
}
