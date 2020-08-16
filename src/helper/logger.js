import util from 'util';

export default (request, response, responseDateTime, isError) => {
    const log = {};
    
    if (request && request.hasOwnProperty('context')) {
        // log.eventId = request.context.event.id;
        log.user = request.context.user;
        log.operationName = request.context.operationName;
        log.request = request.context.requestQueryData;
        if (response.data && response.data[request.context.operationName]) {
            log.response = { 
                message: response.data[request.context.operationName].message, 
                statusCode: response.data[request.context.operationName].statusCode 
            };
        }
        // log.requestTime = request.context.event.dateTime;
        // log.requestTimestamp = request.context.event.timestamp;
    }

    if (isError) {
        console.info('response->', response);
        if (response.path) {
            log.operationName = response.path[0];
        }
        log.error = { message: response.message, error: JSON.stringify(response.extensions.exception)}
    }

    log.responseTime = responseDateTime.dateTime;
    log.responseTimestamp = responseDateTime.timestamp;

    console.info(util.inspect(log, false, null));
}
