const generate = (status: number, isError: boolean, data: any, message: string) => {
    return {
        status,
        isError,
        data,
        message
    };
}

export default {
    generate
}