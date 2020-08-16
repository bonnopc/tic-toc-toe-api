export default (error) => {
    // console.log('Error format: ', JSON.stringify(error, null, 4));

    switch (error.extensions.code) {
        case 'INTERNAL_SERVER_ERROR':
            return {
                message: error.message,
                statusCode: 500
            };
        case 'NOT_ACCEPTABLE':
            return {
                message: error.message,
                statusCode: 406
            };
        // case 'UNAUTHENTICATED':
        //     return {
        //         message: error.message,
        //         statusCode: 401
        // };
        // case 'UNAUTHORIZED':
        //     return {
        //         message: error.message,
        //         statusCode: 403
        // };
        default:
            return error;
    }
};
