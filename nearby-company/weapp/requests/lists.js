/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-07-17 21:51:02 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-07-17 21:51:02 
*/


import apiConfig from '../config/api-config';
import wxRequest from './wxRequest';


function getLists(parms) {

    let opts = {
        showLoading: true,
        ...parms,
    };

    wxRequest(opts, apiConfig.lists);

};

export default getLists;
