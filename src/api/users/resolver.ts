import Repository from './respository';
import logger from '../../helper/logger';

export default class UserResolver {
    public repository: any;
    constructor() {
        this.repository = new Repository();
    }
    // public async invite(data: any, token: string): Promise<any> {
    //     return await this.repository.invite(data, token);
    // }

    public async getuserlist(page: number, datalimit: number): Promise<any> {
        return await this.repository.getuserlist(page, datalimit);
    }
    public async getuserbyid(id: string): Promise<any> {
        return await this.repository.getuserbyid(id);
    }
    public async Createuser(payload: any): Promise<any> {
        return await this.repository.Createuser(payload);
    }
    public async searchuser(payload: any): Promise<any> {
        return await this.repository.searchuser(payload);
    }
    public async updateById(payload: any): Promise<any> {
        return await this.repository.updateById(payload);
    }
}
