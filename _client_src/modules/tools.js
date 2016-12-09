/**
* @Author: SplendourHui
* @Date:   2016-12-09T11:35:24+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T11:37:58+08:00
*/

export const getAction = (actionPrefix, actionName, actionStatus) =>
  `${actionPrefix}_${actionName}${actionStatus ? `_${actionStatus}` : ''}`;
