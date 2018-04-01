// import other librart here

import sequelize from '../../sequelize-connection';
import * as _ from 'lodash';
import logger from '../../helper/logger';

// import model here 

export default class Repository {
 constructor() {
     sequelize.sync().then();
 }

 // add function promise 
}
