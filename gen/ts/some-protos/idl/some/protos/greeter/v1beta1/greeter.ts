/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "some.protos.greeter.v1beta1";

/** The request message containing the user's name. */
export interface SayHelloRequest {
  /** The user's name. */
  name: string;
}

/** The response message containing the greetings */
export interface SayHelloResponse {
  /** The message */
  message: string;
}

function createBaseSayHelloRequest(): SayHelloRequest {
  return { name: "" };
}

export const SayHelloRequest = {
  encode(
    message: SayHelloRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SayHelloRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSayHelloRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SayHelloRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: SayHelloRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<SayHelloRequest>): SayHelloRequest {
    const message = createBaseSayHelloRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSayHelloResponse(): SayHelloResponse {
  return { message: "" };
}

export const SayHelloResponse = {
  encode(
    message: SayHelloResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SayHelloResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSayHelloResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SayHelloResponse {
    return {
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: SayHelloResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<SayHelloResponse>): SayHelloResponse {
    const message = createBaseSayHelloResponse();
    message.message = object.message ?? "";
    return message;
  },
};

/** The greeting service definition. */
export const GreeterServiceDefinition = {
  name: "GreeterService",
  fullName: "some.protos.greeter.v1beta1.GreeterService",
  methods: {
    /** Sends a greeting */
    sayHello: {
      name: "SayHello",
      requestType: SayHelloRequest,
      requestStream: false,
      responseType: SayHelloResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
