class ApiError extends Error {
constructor(
    statusCode, 
    message= "something wen wrong",
    errors = [],
    statck = ""
){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false 
    this.errors = this.errors

    if (stack) {
        this.stack = stack
    } else {
        ErrorcaptureStacktrace(this, this.constructor)
    }
}

}
export {ApiError}