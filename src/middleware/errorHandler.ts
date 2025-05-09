
import STATUS from "../constant/constant";
import { Request, Response, NextFunction } from "express";


interface CustomError extends Error {
    statusCode?: number;
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {

    const statusCode = err.statusCode || STATUS.INTERNAL_SERVER_ERROR;
    console.error(err.message)
    switch (statusCode) {
        case STATUS.BAD_REQUEST:
            res.status(statusCode).json({
                title: "Bad Request",
                message: err.message,
                stackTrace: err.stack

            })
            break;
        case STATUS.CONFLICT:
            res.status(statusCode).json({
                title: "Conflicting Resources",
                message: err.message,
                stackTrace: err.stack

            })
            break;
        case STATUS.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden Request",
                message: err.message,
                stackTrace: err.stack

            })
            break;
        case STATUS.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized Request",
                message: err.message,
                stackTrace: err.stack

            })
            break;
        case STATUS.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack

            })
            break;

        default:
            res.status(STATUS.INTERNAL_SERVER_ERROR).json({

                title: "Internal Server Error",
                message: err.message || "Something went wrong",
                stackTrace: err.stack

            })
            break;
    }

}
export default errorHandler