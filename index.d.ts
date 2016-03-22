declare namespace JSONRpcV2 {

    namespace Server {
        function $create(options?: ServerOptions): Server;
    }

    interface Server {
        listen(port: number, host: string);
        expose(name: string, callback: (args: string[], opt: any, callback: (error: any, result?: any) => void) => void);
    }

    interface ServerOptions {
        websockets?: boolean;
        headers?: Object;
    }


}

declare module 'json-rpc2' {
    export = JSONRpcV2
}
