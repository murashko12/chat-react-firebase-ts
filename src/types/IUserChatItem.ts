export interface IUserChatItem {
    chatId: string;
    receiverId: string;
    lastMessage: string;
    updatedAt: Date;
    isSeen: boolean
}