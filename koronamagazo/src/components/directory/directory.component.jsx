import React from 'react'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItemn from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps}) =>(
      <MenuItemn key={id} {...otherSectionProps} />       // by using ...otherSectionProps, we dont need to write everything inside in section
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory); 