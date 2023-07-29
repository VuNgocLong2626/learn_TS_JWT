import { Response } from 'express';

const StatusCode = {
    OK: 200,
    CREATE: 201
}

const ResponStatusCode = {
    OK: 'Success',
    CREATE: 'Created!'
}

interface Success {
    message: string,
    statusCode?: number,
    reasonStatusCode?: string,
    metadata: Object
}

interface SuccessOK {
    message: string,
    metadata: Object
}

class SuccessResponse {
    private message: string;
    private status: number;
    private metadata: Object


    constructor({ message, statusCode = StatusCode.OK, reasonStatusCode = ResponStatusCode.OK, metadata = {} }: Success) {
        this.message = !message ? reasonStatusCode : message;
        this.status = statusCode;
        this.metadata = metadata;
    }

    send(res: Response) {
        return res.status(this.status).json(this);
    }
}

class OK extends SuccessResponse {

    constructor({message, metadata}: SuccessOK) {
        super({message, metadata})
    }
}

class CREATE extends SuccessResponse {

    constructor({ message, statusCode = StatusCode.CREATE, reasonStatusCode = ResponStatusCode.CREATE, metadata }: Success) {
        super({ message, statusCode, reasonStatusCode, metadata})
    }
}

export {
    OK,
    CREATE
}