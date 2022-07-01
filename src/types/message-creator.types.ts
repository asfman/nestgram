import { MediaFileTypes } from './media.types';

export type SendTypes =
  | 'send'
  | 'alert'
  | 'toast'
  | 'forward'
  | 'copy'
  | 'chatAction'
  | 'ban'
  | 'unban'
  | 'restrict'
  | 'promote'
  | 'adminTitle'
  | 'saveFile'
  | 'saveProfilePhoto'
  | 'setChatPermissions'
  | 'approveJoinRequest'
  | 'declineJoinRequest'
  | 'setChatPhoto'
  | 'deleteChatPhoto'
  | 'setChatTitle'
  | 'setChatDescription'
  | 'pin'
  | 'unpin'
  | 'leave'
  | 'setChatStickerSet'
  | 'deleteChatStickerSet'
  | 'setMyCommands'
  | 'deleteMyCommands';

export type MessageCreatorTypes = MediaFileTypes | 'text' | 'location';
