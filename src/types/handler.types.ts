import { ControllerClass } from './decorators.types';
import { MiddlewareFunction } from './middleware.types';
import { IMessage, IMessageEntity, IUpdate } from './update.types';
import { Answer, Location, Media, MessageCreator } from '../classes';
import { IUser } from './chat.types';

export interface IHandler {
  controller: ControllerClass;
  middlewares: MiddlewareFunction[];
  methodKey: string;
}

export type ArgsTypes = [
  IUpdate, // update
  IMessage | undefined, // message
  string | undefined, // message text
  Answer, // answer
  IMessageEntity[] | undefined, // message entities
  string[], // command params
  any, // params
  IUser | undefined, // sender
  number | undefined, // user id
];

export type ContentTypes = Media | Location | string | undefined | null;

export type HandlerMethod = ((...args: ArgsTypes) => MessageCreator | ContentTypes) & {
  prototype: { name: 'AsyncFunction' | 'Function' };
};
