import * as Boom from 'boom';
import Logger from '../../helper/logger';
import Utils from '../../helper/utils';
import * as  Hapi from 'hapi';

//  import  resolver
import { users } from '../../model/users';
import UserResolver from './resolver';
import logger from '../../helper/logger';

/*
1. route --> (controller -->resolver) -> respository --> validata
*/

export default class UserController {
    public resolver: any;
    constructor() {
        this.resolver = new UserResolver();
    }
    // function 
  
    public getuserlist = async (request: Hapi.Request , response: Hapi.ReplyNoContinue): Promise<any> => {
      try {
        Logger.info(`GET - ${Utils.getUrl(request)}`);
        const page = encodeURIComponent(request.params.page);
        const datalimit = encodeURIComponent(request.params.datalimit);
        const data: any = this.resolver.getuserlist(page , datalimit);
        return response(data);
      } catch (error) {
        Logger.info(error);
      }
    };
    public getuserbyid = async (request: Hapi.Request , response: Hapi.ReplyNoContinue): Promise<any> => {
      try {
        Logger.info(`GET - ${Utils.getUrl(request)}`);
        const rollno = encodeURIComponent(request.params.rollno);
        const data: any = this.resolver.getuserbyid(rollno);
        return response(data);
      } catch (error) {
        Logger.info(error);
      }
    };
    public Createuser = async (request: Hapi.Request , response: Hapi.ReplyNoContinue): Promise<any> => {
      try {
        Logger.info(`POST - ${Utils.getUrl(request)}`);
        const payload = request.payload;
        const data: any = this.resolver.Createuser(payload);
        return response(data);
      } catch (error) {
        Logger.info(error);
        return response(Boom.badImplementation(error.message));
      }
    } 
    public searchuser = async (request: Hapi.Request , response: Hapi.ReplyNoContinue): Promise<any> => {
     try {
       Logger.info(`POST - ${Utils.getUrl(request)}`);
       const search = request.payload;
       const data: any = this.resolver.searchuser(search);
       return response(data);
      } catch (err) {
        Logger.info(err);
        return response(Boom.badImplementation(err.message));
      }
    }
    public updateById = async (request: Hapi.Request , response: Hapi.ReplyNoContinue): Promise<any> => {
      try {
        Logger.info(`POST - ${Utils.getUrl(request)}`);
       // const rollno = encodeURIComponent(request.params.rollno);
        const updatedata = request.payload;
        const data: any = this.resolver.updateById(updatedata); 
        return response (data); 
      } catch (err) {
        Logger.info(err);
        return response(Boom.badImplementation(err.message));
      }
    }
}
