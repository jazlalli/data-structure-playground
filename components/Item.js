import React, { Component } from 'react';
import Group from './Group';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGroup: false
    };
  }

  handleClick(evt, id) {
    evt.preventDefault();
    evt.stopPropagation();

    this.setState({
      showGroup: !this.state.showGroup
    }, () => this.props.onItemClick(`${id}`));
  }

  render() {
    const { showGroup } = this.state;
    const { item, top } = this.props;

    let groups = [];
    if (item.modifier_groups.length) {
      groups = item.modifier_groups;
    }

    const displayGroups = groups
      .map(group => (<Group key={group.id} group={group} onGroupClick={() => this.props.onItemClick(`${item.id}:${group.id}`)} />));

    const style = {
      color: 'green',
      marginLeft: top ? 0 : '20px',
    };

    const name = top ? item.name : `> ${item.name}`;

    return (
      <div
        style={style}
        onClick={(e) => this.handleClick(e, item.id)}
      >
        { name }
        <span>
          {(displayGroups.length > 0 && showGroup) && displayGroups}
        </span>
      </div>
    );
  }
}

export default Item;
