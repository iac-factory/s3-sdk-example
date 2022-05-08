import { GetObjectCommandInput, PutObjectCommandInput, S3Client } from "@aws-sdk/client-s3";

import * as URI from "url";
import * as Network from "net";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { Client } from "./client.js";
import * as HTTP from "http";

type Generic = any;
type URL = import("@aws-sdk/types").StringSigner | string;
type Commands = GetObjectCommandInput | PutObjectCommandInput | Generic;

interface Settings {
    headers?: HTTP.OutgoingHttpHeaders | undefined;
    setHost?: boolean | undefined;
    lookup?: Network.LookupFunction | undefined;
    agent: boolean;
    socketPath?: string | undefined;
    method: string;
    auth?: string | null | undefined;
    timeout?: number | undefined;
    maxHeaderSize?: number | undefined;
    defaultPort?: number | string | undefined;
    path: string | null | undefined;
    protocol?: string | null | undefined;
    hostname?: string | null | undefined;
    rejectUnauthorized?: boolean;
    _defaultAgent?: HTTP.Agent | undefined;
    port?: number | undefined;
    localAddress?: string | undefined;
    requestCert: boolean;
    host?: string;
    family?: number | undefined;
    signal?: AbortSignal | undefined;

    createConnection?: (
        options: HTTP.ClientRequestArgs,
        oncreate: (err: Error, socket: Network.Socket) => void
    ) => Network.Socket | undefined;
}

class Signer {
    client: Promise<S3Client> = new Client().instantiate();

    expiration = 900;

    url: URL | Generic;
    settings?: Settings | Generic;

    /***
     * HTTPs Query Configuration Object
     *
     * @constructor
     *
     */

    protected configuration (): Settings {
        const $: URL | Generic = new URI.URL( String(this.url) );
        $.rejectUnauthorized = false;
        return $;
    };

    protected async generate(command: Commands) {
        this.url = await getSignedUrl( await this.client, command, {
            expiresIn: this.expiration
        } );

        this.settings = this.configuration();
    }

    protected constructor(expiration = 900) {
        this.expiration = expiration;
    }
}

export { Signer };

export default Signer;