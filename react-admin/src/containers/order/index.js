/**
 *  author : bo.peng
 *  createTime 2018-11-06 17:20
 *  description :
 */
import React from 'react';
import {RouteChildren} from "../../router";
const Order=({ parent, children })=> {
	return <RouteChildren parent={parent} children={children}/>
};
export default Order;