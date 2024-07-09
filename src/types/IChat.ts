import { IChatItem } from "./IChatItem";

export interface IChat {
    id: string;
    createdAt: Date;
    message: IChatItem[];
}