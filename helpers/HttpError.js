const HttpError = (status, message) => {
    const err = new Error(message)
    err.status = status
    return err
 };

 export default HttpError