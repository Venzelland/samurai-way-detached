import {rerenderEntireTree} from "../render";

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogsData: Array<DialogType>
    messageData: Array<MessageType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type AppPropsType = {
    state: RootStateType;
    addPost?: (postMessage: string) => void;
    addMessage?: (dialogsMessage: string) => void;
};


let state: RootStateType = {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first comment?", likesCount: 23},
                {id: 1, message: "Blabla", likesCount: 24},
                {id: 2, message: "YO", likesCount: 1},
            ],
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Pol"},
                {id: 2, name: "John"},
                {id: 3, name: "Katy"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Victor"},
                {id: 6, name: "Kosty"},
            ],
            messageData:
                [
                    {id: 1, message: "Hi"},
                    {id: 2, message: "How are you?"},
                    {id: 3, message: "YO"},
                    {id: 4, message: "Hi"},
                    {id: 5, message: "Hi"},
                    {id: 6, message: "Hi"},
                ],
        },
        sidebar: {}
    }

export const addPost = (postMassage: string): void => {
    const newPost: PostType = {
        id: 5,
        message: postMassage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const addMessage = (newMessageText: string) => {
    const newMessage: MessageType = {
        id: state.dialogsPage.messageData.length + 1,
        message: newMessageText
    };

    state.dialogsPage.messageData.push(newMessage);

    const newDialog: DialogType = {
        id: state.dialogsPage.dialogsData.length + 1,
        name: "Иван"
    };

    state.dialogsPage.dialogsData.push(newDialog);

    rerenderEntireTree(state);
};



export default state
