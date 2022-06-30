import { ILocation, IMessage } from './update.types';

export interface IUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: true;
  added_to_attachment_menu?: true;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
}

export interface IChat {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?: IChatPhoto;
  bio?: string;
  has_private_forwards?: true;
  description?: string;
  invite_link?: string;
  pinned_message?: IMessage;
  permissions?: IChatPermissions;
  slow_mode_delay?: number;
  message_auto_delete_time?: number;
  has_protected_content?: true;
  sticker_set_name?: string;
  can_set_sticker_set?: true;
  linked_chat_id?: number;
  location?: IChatLocation;
}

export interface IChatPhoto {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
}

export interface IChatLocation {
  location: ILocation;
  address: string;
}

export interface IChatPermissions {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
}
