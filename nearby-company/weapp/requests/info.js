/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-07-17 21:50:55 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-07-17 21:50:55 
*/


import apiConfig from '../config/api-config';
import wxRequest from './wxRequest';


function getInfo(parms) {

    let opts = {
        showLoading: true,
        ...parms,
    };

    wxRequest(opts, apiConfig.info);

};

export default getInfo;
