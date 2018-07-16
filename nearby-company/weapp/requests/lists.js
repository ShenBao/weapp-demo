/*
 * @Author: ShenBao 
 * @Date: 2018-07-15 20:43:56 
 * @Last Modified by: ShenBao
 * @Last Modified time: 2018-07-16 22:46:33
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
